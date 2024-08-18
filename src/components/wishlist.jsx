import React, { useState } from 'react';
import './Wishlist.css';

const Wishlist = () => {
  const [items, setItems] = useState([
    { id: 1, department: 'Agribusiness', partNumber: '880380a', description: '1998 JOHN DEERE 8400T', quantity: 2, unitValue: 701.00 },
    { id: 2, department: 'Apparel', partNumber: '880020a', description: "adidas Men's Performance Polo - Green", quantity: 2, unitValue: 701.00 },
    { id: 3, department: 'Apparel', partNumber: '880010a', description: "adidas Men's Performance Polo - Blast", quantity: 1, unitValue: 701.00 },
  ]);

  const [newListName, setNewListName] = useState('');
  const [favoriteList, setFavoriteList] = useState('MyList');
  const [searchTerm, setSearchTerm] = useState('');
  const [departmentFilter, setDepartmentFilter] = useState('All');

  const handleQuantityChange = (id, delta) => {
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + delta } : item
      )
    );
  };

  const handleDeleteItem = (id) => {
    setItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const handleCreateNewList = () => {
   
    console.log('Create new list:', newListName);
  };

  const handleDeleteSelectedList = () => {
    console.log('Delete selected list');
  };

  const filteredItems = items.filter(item => 
    (departmentFilter === 'All' || item.department === departmentFilter) &&
    item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>MyList</h1>
      <div>
        <select value={favoriteList} onChange={e => setFavoriteList(e.target.value)}>
          <option value="MyList">MyList</option>
          {/* Add more options as needed */}
        </select>
        <button onClick={handleCreateNewList}>Create New List</button>
        <button onClick={handleDeleteSelectedList}>Delete Selected List</button>
      </div>
      <div>
        <input 
          type="text" 
          placeholder="Search products by SKU" 
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <button>Search</button>
      </div>
      <div>
        <label>
          Department:
          <select value={departmentFilter} onChange={e => setDepartmentFilter(e.target.value)}>
            <option value="All">All</option>
            <option value="Agribusiness">Agribusiness</option>
            <option value="Apparel">Apparel</option>
          </select>
        </label>
      </div>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Department</th>
            <th>Part #</th>
            <th>Description</th>
            <th>Qty</th>
            <th>Unit Value</th>
            <th>Price</th>
            <th>Notes</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredItems.map(item => (
            <tr key={item.id}>
              <td><img src={`${process.env.public}/adidas${item.partNumber}.jpeg`} alt={item.description} /></td>
              <td>{item.department}</td>
              <td>{item.partNumber}</td>
              <td>{item.description}</td>
              <td>
                <button onClick={() => handleQuantityChange(item.id, -1)}>-</button>
                {item.quantity}
                <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
              </td>
              <td>R${item.unitValue.toFixed(2)}</td>
              <td>R${(item.unitValue * item.quantity).toFixed(2)}</td>
              <td><input type="text" /></td>
              <td>
                <button onClick={() => handleDeleteItem(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Wishlist;
