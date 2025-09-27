import React, { useState, useEffect } from "react";

function State() {
  const [open, setOpen] = useState(1);
  const [close, setClose] = useState(100);
  const [timeoutId, setTimeoutId] = useState(null);

  function clickable() {
    setOpen(open + 1);
  }

  function clics() {
    setClose(close - 1);
  }

  useEffect(() => {
    console.log("Hello");

    const id = setTimeout(() => {
      console.log("Hello with delay");
    }, 7000);

    setTimeoutId(id);
    return () => clearTimeout(id);
  }, []);

  function timeoutFunction() {
    if (timeoutId) {
      clearTimeout(timeoutId);
      console.log("Timeout cleared!");
    }
  }                                                                                                                                                                                                                                                                                                                                                                                                                                                        

  return (
    <div>
      <h1>Open: {open}</h1>
      
      <button onClick={clickable}>Increase Open</button>
      <h1>Close: {close}</h1>

      <button onClick={clics}>Decrease Close</button>
      <button onClick={timeoutFunction}>Clear Timeout</button>
    </div>
  );
}

export default State;
