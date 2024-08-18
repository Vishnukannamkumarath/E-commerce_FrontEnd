import React from 'react';
import './card.css';

const Card = ({ mobile, onAddToCart, onBuyNow }) => {
  return (
  
    <div className="card">
      <img
        src={`data:image/jpeg;base64,${mobile.image}`}
        alt={mobile.name}
        className="card-image"
      />
      <div className="card-content">
        <h2 className="card-title">{mobile.name}</h2>
        <p className="card-price">${mobile.price}</p>
        <div className="card-actions">
          <button onClick={() => onAddToCart(mobile)} className="btn btn-cart">
            Add to Cart
          </button>
          <button onClick={() => onBuyNow(mobile)} className="btn btn-buy">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
