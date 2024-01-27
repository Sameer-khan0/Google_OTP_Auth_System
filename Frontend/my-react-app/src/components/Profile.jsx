import React from 'react';
import './css/profile.css';
import { useSelector } from 'react-redux';
import avatar from '../assets/img/user.jpg'

function Profile() {
  const userData = useSelector((state) => state.user.user);
  // Replace these with actual user data
  const userName = 'John Doe';
  const userEmail = 'john.doe@example.com';
  console.log(userData)

  return (
    <div className="profile-container">
      <ul className="profile-list">
        <li>
          <strong>User Name:</strong> {userData.username}
        </li>
        <li>
          <strong>Email:</strong> {userData.email}
        </li>
        <li>
          <strong>Photo:</strong> <img src={avatar} alt="User" />
        </li>
      </ul>
    </div>
  );
}

export default Profile;
