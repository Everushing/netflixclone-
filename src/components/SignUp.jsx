// src/components/SignUp.jsx
import React, { useState } from 'react';
import { auth } from '../firebase';
import './SignUp.css'; // Import CSS file for styling

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await auth.createUserWithEmailAndPassword(email, password); // Use auth correctly
      console.log('Sign-up successful!', userCredential.user);
      // Handle successful sign-up (e.g., redirect)
    } catch (error) {
      console.error('Error signing up:', error);
      // Handle error (e.g., display error message)
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp}>
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
        <button className="submit-button" type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
