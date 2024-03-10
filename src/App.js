import React, { useCallback, useEffect, useState } from "react";
import Button from "./Button";
import Text from "./Text";
import Timer from "./Timer";

function App() {
  const [showTimer, ToggleTimer] = useState(true);

  return (
    <>
      {showTimer && <Timer customText="this is good clock" />}
      <button onClick={() => ToggleTimer(!showTimer)}>
        {showTimer ? "Stop Timer" : "Start Timer"}
      </button>
    </>
  );
}

export default App;
