import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import taskAPI from "../api/taskAPI";
import { Card } from "react-bootstrap";

function TaskPage(props) {
  const [task, setTask] = useState(null);
  const params = useParams();

  useEffect(() => {
    loadTask();
  }, [params.id]);

  const loadTask = async () => {
    const data = await taskAPI.getTaskById(params.id);
    setTask(data);
  };

  const renderTask = () => {
    if (!task) {
      return null;
    }

    return (
      <Card.Body style={{ width: "30%", marginLeft: "35%" }}>
        <Card.Title>
          <h2>Task Page</h2>
        </Card.Title>
        <Card.Subtitle>
          <h3>{task.title}</h3>
        </Card.Subtitle>
        <Card.Text>{task.description}</Card.Text>
        <Card.Text>{task.completed ? "Completed" : "Not Completed"}</Card.Text>
        <Link to={`update`}>Update Task</Link> | |{" "}
        <Link to={`/tasks/${task.id}/delete`}>Delete Task</Link>
      </Card.Body>
    );
  };
  return <Card>{renderTask()}</Card>;
}

export default TaskPage;
