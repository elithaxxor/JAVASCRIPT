import "./styles.css";
import { useReducer, useState, useEffect } from "react";
import { Button, Form, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const reducer = (state, action) => {
  console.log("reducer ran");
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      //throw "reducer error";
      throw new Error();
  }
};
const ACTION = {
  INCREMENT: "increment",
  DECREMENT: "decrement"
};

// for reasons unknown, the useReducer count state is a string
export default function App() {
  const [color, setColor] = useState(false);
  const [userInput, setUserInput] = useState("");
  //const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, { count: "0" });

  useEffect(() => {
    console.log("current color: ", color);
    setColor(userInput);
  });

  return (
    <main className="App" style={{ color: color ? color : "#FFF952" }}>
      <br />
      <Card>
        <Card.Header> {userInput} </Card.Header>
      </Card>

      <Form>
        <Form.Group className="mb-3" controlID="formBasicEmail" />
        <Form.Text> Enter Color Code </Form.Text>
        <Form.Control
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="enter color code"
        />
      </Form>

      <br />
      <br />
      <section>
        <Button
          variant="success"
          onClick={() => dispatch({ type: ACTION.INCREMENT })}
        >
          {" "}
          +{" "}
        </Button>
        <Button
          variant="danger"
          onClick={() => dispatch({ type: ACTION.DECREMENT })}
        >
          {" "}
          -{" "}
        </Button>
        <Card.Footer> {state.count} </Card.Footer>
      </section>
    </main>
  );
}
