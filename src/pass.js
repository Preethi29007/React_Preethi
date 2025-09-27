import React, { useState } from "react";

function PassFailPopup() {
  const [passPercent, setPassPercent] = useState(0);
  const [failPercent, setFailPercent] = useState(0);

  const calculate = () => {
    // Get input via popups
    const total = Number(prompt("Enter total students:"));
    const pass = Number(prompt("Enter number of students who passed:"));

    if (total > 0 && pass <= total) {
      const passP = (pass / total) * 100;
      const failP = 100 - passP;
      setPassPercent(passP.toFixed(2));
      setFailPercent(failP.toFixed(2));
    } else {
      alert("Invalid input! Total must be > 0 and pass <= total.");
    }
  };

  return (
    <div>
      <h2>Pass & Fail Percentage</h2>
      <button onClick={calculate}>Calculate</button>
      <p>Pass Percentage: {passPercent}%</p>
      <p>Fail Percentage: {failPercent}%</p>
    </div>
  );
}

export default PassFailPopup;





// import React, { useState } from "react";

// function PassFailPercentage() {
//   const [total, setTotal] = useState("");
//   const [pass, setPass] = useState("");
//   const [passPercent, setPassPercent] = useState(0);
//   const [failPercent, setFailPercent] = useState(0);

//   const calculate = () => {
//     if (total > 0) {
//       const passP = (pass / total) * 100;
//       const failP = 100 - passP;
//       setPassPercent(passP.toFixed(2));
//       setFailPercent(failP.toFixed(2));
//     } else {
//       alert("Enter total students greater than 0");
//     }
//   };

//   return (
//     <div>
//       <h2>Pass & Fail Percentage</h2>

//       <input
//         type="number"
//         placeholder="Total Students"
//         value={total}
//         onChange={(e) => setTotal(e.target.value)}
//       />
//       <br /><br />

//       <input
//         type="number"
//         placeholder="Pass Students"
//         value={pass}
//         onChange={(e) => setPass(e.target.value)}
//       />
//       <br /><br />

//       <button onClick={calculate}>Calculate</button>

//       <p>Pass Percentage: {passPercent}%</p>
//       <p>Fail Percentage: {failPercent}%</p>
//     </div>
//   );
// }

// export default PassFailPercentage;
