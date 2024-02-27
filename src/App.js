import React, { useState } from "react";
import Button from "./Button";
import Text from "./Text";

function App() {
  const [data, setData] = useState([
    { id: "a", text: "text 1" },
    { id: "b", text: "text 2" },
    { id: "c", text: "text 3" },
    { id: "d", text: "text 4" },
  ]);
  const handleClickAction = () => {
    setData((prev) => [{ id: "e", text: "text 5" }, ...prev]);
  };

  return (
    <>
      {data.map((item) => (
        <Text key={item.id}>{item.text}</Text>
      ))}

      <Button data={{ a: { s: { d: "c" } } }} clickAction={handleClickAction}>
        Click Me
      </Button>
    </>
  );
}

export default App;
