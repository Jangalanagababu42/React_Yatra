import React, { useCallback, useState } from "react";
import Button from "./Button";
import Text from "./Text";

function App() {
  const [msg, setMsg] = useState("hey good morning.......");
  const handleClickAction = useCallback(() => {
    console.log("Before State Update", msg);
    setMsg((prevState) => {
      console.log("prev data is ", prevState);
      return "hey good afternoon";
    });
    console.log("After State Update", msg);
  }, []);
  console.log("when the state changes it updates whole component code  ");
  return (
    <>
      <div>{msg}</div>
      <Button clickAction={handleClickAction}>change message </Button>;
    </>
  );
}

export default App;
