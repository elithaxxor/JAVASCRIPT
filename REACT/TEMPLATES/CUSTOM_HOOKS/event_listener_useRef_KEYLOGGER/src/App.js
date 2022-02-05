import "./styles.css";
import { useEffect, useRef, useState } from "react";

export default function App() {
  let clickRef = useRef(0);
  const [getUserInput, setUserInput] = useState("");

  // event listener key logger
  useEffect(() => {
    //onKeyDown onKeyPress onKeyUp

    window.addEventListener("keydown", (handleText) => {
      console.log("event via listener");
      //  alert("HELLO");
      return () => {
        window.removeEventListener("keydown", handleText);
      };
    });
  }, []);

  function handleText(e) {
    setUserInput(e.target.value);
    console.log(e.target.value);
    console.log(e.value);
    console.log("From State Management ", getUserInput);
  }

  function handleClick(e) {
    clickRef++;
    console.log(e.target.value);
    console.log("logged event", clickRef);
  }

  function handleOption(e) {
    clickRef++;
    console.log(e.target.value);
    console.log("optionChosen", clickRef);
  }

  return (
    <section>
      <div className="App">
        <button onClick={handleClick}> click me </button>
        <button onMouseEnter={handleClick}> mouse me </button>

        <select onChange={handleOption}>
          <option value="a"> A </option>
          <option> B </option>
          <option> C </option>
        </select>
      </div>

      <section>
        Input Box
        <input type="text" onChange={handleText} />
      </section>
    </section>
  );
}
