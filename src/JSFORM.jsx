import React from "react";
import "./JSFORMCSS.css";

function JSXForm() {
  return (
    <div className="form-page">
      <h2 className="form-title">E-Learning Platform</h2> {/* Outside box, top of page */}

      <div className="form-container">
        <h2 className="form-title">Login</h2> {/* Top of login box */}
        <form className="form-box">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-input"
            placeholder="Enter your email"
          />

          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-input"
            placeholder="Enter your password"
          />

          <button className="form-button">Login</button>

          <p className="form-footer">
            New here? <a href="#">Create an account</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default JSXForm;
