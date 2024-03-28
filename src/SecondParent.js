import React, { useCallback } from "react";
import ThirdParent from "./ThirdParent";

function SecondParent(props) {
  const { count1 } = props;
  const handleChange = useCallback(() => {
    console.log("handle change in 2nd component", count1);
  }, [count1]);
  return (
    <>
      im SecondParent
      <br />
      <ThirdParent handleChange={handleChange} />
    </>
  );
}

export default SecondParent;
