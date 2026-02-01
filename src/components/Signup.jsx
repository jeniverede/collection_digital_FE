/* import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./CSS/Signup.css";

export default function Signup({ setDemoUser }) {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !email || !password) {
      setError("Please fill in all fields");
      return;
    }

    // Save demo user locally
    const demoName = username || email;
    localStorage.setItem("demoUser", demoName);
    setDemoUser(demoName);

    setError(null);
    navigate("/collection"); // go to collections page
  };

  return (
    <div>
      <div>
        <NavLink to="/">
          <span>
            <img className="arrow-image" src="/arrow-back.png" alt="back" />
          </span>
        </NavLink>
      </div>

      <form className="signup" onSubmit={handleSubmit}>
        <label className="label-text">username: </label>
        <input
          type="text"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />

        <label className="label-text">email: </label>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <label className="label-text">password: </label>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />

        <button type="submit">Sign up (Demo)</button>

        {error && <div className="error">{error}</div>}

        <p style={{ color: "orange", marginTop: "10px" }}>
          ⚠️ Demo mode: signup does not connect to backend
        </p>
      </form>
    </div>
  );
} */




