import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TaskPage from "./pages/TaskPage";
import CreateTaskPage from "./pages/CreateTaskPage";
import UpdateTaskPage from "./pages/UpdateTaskPage";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="tasks/:id" element={<TaskPage />} />
          <Route path="tasks/add" element={<CreateTaskPage />} />
          <Route path="tasks/:id/update" element={<UpdateTaskPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
