import React, { useState } from "react";

function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [errors, setErrors] = useState({});

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^[0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$/;

  const handleRegister = (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!username) newErrors.username = "Username is required";
    else if (username.length <= 2) newErrors.username = "Username must be more than 2 characters";

    if (!email) newErrors.email = "Email is required";
    else if (!emailRegex.test(email)) newErrors.email = "Email is not valid";

    if (!password) newErrors.password = "Password is required";
    else if (password.length <= 8) newErrors.password = "Password must be more than 8 characters";
    else if (!passwordRegex.test(password)) newErrors.password = "Password must contain only numbers and special characters";

    if (!age) newErrors.age = "Age is required";
    else if (Number(age) <= 16) newErrors.age = "You must be older than 16 to register";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Registration Successful ");
    }
  };

  const handleCancel = () => {
    setUsername("");
    setEmail("");
    setPassword("");
    setAge("");
    setErrors({});
  };

  return (
    <form>
      <h2>Registration Form</h2>

      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br /><br/>
      {errors.username && <p style={{ color: "red" }}>{errors.username}</p>}

      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br /><br/>
      {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br /><br/>
      {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}

      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <br /><br/>
      {errors.age && <p style={{ color: "red" }}>{errors.age}</p>}

      <button onClick={handleRegister}>Register</button>
      <button type="button" onClick={handleCancel} style={{ marginLeft: "10px" }}>
        Cancel
      </button>
    </form>
  );
}

export default RegistrationForm;
