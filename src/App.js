import React, { useCallback, useEffect, useState } from "react";

import ButtonWithToolTip from "./ButtonWithToolTip";
import "./styles.css";

function App() {
  return (
    <>
      {" "}
      <ButtonWithToolTip
        tooltipContent={
          <div>
            this tooltip doesnot fit above the code
            <br />
            this is why it's displayed below code
          </div>
        }
      >
        Hover over me (tooltip above)
      </ButtonWithToolTip>
      <div style={{ height: 50 }}></div>
      <ButtonWithToolTip
        tooltipContent={<div>this tooltip fit above the code</div>}
      >
        Hover over me (tooltip below)
      </ButtonWithToolTip>
      <div style={{ height: 50 }}></div>
      <ButtonWithToolTip
        tooltipContent={<div>this tooltip fit above the code</div>}
      >
        Hover over me (tooltip below)
      </ButtonWithToolTip>
    </>
  );
}

export default App;
