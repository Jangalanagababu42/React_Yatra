import React, { useCallback } from "react";
import ThirdParent from "./ThirdParent";

function SecondParent() {
  const handleChange = useCallback(() => {
    console.log("handle change in 2nd component");
  }, []);
  return (
    <>
      im SecondParent
      <br />
      <ThirdParent handleChange={handleChange} />
    </>
  );
}

export default SecondParent;
