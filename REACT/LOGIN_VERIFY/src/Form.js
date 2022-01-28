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
      <form>
        <label>User: </label>
        <input
          type="text"
          id="credentials-user"
          name="credentials-user"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <div>
          {console.log(employees)}
          <label> Password: </label>
          <input
            type="text"
            id="credentials-pass"
            name="credentials-pass"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {console.log("password", password)};
      </form>

      <div>
        <button style={{ background: "purple" }} onClick={onSubmit}>
          {" "}
          Login{" "}
        </button>
      </div>
    </html>
  );
};

export default Form;
