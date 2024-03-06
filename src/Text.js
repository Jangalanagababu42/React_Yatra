import React, { memo, useEffect } from "react";

const Text = memo((props) => {
  const { ExternalData, children } = props;
  useEffect(() => {
    console.log("ExternalData useeffect running ");
  }, [ExternalData]);
  // console.log(children, "child");
  return <div>{ExternalData}</div>;
});

export default Text;
