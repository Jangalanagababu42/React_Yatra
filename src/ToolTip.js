import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

function ToolTip(props) {
  const { children, targetPositions } = props;
  const { left, top, right, bottom } = targetPositions;
  const tooltipRef = useRef(null);
  const [tooltipHeight, setTooltipHeight] = useState(0);
  let x = 0;
  let y = 0;
  if (targetPositions !== null) {
    x = left;
    y = top - tooltipHeight;
    console.log("the tooltipHeight is ", tooltipHeight);
    if (y < 0) {
      y = bottom;
    }
  }
  let now = performance.now();
  while (performance.now() - now >= 400) {
    //do nothing to wait for the next frame
    //render blocking code
  }
  // useLayoutEffect(() => {
  //   const { height } = tooltipRef.current.getBoundingClientRect();
  //   setTooltipHeight(height);
  //   console.log("the height of the tooltip is ", height);
  // }, []);

  useLayoutEffect(() => {
    const { height } = tooltipRef.current.getBoundingClientRect();
    setTooltipHeight(height);
    console.log("the height of the tooltip is ", height);
  }, []);

  return createPortal(
    <div
      className="tooltip"
      ref={tooltipRef}
      style={{
        position: "absolute",
        pointerEvents: "none",
        left: 0,
        top: 0,
        transform: `translate3d(${x}px, ${y}px,0)`,
      }}
    >
      {children}
    </div>,
    document.body
  );
}

export default ToolTip;
