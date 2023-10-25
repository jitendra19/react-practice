import { useEffect, useMemo, useState } from "react";
import "./styles.css";

const gapBorder = {
  border: "lightgrey 1px solid",
  padding: "0px",
  margin: "5px"
  // height: "0px"
};

// custom hook
function useDoubleNumber(number) {
  const [doubleNumber, setDoubleNumber] = useState(0);
  setTimeout(() => {
    setDoubleNumber(number * 2);
  }, 1000);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setDoubleNumber(number * 2);
  //   }, 1000);
  // }, [number]);
  return doubleNumber;
}

export default function App() {
  const [number, setNumber] = useState(0);
  // const doubleValue = useDoubleNumber(number);
  // console.log("calling me...rendering");
  // const doubleValue = slowFunction(number);
  const doubleValue = useMemo(() => slowFunction(number), [number]);
  const handleNumberChange = (e) => {
    // console.log("handle number");
    setNumber(parseInt(e.target.value));
  };
  const [theme, setTheme] = useState(false);
  const themeStyle = useMemo(() => {
    return {
      background: theme ? "white" : "black",
      color: theme ? "black" : "white",
      border: "black 1px solid",
      margin: "10px"
    };
  }, [theme]);

  useEffect(() => {
    console.log("theme changed");
  }, [themeStyle]);

  const handleClick = () => {
    // console.log("handle click theme");
    setTheme(!theme);
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <input type="number" value={number} onChange={handleNumberChange} />
      <div style={gapBorder}></div>
      <button onClick={handleClick}>ChangeTheme</button>
      <div style={gapBorder}></div>
      <p style={themeStyle}>{doubleValue}</p>
    </div>
  );
  function slowFunction(num) {
    console.log("caling slow function");
    for (let i = 0; i < 10001; i++) {}
    return num;
  }
}
