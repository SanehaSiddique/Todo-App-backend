# ToDo App

A simple and efficient ToDo app that allows users to manage their tasks. This project includes a frontend built using React and Vite, and a backend powered by Node.js and Express.js. Tasks are stored persistently in a `tasks.json` file on the server.

---

## Features

### Frontend:
- Add new tasks.
- View the list of tasks.
- Delete existing tasks.
- Built with React (Vite for faster development).

### Backend:
- RESTful API endpoints to manage tasks.
- Persistent storage of tasks in a `tasks.json` file.
- Built with Node.js and Express.js.

---

## Project Structure

```
todo-app
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── App.jsx
│   │   ├── main.jsx
│   ├── vite.config.js
│   ├── package.json
│   └── ...
├── backend
│   ├── routes
│   │   ├── tasks.js
│   ├── tasks.json
│   ├── index.js
│   ├── package.json
│   └── ...
└── README.md
```

---

## Requirements

### Prerequisites:
- Node.js (v14 or later)
- npm or yarn

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/SanehaSiddique/todo-app.git
   cd todo-app
   ```

2. Setup the backend:
   ```bash
   cd backend
   npm install
   ```

3. Setup the frontend:
   ```bash
   cd ../frontend
   npm install
   ```

---

## Running the Application

### Start the Backend Server:
1. Navigate to the backend folder:
   ```bash
   cd backend
   ```

2. Run the server:
   ```bash
   node app.js
   ```
   The backend server will start on `http://localhost:5000` by default.

### Start the Frontend:
1. Navigate to the frontend folder:
   ```bash
   cd ../frontend
   ```

2. Start the Vite development server:
   ```bash
   npm run dev
   ```
   The frontend will run on `http://localhost:5173` by default.

---

## API Endpoints

### Base URL:
`http://localhost:5000`

#### GET /tasks
- **Description**: Fetch all tasks.
- **Response**: Array of tasks.

#### POST /tasks
- **Description**: Add a new task.
- **Request Body**: `{ "task": "Task description" }`
- **Response**: The newly added task.

#### DELETE /tasks/:id
- **Description**: Delete a task by ID.
- **Response**: Task deleted.

---

## How It Works

1. The user interacts with the frontend (React app) to add, view, and delete tasks.
2. The frontend communicates with the backend via RESTful API endpoints.
3. The backend stores tasks in `tasks.json` for persistence.

---

## Technologies Used

### Frontend:
- React (Vite for bundling and development)
- CSS (or your choice of styling library/framework)

### Backend:
- Node.js
- Express.js

---

## Future Enhancements

- Implement user authentication for personalized task lists.
- Add a database (e.g., MongoDB, PostgreSQL) for better scalability.
- Improve UI/UX with animations and responsive design.
- Add an "Edit Task" feature.

---

## Contact

For any questions or support, please reach out:
- Email: sanehasiddique1902@gmail.com
- GitHub: [SanehaSiddique](https://github.com/SanehaSiddique)

