import { useState } from "react";
import axios from "axios";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://127.0.0.1:8000/api/register/", {
        username,
        password,
      });

      alert("User registered successfully");
    } catch (err) {
      alert("Registration failed");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow" style={{ width: "350px" }}>
        <h3 className="text-center mb-3">Create Account</h3>

        <form onSubmit={handleRegister}>
          <div className="mb-3">
            <label htmlFor="usernameInput" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="usernameInput"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <label htmlFor="passwordInput" className="form-label">
            Password
          </label>
          <input
            type="password"
            id="passwordInput"
            className="form-control"
            aria-describedby="passwordHelpBlock"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div id="passwordHelpBlock" className="form-text mb-3">
            Your password must be at least 8 characters long.
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Register
          </button>

          <div className="text-center mt-3">
            <a href="/login" className="text-decoration-none">
                Already have an account? Login
            </a>
        </div>
        </form>
      </div>
    </div>
  );
}