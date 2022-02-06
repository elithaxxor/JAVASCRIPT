import "./styles.css";
import useRandomColor from "./useRandomColor";
import { useRef } from "react";

export default function App() {
  //const color = useRef("000000");

  const { color, changeColor } = useRandomColor();

  return (
    <div
      className="App"
      style={{
        width: "100vw",
        height: "100vw",
        backgroundColor: "#" + color
      }}
    >
      <button onClick={changeColor}> Change Color </button>
    </div>
  );
}
