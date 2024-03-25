import React, { useRef, useState } from "react";
import ToolTip from "./ToolTip";

function ButtonWithToolTip(props) {
  const { tooltipContent, children } = props;
  const [targetPositions, setPositions] = useState(null);
  const buttonRef = useRef(null);
  const handleMouseEnter = () => {
    const rect = buttonRef.current.getBoundingClientRect();
    setPositions({
      left: rect.left,
      top: rect.top,
      right: rect.right,
      bottom: rect.bottom,
    });
  };

  return (
    <>
      <button
        ref={buttonRef}
        onPointerEnter={handleMouseEnter}
        onPointerLeave={() => {
          setPositions(null);
        }}
      >
        {children}
      </button>
      {targetPositions && (
        <ToolTip targetPositions={targetPositions}>{tooltipContent}</ToolTip>
      )}
    </>
  );
}

export default ButtonWithToolTip;
