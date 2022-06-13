import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TaskPage from "./pages/TaskPage";
import CreateTaskPage from "./pages/CreateTaskPage";
import UpdateTaskPage from "./pages/UpdateTaskPage";
import NavBar from "./components/NavBar";
import CheckLoginPage from "./pages/CheckLoginPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import { useState } from "react";

function App() {
  const [username, setUsername] = useState("");

  return (
    <div className="App">
      <Router>
        <NavBar username={username} setUsername={setUsername} />
        <Routes>
          <Route
            path="/login"
            element={<LoginPage setUsername={setUsername} />}
          />
          <Route path="/signup" element={<SignupPage />} />
          <Route
            path="/"
            element={
              <CheckLoginPage
                username={username}
                actualPage={() => <HomePage username={username} />}
              />
            }
          />
          <Route
            path="tasks/:id"
            element={
              <CheckLoginPage
                username={username}
                actualPage={() => <TaskPage username={username} />}
              />
            }
          />
          <Route
            path="tasks/add"
            element={
              <CheckLoginPage
                username={username}
                actualPage={() => <CreateTaskPage username={username} />}
              />
            }
          />
          <Route
            path="tasks/:id/update"
            element={
              <CheckLoginPage
                username={username}
                actualPage={() => <UpdateTaskPage username={username} />}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
