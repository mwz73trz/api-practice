import { useNavigate } from "react-router-dom";
import taskAPI from "../api/taskAPI";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function SignupPage(props) {
  const navigate = useNavigate();
  const handleSignup = async (evt) => {
    evt.preventDefault();

    const signupData = {
      username: evt.target.elements["username"].value,
      password: evt.target.elements["password"].value,
    };

    const data = await taskAPI.signup(signupData);
    if (data) {
      navigate("/login");
    }
  };
  return (
    <Form
      style={{ width: "30%", marginLeft: "35%" }}
      onSubmit={handleSignup}
      method="POST"
    >
      <h1>Sign Up Page</h1>
      <Form.Group className="mb-3" controlId="username">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Username" />
        <Form.Text className="text-muted">Enter your Username.</Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
        <Form.Text className="text-muted">Enter your Password.</Form.Text>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default SignupPage;
