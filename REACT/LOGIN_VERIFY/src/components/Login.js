import Form from "./Form";

const Login = ({
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
    <div>
      {console.log("the user name is adeldeep")}
      {console.log("Login Status \n", loginStatus)}
      {(console.log("Current Employees \n"), employees)}
      {employees
        ? ((className = "App"), console.log(employees))
        : ((className = "App"), setEmployees["2"], console.log(employees))}
      <h2> Login-Page {loginStatus} </h2>
      <h4> Please Login {loginStatus} </h4>
      {console.log(loginStatus)}

      <Form
        isPending={isPending}
        loginStatus={loginStatus}
        employees={employees}
        setPassword={setPassword}
        onSubmit={onSubmit}
        password={password}
        passwords={passwords}
        setUserName={setUserName}
        userName={userName}
        setEmployees={setEmployees}
      />
    </div>
  );
};

export default Login;
