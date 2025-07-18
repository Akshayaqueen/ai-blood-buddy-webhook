import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, provider, signInWithPopup } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import './SignIn.css';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEmailSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Signed in with email!");
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      alert("Invalid credentials or user not found");
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("Signed in with Google as:", user.displayName);
      navigate("/dashboard");
    } catch (error) {
      console.error("Google sign in error:", error);
    }
  };

  return (
    <div className="signin-container">
      <h1>AI Blood Buddy - Sign In</h1>

      <button onClick={handleGoogleSignIn}>
        Sign In with Google
      </button>

      <h2>Or sign in with Email</h2>
      <form onSubmit={handleEmailSignIn}>
        <input
          type="email"
          placeholder="email@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <input
          type="password"
          placeholder="your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
