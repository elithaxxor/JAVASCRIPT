import "./styles.css";
import useQuery from "./useQuery";
import { useState, useEffect, useRef } from "react";
import axios from "axios";

export default function App() {
  const [resp, respData] = useState({});

  const width = useRef("400/");
  const height = useRef("400");
  const { response } = useQuery(
    axios.get(`https://picsum.photos/${width.current}${height.current}`)
  );

  function handleClick(e) {
    console.log("api called");
    console.log(`https://picsum.photos/200/${width.current}${height.current}`);
    // console.log(response);
  }
  return (
    <div className="App">
      <button onClick={handleClick} />
      <img src={response.image} alt="" />
    </div>
  );
}
