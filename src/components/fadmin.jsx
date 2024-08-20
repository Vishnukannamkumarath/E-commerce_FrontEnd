import React, { useState } from 'react';
import axios from 'axios';

const Fasadmin = () => {
  const [dressType, setDressType] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setImage(file);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!dressType || !price || !image) {
      alert('Please fill out all fields and upload an image.');
      return;
    }

    const formData = new FormData();
    formData.append('type', dressType);
    formData.append('price', price);
    formData.append('image', image);

    try {
      const response = await axios.post('http://localhost:5002/fadmin', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('Dress added successfully:', response.data);
      setDressType('');
      setPrice('');
      setImage(null);
      setImagePreview('');
    } catch (error) {
      console.error('Error adding dress:', error);
      alert('Failed to add dress. Please try again.');
    }
  };

  return (
    <div>
      <h1>Admin Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Dress Type:
            <input
              type="text"
              value={dressType}
              onChange={(e) => setDressType(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Price:
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
              min="0"
              step="0.01"
            />
          </label>
        </div>
        <div>
          <label>
            Image:
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              required
            />
          </label>
          {imagePreview && (
            <img
              src={imagePreview}
              alt="Image Preview"
              style={{ width: '100px', height: 'auto', marginTop: '10px' }}
            />
          )}
        </div>
        <button type="submit">Add Dress</button>
      </form>
    </div>
  );
};

export default Fasadmin;

