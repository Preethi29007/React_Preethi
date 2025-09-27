// import React, { useState, useEffect } from "react";

// const FormValidator = () => {
//   return (
//     <>
    //   <form>
    //     <label htmlFor="username">Username:</label><br />
    //     <input type="text" id="username" name="username" /><br /><br />

    //     <label htmlFor="password">Password:</label><br />
    //     <input type="password" id="password" name="password" /><br /><br />

    //     <button type="submit">Submit</button>
    //   </form>
//     </>
//   );
// };

// export default FormValidator;
import{useRef, useState} from'react';

function JSForm() {
    const nameRef=useRef();
    const passref=useRef();
  const[user,setUser]=useState('');
  function handleChange(e) {
    console.log(e.target.value);
    setUser(e.target.value)
  }
  function handleChangePass(e){
    console.log(e.target.value)
  }
function submitaction(e){
    e.preventDefault();
    console.log("name ",nameRef.current.value);
    console.log("pass ",passref.current.value);
}
  return (
    <>
    <form action="">
      USERNAME:
      <input type="text" name="username" ref={nameRef} required />
      <br />
      <br />
      PASSWORD:
      <input type="password" name="pass" id="" ref={passref} required />
      <br />
      <br />
      <button type="submit">Submit</button>
    </form>
    <h1>Hi {user}</h1>
    </>
  );
}

export default JSForm;