import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TaskPage from "./pages/TaskPage";
import CreateTaskPage from "./pages/CreateTaskPage";

function App() {
  return (
    <div className="App">
      <Router>
        <h1>Task App</h1>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="tasks/:id" element={<TaskPage />} />
          <Route path="tasks/add" element={<CreateTaskPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
