import "./styles.css";
import { useReducer, useState, useEffect } from "react";
import { Button, Form, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  const [color, setColor] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [count, setCount] = useState(0);
  //const [state, dispatch ] = useReducer(reducer, ( count: 0, ))

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
          onClick={() => setCount((oldVal) => oldVal + 1)}
        >
          {" "}
          +{" "}
        </Button>
        <Button
          variant="danger"
          onClick={() => setCount((oldVal) => oldVal - 1)}
        >
          {" "}
          -{" "}
        </Button>
        <Card.Footer> {count} </Card.Footer>
      </section>
    </main>
  );
}
