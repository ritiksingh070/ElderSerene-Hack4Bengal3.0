import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './UserProfile.css';
import { Base_url } from '../../config';

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const [user,setUser] =useState('')
  useEffect(()=>{

      axios
        .get(`${Base_url}/user/profile`, {
          withCredentials: true,
        })
        .then((res) => {
         console.log(res.data.user)
         setUser(res.data.user)
        })
        .catch((error) => {
          console.log(error);
        });
  },[])

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="user-profile">
      <div className="sidebar">
        <img src="https://media.istockphoto.com/id/1393750072/vector/flat-white-icon-man-for-web-design-silhouette-flat-illustration-vector-illustration-stock.jpg?s=612x612&w=0&k=20&c=s9hO4SpyvrDIfELozPpiB_WtzQV9KhoMUP9R9gVohoU=" alt="Profile Picture" className="profile-pic" />
        <ul>
          <li>
            <a href="#profile" onClick={() => handleTabClick('profile')}>
              My Profile
            </a>
          </li>
          <li>
            <a href="#settings" onClick={() => handleTabClick('settings')}>
              Settings
            </a>
          </li>
        </ul>
      </div>
      <div className="profile-content">
        {activeTab === 'profile' && user && (
          <div id="profile">
            <h2>User Information</h2>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
          </div>
        )}
        {activeTab === 'settings' && (
          <div id="settings">
            <h2>Settings</h2>
            <p>Here you can update your settings.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
