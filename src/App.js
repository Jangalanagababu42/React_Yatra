import React from "react";
import Button from "./Button";

function App() {
  const handleClickAction = () => console.log("i was clicked from parent");

  return (
    <Button data={{ a: { b: { c: "d" } } }} clickAction={handleClickAction}>
      Click Me
    </Button>
  );
}

export default App;
