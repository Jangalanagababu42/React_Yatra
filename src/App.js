import React, { useCallback, useEffect, useState } from "react";
import Button from "./Button";
import Text from "./Text";

function App() {
  const [data1, setData1] = useState(0);
  const [data2, setData2] = useState(0);
  // useEffect(() => {
  //   console.log(" data1 useeffect running ");
  // }, [data1]);
  // useEffect(() => {
  //   console.log("data2 useeffect running ");
  // }, [data2]);

  return (
    <>
      {/* <div>{data1}</div> */}
      <Text ExternalData={data1}></Text>
      <button
        onClick={() => {
          setData1((prev) => prev + 1);
        }}
      >
        update{" "}
      </button>
      {/* <div>{data2}</div> */}
      <Text ExternalData={data2}></Text>
      <button
        onClick={() => {
          setData2((prev) => prev + 1);
        }}
      >
        update{" "}
      </button>
      ;
    </>
  );
}

export default App;
