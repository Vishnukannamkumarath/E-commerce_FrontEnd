// src/CheckoutForm.js
import React, { useState } from 'react';

const CheckoutForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    postalCode: '',
    address1: '',
    address2: '',
    municipality: '',
    province: '',
    country: 'Canada',
    phone: '',
    email: '',
    deliveryMethod: 'standard',
    paymentMethod: 'card',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form validation and submit logic
    console.log('Form Data:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Shipping</h1>
      <label>
        First Name*
        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
      </label>
      <label>
        Last Name*
        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
      </label>
      <label>
        Postal Code*
        <input type="text" name="postalCode" value={formData.postalCode} onChange={handleChange} required />
      </label>
      <label>
        Address Line 1*
        <input type="text" name="address1" value={formData.address1} onChange={handleChange} required />
      </label>
      <label>
        Address Line 2 (Optional)
        <input type="text" name="address2" value={formData.address2} onChange={handleChange} />
      </label>
      <label>
        Municipality*
        <input type="text" name="municipality" value={formData.municipality} onChange={handleChange} required />
      </label>
      <label>
        Province/Territory*
        <select name="province" value={formData.province} onChange={handleChange} required>
          <option value="">Select a province</option>
          <option value="Ontario">Ontario</option>
          <option value="Quebec">Quebec</option>
          {/* Add more provinces/territories as needed */}
        </select>
      </label>
      <label>
        Country/Region
        <input type="text" name="country" value={formData.country} onChange={handleChange} readOnly />
      </label>
      <label>
        Shipping Phone*
        <input type="text" name="phone" value={formData.phone} onChange={handleChange} required />
      </label>
      <label>
        Email*
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </label>
      <label>
        Select Delivery Method
        <div>
          <label>
            <input type="radio" name="deliveryMethod" value="standard" checked={formData.deliveryMethod === 'standard'} onChange={handleChange} />
            Standard (FREE)
          </label>
          <label>
            <input type="radio" name="deliveryMethod" value="express" checked={formData.deliveryMethod === 'express'} onChange={handleChange} />
            Express (CAD 40.00)
          </label>
        </div>
      </label>
      <h2>Payment Method</h2>
      <label>
        <input type="radio" name="paymentMethod" value="card" checked={formData.paymentMethod === 'card'} onChange={handleChange} />
        Card
      </label>
      <label>
        <input type="radio" name="paymentMethod" value="cod" checked={formData.paymentMethod === 'cod'} onChange={handleChange} />
        Cash on Delivery
      </label>
      <button type="submit">Continue to Billing</button>
    </form>
  );
};

export default CheckoutForm;
