// src/components/SignIn.jsx
import React, { useState } from 'react';
import { auth } from '../firebase';
import './SignIn.css'; // Import CSS file for styling

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
      // Handle successful sign-in (e.g., redirect)
    } catch (error) {
      console.error('Error signing in:', error);
      // Handle error (e.g., display error message)
    }
  };

  return (
    <div className="signin-container">
      <h2>Sign In</h2>
      <form onSubmit={handleSignIn}>
        <input
          className="input-field"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className="input-field"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="submit-button" type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
