import { useEffect, useState } from "react";
import Tasks from "../components/Tasks";
import taskAPI from "../api/taskAPI";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

function HomePage(props) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    loadTasks();
  }, [props.username]);

  const loadTasks = async () => {
    const data = await taskAPI.getTasks();
    setTasks(data ? data : []);
  };

  const renderTasks = () => {
    return tasks.map((task, index) => {
      return (
        <ListGroup.Item key={index} as="li">
          <Tasks task={task} />
        </ListGroup.Item>
      );
    });
  };

  return (
    <ListGroup
      as="ul"
      style={{
        listStyle: "none",
        width: "30%",
        marginLeft: "35%",
      }}
    >
      <h1>Tasks for {props.username}</h1>
      {renderTasks()}
      <br />
      <Link to="tasks/add">Add Task</Link>
    </ListGroup>
  );
}

export default HomePage;
