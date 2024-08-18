import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './admin.css';

const AdminPage = () => {
  const [products, setProducts] = useState([]);
  const [editProduct, setEditProduct] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:5002/cart');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleRemoveProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:5002/cart/${id}`);
      setProducts(products.filter(product => product._id !== id));
    } catch (error) {
      console.error('Error removing product:', error);
    }
  };

  const handleUpdateProduct = async () => {
    try {
      await axios.put(`http://localhost:5002/cart/${editProduct._id}`, editProduct);
      setProducts(products.map(product => (product._id === editProduct._id ? editProduct : product)));
      setEditProduct(null);
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  return (
    <div className="admin-container">
      <h1>Admin Page</h1>

      <div className="product-list">
        <h3>Product List</h3>
        {products.map(product => (
          <div key={product._id} className="product-item">
            <div className="product-details">
              {editProduct && editProduct._id === product._id ? (
                <>
                  <input
                    type="text"
                    value={editProduct.name}
                    onChange={e => setEditProduct({ ...editProduct, name: e.target.value })}
                  />
                  <input
                    type="text"
                    value={editProduct.price}
                    onChange={e => setEditProduct({ ...editProduct, price: e.target.value })}
                  />
                  <input
                    type="text"
                    value={editProduct.image}
                    onChange={e => setEditProduct({ ...editProduct, image: e.target.value })}
                  />
                  <button className="update-button" onClick={handleUpdateProduct}>Save</button>
                </>
              ) : (
                <>
                  <h4>{product.name}</h4>
                  <p>Price: ${product.price}</p>
                  <img src={product.image} alt={product.name} className="product-image" />
                </>
              )}
            </div>
            <div className="product-actions">
              <button className="delete-button" onClick={() => handleRemoveProduct(product._id)}>Remove</button>
              <button className="update-button" onClick={() => setEditProduct(product)}>Update</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPage;
