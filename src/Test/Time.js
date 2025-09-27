
import React, { useState, useEffect } from "react";
function Time() {
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  const colors = ["red", "green", "blue", "orange", "purple"];
  const currentColor = colors[seconds % colors.length];

  return (
    <div
      style={{
        marginTop: "20px",
        padding: "10px",
        borderRadius: "10px",
        textAlign: "center",
        backgroundColor: currentColor,
        color: "white",
      }}
    >
    </div>
  );
}
export default Time;