import { Form, Button } from "react-bootstrap";
import taskAPI from "../api/taskAPI";
import { useNavigate } from "react-router-dom";

function CreateTaskPage(props) {
  const navigate = useNavigate();

  const handleAddTask = async (evt) => {
    evt.preventDefault();

    const taskData = {
      title: evt.target.elements["title"].value,
      description: evt.target.elements["description"].value,
    };

    const data = await taskAPI.createTask(taskData);
    if (data) {
      navigate(`/tasks/${data.id}`);
    }
  };
  return (
    <Form onSubmit={handleAddTask} style={{ width: "30%", marginLeft: "35%" }}>
      <Form.Group className="mb-3" controlId="title">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Task Title" />
        <Form.Text className="text-muted">Enter your Task Title.</Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="description">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" placeholder="Task Description" />
        <Form.Text className="text-muted">
          Enter your Task Description.
        </Form.Text>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default CreateTaskPage;
