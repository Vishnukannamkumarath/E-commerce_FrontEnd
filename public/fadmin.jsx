
import React, { useState } from 'react';
import axios from 'axios';

const Fadmin= () => {
  const [type, setType] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('type', type);
    formData.append('price', price);
    formData.append('image', image);

    try {
      const response = await axios.post('http://localhost:5002/fashion', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setMessage(response.data.message);
      setType('');
      setPrice('');
      setImage(null);
    } catch (error) {
      console.error('Error adding dress:', error);
      setMessage('Error adding dress');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Add a New Dress</h1>
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
          <label>Upload Image:</label>
          <input
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
            required
          />
        </div>
        <button type="submit">Add Dress</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Fadmin;
