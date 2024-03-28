import React, { useCallback, useEffect, useRef, useState } from "react";
import SecondParent from "./SecondParent";

function App() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount((prev) => prev + 1);
    console.log("i'm app parent");
  };
  return (
    <>
      Outer Most Parent <br /> {count}
      <br />
      <button onClick={handleClick}>Increment</button>
      <br />
      <SecondParent />
    </>
  );
}

export default App;
