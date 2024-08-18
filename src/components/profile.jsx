import React, { useState } from 'react';
import { FaUserCircle, FaTrash } from 'react-icons/fa';
import './ProfileSettings.css';

const ProfilePage = () => {
  const [profile, setProfile] = useState({
    firstName: 'Thomas D.',
    lastName: 'Hardison',
    email: 'thomasdhardison@dayrep.com',
    contactNumber: '661-724-7734',
    address: '1368 Hayhurst Lane',
    city: 'McAllen',
    state: 'New York',
    zipCode: '11357',
    country: 'United States',
    password: '******'
  });

  const [profilePhoto, setProfilePhoto] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({
      ...profile,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Profile saved', profile);
  };

  const handlePhotoChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfilePhoto(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePhotoDelete = () => {
    setProfilePhoto(null);
  };

  return (
    <div className="profile-page">
      <div className="sidebar">
        <ul>
          <li>Dashboard</li>
          <li className="active">Profile</li>
          <li>Job Feed</li>
          <li>Save Jobs</li>
          <li>Settings</li>
        </ul>
      </div>
      <div className="content">
        <h1>Edit Profile</h1>
        <form onSubmit={handleSubmit}>
          <div className="profile-photo-section">
            {profilePhoto ? (
              <div className="profile-photo">
                <img src={profilePhoto} alt="Profile" />
                <button type="button" onClick={handlePhotoDelete} className="delete-button">
                  <FaTrash />
                </button>
              </div>
            ) : (
              <div className="profile-photo">
                <FaUserCircle size={100} />
                <input type="file" onChange={handlePhotoChange} />
              </div>
            )}
          </div>
          <div className="form-group">
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              value={profile.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              value={profile.lastName}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Contact Number</label>
            <input
              type="text"
              name="contactNumber"
              value={profile.contactNumber}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Address</label>
            <input
              type="text"
              name="address"
              value={profile.address}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>City</label>
            <input
              type="text"
              name="city"
              value={profile.city}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>State</label>
            <input
              type="text"
              name="state"
              value={profile.state}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Zip Code</label>
            <input
              type="text"
              name="zipCode"
              value={profile.zipCode}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Country</label>
            <input
              type="text"
              name="country"
              value={profile.country}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={profile.password}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  );
};

export default ProfilePage;
