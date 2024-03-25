// Timer.js
import React, { useEffect, useState, useLayoutEffect, useRef } from "react";

function Timer(props) {
  const interval = useRef(null);
  const { customText } = props;
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    // const
    interval.current = setInterval(() => {
      console.log("i am running set interval");
      setCounter((prev) => prev + 1);
    }, 1000);
    console.log("creating interval with ID " + interval.current);
    return () => {
      clearInterval(interval.current);
    };
  }, []);
  const TimeHandler = () => {
    console.log("stopping timer for the interval " + interval.current);
    clearInterval(interval.current);
  };
  return (
    <div>
      <h1>current timer :{counter}</h1>
      <button onClick={TimeHandler}>Stop Timer</button>
    </div>
  );
}

export default Timer;
