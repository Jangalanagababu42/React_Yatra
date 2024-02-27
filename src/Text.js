import React, { memo } from "react";

const Text = memo((props) => {
  const { children } = props;
  console.log(children, "child");
  return <div>{children}</div>;
});

export default Text;
