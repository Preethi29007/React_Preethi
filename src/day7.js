// import React, { Component } from "react";
//class based function 

// class Counter extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { count: 0 }; 
//   }

//   increment = () => {
//     this.setState({ count: this.state.count + 10 });
//   };
//   decrement = () => {
//     this.setState({ count: this.state.count - 10 });
//   };

//   render() {
//     return (
//       <div>
//         <p>Counter Count:{this.state.count} </p>
//         <button onClick={this.increment}>Increase</button>
//         <br></br>
//         <button onClick={this.decrement}>Decrease</button>
//       </div>
//     );
//   }
// }

// export default Counter;

 import React from "react";

// class Person extends Component {
//   render() {
//     const name = "Preethi";
//     const age = 21;

//     return (
//       <div>
//         <h2>Name: {name}</h2>
//         <h3>Age: {age}</h3>
//       </div>
//     );
//   }
// }

// export default Person;

// function outer(){
//   let name="skct";
//   function inner(){
//     console.log("Hello "+name); 
//   }
//   inner();
// }
// outer();
// const Day7=()=>{
//   return(
//     <>
//     </>
//   )
// }

function outer(){
  let name="skct";
  function inner(){
    console.log("Hello "+name);
  }
  inner();
}
outer();
function make(){
  let count=0;
  return function(){
    count++; //cLosure
    return count;
  }
}
const counter=make();
console.log(counter());
console.log(counter());
console.log(counter());
const Day7=()=>{
  return(
    <>
    <h1>Hello skct</h1>
    </>
  )
}
export default Day7;