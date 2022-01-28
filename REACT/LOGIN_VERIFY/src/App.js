import "./styles.css";
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";

//<label for='credentials'> Enter Login Info: </label>
// npm install -g json-server

export default function App() {
  const [loginStatus, setLogin] = useState(false); // bool to set login

  // for the database
  const [isPending, setPending] = useState(true); // timeout for db load
  const [employees, setEmployees] = useState([]);
  const [passwords, setPasswords] = useState([]);

  // to fetch user info on form
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [verification, setVerification] = useState(false);

  // const onSubmit = (e) => {
  //   console.log(e);
  // };
  // useEffect(()=> {
  //   resp = await fetch("http://localhost:5000/accounts").then();

  // })
  useEffect(() => {
    console.log(loginStatus);
    console.log("Employee ", userName);
    console.log("Pass ", password);
  });

  // fetch all db upon page load and set login, pass and verification status.
  useEffect(() => {
    setTimeout(() => {
      console.log(loginStatus);
      console.log("Employee ", userName);
      console.log("Pass ", password);
      const fechUsers = async () => {
        const resp = await fetch("http://localhost:5000/accounts");
        const loginData = await resp.json(); //.then((loginData) => {
        console.log(loginData);
        setEmployees(loginData.userName);
        setPasswords(loginData.password);
        setVerification(setVerification.status);
        setPending(false);
        console.log(
          `userName ${employees} \n password ${passwords} \n verification ${verification}`
        );

        if (resp && resp.data) {
          // need to reframe this logic somehow
          console.log("[DB]-- \n", resp.status);
        } else {
          console.log("[DB]-- Non 200 from DB: \n", resp.status);
          alert("error in DB", resp.status);
        }
      };
    }, 1000);
  }, []);

  const onSubmit = () => {
    console.log("username input", userName);
    console.log("password input", password);
    console.log(loginStatus);
    console.log(employees);

    console.log(passwords.includes(passwords));

    if (
      userName.includes(employees) === true &&
      password.includes(passwords) === true
    ) {
      alert(`sucessfull login, ${userName}`);
      console.log(
        `userName ${userName} \n password ${password} \n verification ${verification}`
      );
      setLogin(!loginStatus);
      setVerification(true);
      console.log(loginStatus, verification);
      //setVerification(true)
    } else if (password.length < 1) {
      alert("You Must Enter A Password");
    } else {
      alert(` username ${userName}, or password ${password} incorrect`);
      setVerification(false);
      console.log(verification);
    }
  };
  //  {!employees &&

  return (
    <html>
      <header className="header">
        <Header />
      </header>
      {isPending && <div> loading db.. </div>}

      <Login
        isPending={isPending}
        loginStatus={loginStatus}
        employees={employees}
        setPasswords={setPasswords}
        onSubmit={onSubmit}
        password={password}
        passwords={passwords}
        setPassword={setPassword}
        setUserName={setUserName}
        userName={userName}
        setEmployees={setEmployees}
      />
      <footer className="footer" />
      <Footer />
    </html>
  );
}