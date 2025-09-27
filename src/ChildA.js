import React from 'react';
import ChildB from "./ChildB"; 
import useCounter from './useCounter';  
function ChildA(){
    const {count}=useCounter(0);
    
    return(
        <>
        <h1>This page is Child A </h1>
        <ChildB/>
        </>
    )
}

export default ChildA;