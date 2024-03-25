import React, { useCallback, useEffect, useRef, useState } from "react";
import Timer from "./Timer";
import ButtonWithToolTip from "./ButtonWithToolTip";
import "./styles.css";
import Input from "./Input";

function App() {
  let localvar = 0;
  console.log(localvar, "localvar"); // logs 0
  const ref = useRef(0);
  console.log(ref.current, "ref.current"); //logs
  const [mycount, setCount] = useState(0);
  const inputRef = useRef(null);

  return (
    <>
      <button onClick={() => (localvar += 1)}>Local Button</button>
      <button
        onClick={() => {
          ref.current += 1;
        }}
      >
        UseRef Button
      </button>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        Usestate Button
      </button>
      <div>
        <span>Local Variable:{localvar}</span>
        <span>UseRef value:{ref.current}</span>
        <span>Counter Value:{mycount}</span>
      </div>
      <div>My Timer</div>
      <Timer>This is Timer</Timer>
      <h4>DOM Example</h4>
      <Input ref={inputRef} />
      <button
        onClick={() => {
          console.log(inputRef.current.getBoundingClientRect());
          if (inputRef.current) inputRef.current.focus();
        }}
      >
        Focus the Input Box
      </button>
    </>
  );
}

export default App;
