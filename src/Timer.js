// Timer.js
import React, { useEffect, useState, useLayoutEffect } from "react";

function Timer(props) {
  const { customText } = props;
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("i am running set interval");
      setCounter((prev) => prev + 1);
    }, 1000);
    console.log("creating interval with ID " + interval);
    return () => {
      console.log("i was unmounted");
      console.log("creating interval with ID " + interval);
      clearInterval(interval);
    };
  }, []);
  useEffect(() => {
    return () => {
      console.log("cleaning up function for 2nd useeffect with dependecies");
    };
  }, [customText]);
  useLayoutEffect(() => {
    console.log("this is called with useLayoutEffect");
  }, []);

  // useEffect(() => {
  //   console.log("no dependencies so rendering again and again");
  //   return () => {
  //     console.log("cleaning up function for 3rd useeffect with dependecies");
  //   };
  // });
  return (
    <div>
      <h1>{counter}</h1>
    </div>
  );
}

export default Timer;
