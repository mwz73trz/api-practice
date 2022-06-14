import { useParams, useNavigate } from "react-router-dom";
import taskAPI from "../api/taskAPI";
import Button from "react-bootstrap/Button";

function DeleteTaskPage(props) {
  const params = useParams();
  const navigate = useNavigate();
  const deleteTask = async () => {
    const data = await taskAPI.deleteTask(params.id);
    if (data) {
      navigate("/");
    }
  };

  return (
    <div>
      <h1>Delete Task Page</h1>
      <br />
      <h4>Are you sure you want to delete this task?</h4>
      <Button variant="danger" onClick={deleteTask}>
        Yes
      </Button>
      <Button>No</Button>
    </div>
  );
}

export default DeleteTaskPage;
