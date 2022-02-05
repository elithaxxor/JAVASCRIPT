import "./styles.css";
import { useState } from "react";
// import ToggleComponent from "./ToggleComponent";

export default function ToggleComponent() {
  const [value, toggleValue] = useState(false);

  return (
    <html>
      {value.toString()}
      <button onClick={toggleValue}> Nullify </button> <i></i>
      <button onClick={() => toggleValue(true)}> Make True </button> <i></i>
      <button onClick={() => toggleValue(false)}> Make False </button>
    </html>
  );
}
