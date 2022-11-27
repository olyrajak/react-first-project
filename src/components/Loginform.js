import React, { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import "./Style.css";

function Loginform() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    console.log(email, username, password);
  };

  const [oly, setOly] = useState(false);

  const pressBtn = () => {
    setOly(!oly);
  };

  return (
    <div>
      <div className="container"></div>
      <div className="background"></div>
      <form className="form" onSubmit={submitForm}>
        <h3>Login</h3>

        <label for="username">Username</label>
        <input
          type="text"
          placeholder="Username"
          name="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label for="email">Email</label>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label for="password">Password</label>
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {/* <Button type="button" text="Log In" className="btn-white" /> */}
        <button
          type="button"
          text="Log In"
          className="btn-white"
          onClick={pressBtn}
        >
          Login
        </button>
        {oly && (
          <h1>
            Login Successful{username}, {email}
          </h1>
        )}
      </form>
    </div>
  );
}

export default Loginform;
