import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../style/resetPassword.css"

const ResetPassword = ({ onResetPassword }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onResetPassword(true);
    alert("Link sent to email successfully!");
  };

  return (
    <div className="resetPassword-container">
      <h2>Reset password</h2>
      <form onSubmit={handleSubmit}>
        <p>Please enter your email to authenticate your account</p>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Email me a link</button>
      </form>
      <div className="link-container">
        <Link to="/login" style={{textDecoration: 'none', color: '#007bff'}}>Back to login</Link>
      </div>
    </div>
  );
};

export default ResetPassword;
