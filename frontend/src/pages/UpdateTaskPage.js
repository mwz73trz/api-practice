import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import taskAPI from "../api/taskAPI";
import { Form, Button } from "react-bootstrap";

function UpdateTaskPage(props) {
  const [task, setTask] = useState(null);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    loadTask();
  }, [params.id]);

  const loadTask = async () => {
    const data = await taskAPI.getTaskById(params.id);
    setTask(data);
  };

  const onSubmitHandler = async (evt) => {
    evt.preventDefault();

    const updatedTaskData = {
      title: evt.target.elements["title"].value,
      description: evt.target.elements["description"].value,
      completed: evt.target.elements["completed"].value,
    };

    const dataUpdated = await taskAPI.updateTask(params.id, updatedTaskData);
    setTask(dataUpdated);
    navigate(-1);
  };

  const renderTask = () => {
    if (!task) {
      return null;
    }

    return (
      <Form
        onSubmit={onSubmitHandler}
        style={{ width: "35%", marginLeft: "35%" }}
      >
        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" defaultValue={task.title} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" defaultValue={task.description} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="completed">
          <Form.Label>Completed</Form.Label>
          <Form.Control type="text" defaultValue={task.completed} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Update Task
        </Button>
      </Form>
    );
  };
  return (
    <div>
      <h1>Update Task Page</h1>
      {renderTask()}
    </div>
  );
}

export default UpdateTaskPage;
