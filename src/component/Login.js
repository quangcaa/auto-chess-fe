import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../style/login.css";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "test" && password === "password") {
      onLogin(true);
    } else {
      alert("Login information is incorrect");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };


  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="username"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <div className="password-input-container">
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <span
            className="password-toggle-icon"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? "🙈" : "👁️"}
          </span>
        </div>
        
        <button type="submit">Login</button>
      </form>
      <div className="link-container">
        <Link to="/register" style={{ marginRight: '100px', textDecoration: 'none', color: '#007bff' }}>Register</Link>
        <Link to="/reset-password" style={{textDecoration: 'none', color: '#007bff'}}>Reset password</Link>
      </div>
    </div>
  );
};

export default Login;
