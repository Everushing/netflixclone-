// src/components/UserProfile.jsx
import React, { useEffect, useState } from 'react';
import { auth } from '../firebase';
import './UserProfile.css'; // Import CSS file for styling

const UserProfile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const currentUser = auth.currentUser;
        if (currentUser) {
          setUser(currentUser);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile-container">
      <h2>User Profile</h2>
      <div className="profile-info">
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Display Name:</strong> {user.displayName || 'N/A'}</p>
        {/* Add more user details here as needed */}
      </div>
      <div className="profile-actions">
        {/* Add buttons or links for managing watchlists, settings, etc. */}
        <button className="btn">Manage Watchlist</button>
        <button className="btn">Edit Profile</button>
      </div>
    </div>
  );
};

export default UserProfile;
