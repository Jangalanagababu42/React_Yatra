import React, { useCallback, useEffect, useRef, useState } from "react";
import SecondParent from "./SecondParent";

function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const handleClick1 = () => {
    setCount1((prev) => prev + 1);
    console.log("i'm app parent count1");
  };
  const handleClick2 = () => {
    setCount2((prev) => prev + 1);
    console.log("i'm app parent count2");
  };
  return (
    <>
      Outer Most Parent 1 <br /> {count1}
      <br />
      <button onClick={handleClick1}>Increment</button>
      <br />
      Outer Most Parent 2 <br /> {count2}
      <br />
      <button onClick={handleClick2}>Increment</button>
      <br />
      <SecondParent count1={count1} />
    </>
  );
}

export default App;
