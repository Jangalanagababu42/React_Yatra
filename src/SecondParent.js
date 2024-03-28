import React, { useCallback } from "react";
import ThirdParent from "./ThirdParent";

function SecondParent() {
  const myFunction = useCallback(() => {
    console.log("my function is called");
  }, []);
  const handleChange = useCallback(() => {
    console.log("handle change in 2nd component");
    myFunction();
  }, [myFunction]);
  return (
    <>
      im SecondParent
      <br />
      <ThirdParent handleChange={handleChange} />
    </>
  );
}

export default SecondParent;
