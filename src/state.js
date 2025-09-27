import React from "react";
import {useState} from 'react';
function State() {
const [open,setOpen]=useState(1);
const [close,setClose]=useState(100);
function clickable(){
    setOpen(open+1);
}
function clics(){
    setClose(close-1);
}
return(
    <>
           <h1>{open}</h1>
      <button onClick={clickable}> Click </button>

      <h1>{close}</h1>
      <button onClick={clics}> Click </button>
    </>
)
}
export default State;
