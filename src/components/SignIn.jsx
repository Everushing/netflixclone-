import React, { useState } from 'react';
import { auth } from '../firebase';
import './SignIn.css'; // Import CSS file for styling

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null); // State for handling errors

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
      // Handle successful sign-in (e.g., redirect or display success message)
      console.log('User signed in successfully!');
    } catch (error) {
      setError(error.message); // Set error message for display
      console.error('Error signing in:', error);
    }
  };

  return (
    <div className="signin-container">
      <h2>Sign In</h2>
      {error && <p className="error-message">{error}</p>} {/* Display error message if there's an error */}
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
