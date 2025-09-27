
import React,{useContext} from 'react'
import {UserContext} from './App'
import useCounter from './useCounter';

function ChildB(){
    const {count,increment,decrement,reset,trim,split}=useCounter();
    const user = useContext(UserContext);
    return(
        <div style={user.theme?{color:"red"}:{color:"blue"}}>
    
        <h1>{count}</h1>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
        <button onClick={reset}>reset</button><br/><br/>
        {split}This is Child B 
       <br/>
        <button onClick={decrement}>decrement</button>
        </div>
    )
}

export default ChildB;