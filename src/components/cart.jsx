import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CartL = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch cart items when component mounts
    const fetchCartItems = async () => {
      try {
        const response = await axios.get('http://localhost:5002/cart');
        setCartItems(response.data);
      } catch (err) {
        setError('Failed to fetch cart items');
        console.error('Error fetching cart items:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchCartItems();
  }, []);

  const handleRemove = async (id) => {
    try {
      await axios.delete(`http://localhost:5002/cart/${id}`);
      // Remove item from local state
      setCartItems(cartItems.filter(item => item._id !== id));
    } catch (err) {
      setError('Failed to remove item');
      console.error('Error removing item:', err);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Cart Page</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cartItems.map(item => (
            <li key={item._id} style={{ border: '1px solid #ddd', margin: '10px', padding: '10px', borderRadius: '5px' }}>
              <h2>{item.type}</h2>
              <p>Price: ${item.price}</p>
              {item.image && <img src={item.image} alt={item.type} style={{ width: '100px', height: 'auto' }} />}
              <button onClick={() => handleRemove(item._id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartL;
