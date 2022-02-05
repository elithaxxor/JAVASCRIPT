import "./styles.css";
import { useState, useEffect } from "react";

function useWindowSize() {
  // SET STATE (WINDOW DIMENSIONS) AFTER useWindowSize()
  const [size, setSize] = useState([window.innerHeight, window.innerWidth]);

  useEffect(() => {
    // to listen and dynamically update state.
    const handleWindow = () => {
      setSize([window.innerHeight, window.innerWidth]);
    };

    window.addEventListener("resize", handleWindow);

    return () => {
      //CLEAN UP
      window.removeEventListener("resize", handleWindow);
    };
  }, []);
  return size;
}

export default function App() {
  const [height, width] = useWindowSize(); // INILIZE
  return (
    <div className="App">
      <h1>
        {" "}
        height: {height} : width {width} {/* RENDER */}
      </h1>
    </div>
  );
}
