import { useState, useContext } from "react";
import { AuthContext } from "../context/authContext";
import "./CSS/Signup.css";
import { NavLink } from "react-router-dom";

export default function Signup({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState(null);

  const { login } = useContext(AuthContext);

  const deployedAPI = "https://collectiondigitalbe.onrender.com/user/signup";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await fetch(deployedAPI, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, username }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error);
        return;
      }

      localStorage.setItem("token", data.token);
      login(data.token);
    } catch (err) {
      console.error("Signup Error:", err);
      setError("Something went wrong. Please try again.");
    }
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

        <button type="submit">Sign up</button>
        {error && <div className="error">{error}</div>}
      </form>
    </div>
  );
}



