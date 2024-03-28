import React, { memo, useState } from "react";

const ThirdParent = memo((props) => {
  const { handleChange } = props;
  const [counter, setCounter] = useState(0);
  let startTime = performance.now();
  while (performance.now() - startTime < 800) {
    // Do nothing for 500 ms to emulate extremely slow code
  }

  const Increement = () => {
    setCounter((prev) => prev + 1);
    handleChange?.();
  };
  return (
    <>
      Im super slow component
      <br />
      {counter}
      <br />
      <button onClick={Increement}>Increment</button>
    </>
  );
});

export default ThirdParent;
