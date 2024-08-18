import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Mob = () => {
  const [mobiles, setMobiles] = useState([]);
  const navigate=useNavigate();

  useEffect(() => {
    const fetchMobiles = async () => {
      try {
        const response = await fetch('http://localhost:5002/mdisplay');
        const data = await response.json();
        console.log(data); 
        setMobiles(data);
      } catch (error) {
        console.error('Error fetching mobile data:', error);
      }
    };

    fetchMobiles();
  }, []);

  const handleAddToCart = (mobile) => {
    console.log('Adding to cart:', mobile);

  };

  const handleBuyNow = (mobile) => {
    console.log('Buying now:', mobile);
    navigate('/checkout')
    
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Mobile Store</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {Array.isArray(mobiles) && mobiles.map((mobile) => (
          <div key={mobile._id} style={{ border: '1px solid #ccc', padding: '10px', width: '300px' }}>
            <h2>{mobile.name}</h2>
            <p>Price: ${mobile.price}</p>
            <img src={mobile.image} alt={mobile.name} style={{ width: '100%', height: 'auto' }} />
            <div style={{ marginTop: '10px' }}>
              <button onClick={() => handleAddToCart(mobile)} style={{ marginRight: '10px' }}>
                Add to Cart
              </button>
              <button onClick={() => handleBuyNow(mobile)}>
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mob;
