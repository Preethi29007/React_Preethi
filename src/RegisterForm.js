import React, { useState } from "react";
import Header from './Header'
function SimpleLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [Cpassword, setCPassword] = useState("");
    const [error, setError] = useState({});
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex=/^[a-zA-Z0-9._%+-]{6,}$/;
    const handleSubmit = (e) => {
        e.preventDefault();//to prevent rerender

        let newError={};
        console.log(email,password,error);
        if(!email){   
        console.log("Error: Email is required");
        newError.email="Email is required";
        }
        if(!emailRegex.test(email)) newError.emailRegex="Email is not valid";
        if(!password){   
        console.log("Error: Password is required");
        //setPassword("Password is required");
        newError.password="Password is required";
        }
        if(password.length<=5) newError.passwordLength="Enter 6 digit Password"
        if(!passwordRegex.test(password)) newError.passwordRegex="Some characters are not allowed";
        
        if(password!=Cpassword) newError.passwordConfirm="Password does not match"
        setError(newError);
        console.log(error);
    };

 
    return (
        <form onSubmit={handleSubmit}>
            <h2>Login Form</h2>

            <input
                type="text"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <br /><br/>
                      
            <input
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <br /><br/>
            <input
                type="password"
                placeholder="confirm Password"
                value={Cpassword}
                onChange={(e) => setCPassword(e.target.value)}
            />
            <br /><br/>
            {error && <p style={{color:"red"}}>{error.email}</p>}
            {error && <p style={{color:"red"}}>{error.emailRegex}</p>}
            {error && <p style={{color:"red"}}>{error.password}</p>}
            {error && <p style={{color:"red"}}>{error.passwordLength}</p>}
            {error && <p style={{color:"red"}}>{error.passwordRegex}</p>}
            {error && <p style={{color:"red"}}>{error.passwordConfirm}</p>}



            <button type="submit">Login</button>
        </form>
        
    );
}

export default SimpleLogin;