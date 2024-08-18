// CartPage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  // Fetch cart items from the backend
  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get('http://localhost:5002/cart');
        setCartItems(response.data);
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };

    fetchCartItems();
  }, []);

  // Handle removal of an item
  const handleRemove = async (id) => {
    try {
      await axios.delete(`http://localhost:5002/cart/${id}`);
      // Remove item from state
      setCartItems(cartItems.filter(item => item._id !== id));
    } catch (error) {
      console.error('Error removing item:', error);
    }
  };

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      <div className="cart-items">
        {cartItems.length > 0 ? (
          cartItems.map(item => (
            <div key={item._id} className="cart-item">
              <img src={`data:image/jpeg;base64,${item.image}`} alt={item.name} className="product-image" />
              <div className="product-details">
                <h2>{item.name}</h2>
                <p>ID: {item._id}</p>
                <button
                  className="remove-button"
                  onClick={() => handleRemove(item._id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No items in your cart.</p>
        )}
      </div>
    </div>
  );
};

export default CartPage;
