import { Button, Card } from "react-bootstrap";
import { Form as form0 } from "react-bootstrap";

const Form = ({
  isPending,
  loginStatus,
  employees,
  setPassword,
  onSubmit,
  password,
  passwords,
  setUserName,
  userName,
  setEmployees
}) => {
  var time = new Date();
  return (
    <html>
      <form0>
        <label for="input username"> </label>
        <input
          type="text"
          placeholder="username:"
          id="credentials-user"
          name="credentials-user"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        {console.log(employees)}
        <label for="input password"> </label>
        <input
          type="text"
          placeholder="password"
          id="credentials-pass"
          name="credentials-pass"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {console.log("password", password)};<br></br>
        <small id="login_help" class="form-text text-muted">
          {" "}
          your credentials are safe here ;)
        </small>
      </form0>

      <div>
        <Button
          class="btn btn-primary"
          type="submit"
          value={setPassword}
          onClick={onSubmit}
        >
          {" "}
          Login{" "}
        </Button>
      </div>
    </html>
  );
};

export default Form;
