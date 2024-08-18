

import React, { useState } from 'react';

const Fasadmin = () => {
  const [type, setType] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState('');

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5002/fadmin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ type, price, image }),
      });
      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      setMessage('Failed to add dress');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Add New Dress</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Type of Dress:</label>
          <input
            type="text"
            value={type}
            onChange={(e) => setType(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Photo:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            required
          />
        </div>
        <button type="submit">Add Dress</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Fasadmin;
