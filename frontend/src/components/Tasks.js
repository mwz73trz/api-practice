import { Link } from "react-router-dom";

function Tasks(props) {
  return (
    <div>
      <Link to={`tasks/${props.task.id}`}>{props.task.title}</Link>
    </div>
  );
}

export default Tasks;
