const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');

const app = express();
const port = 5000;

// now we will make middlewares for our app
app.use(cors()); // this will allow all the requests from all the origins
app.use(bodyParser.json()); // this will allow us to parse the incoming json data

const dataFile = './tasks.json';

// helper function to read/write the data
const readTasks = () => {
    if(!fs.existsSync(dataFile)) {
        fs.writeFileSync(dataFile, JSON.stringify([]));
    }
    return JSON.parse(fs.readFileSync(dataFile));
};

const writeTasks = (tasks) => {
    fs.writeFileSync(dataFile, JSON.stringify(tasks, null, 2));
};

// routes

// GET: fetch all the tasks
app.get('/tasks', (req, res) => {
    const tasks = readTasks();
    res.json(tasks);
});

// POST: add a new task
app.post('/tasks', (req, res) => {
    const {task} = req.body;
    if(!task){
        return res.status(400).json({error: 'Task is required'});
    }

    const tasks = readTasks();
    const newTask = {id: Date.now(), task};
    tasks.push(newTask);
    writeTasks(tasks);
    return res.status(201).json(newTask);
});

// DELETE: delete a task by id
app.delete('/tasks/:id', (req, res) => {
    const {id} = req.params;
    const tasks = readTasks();
    const filteredTasks = tasks.filter((task) => task.id !== parseInt(id));

    if(tasks.length === filteredTasks.length){
        return res.status(404).json({error: 'Task not found'});
    }

    writeTasks(filteredTasks);
    res.json({message: 'Task deleted successfully'});
    
});

// start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});