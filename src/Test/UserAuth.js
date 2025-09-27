import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({ isLoggedIn: false, name: "" });

  const login = () => setUser({ isLoggedIn: true, name: "Preethi" });
  const logout = () => setUser({ isLoggedIn: false, name: "" });

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const Navbar = () => {
  const { user, login, logout } = useContext(AuthContext);

  return (
    <div style={{ padding: "10px", background: "#656566ff", color: "white" }}>
      <h3 style={{ display: "-ms-grid", marginRight: "20px" }}>MyApp</h3>
      {user.isLoggedIn ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <button onClick={login}>Login</button>
      )}
    </div>
  );
};

export const Dashboard = () => {
  const { user } = useContext(AuthContext);

  return (
    <div style={{ marginTop: "20px", textAlign: "center" }}>
      {user.isLoggedIn ? (
        <h2 style={{ color: "green" }}>Welcome, {user.name}!</h2>
      ) : (
        <h2 style={{ color: "red" }}>Please log in</h2>
      )}
    </div>
  );
};
