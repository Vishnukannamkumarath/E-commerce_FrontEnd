import React, { useState } from 'react';
import axios from 'axios';

function MobileAdmin() {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', name);
        formData.append('price', price);
        formData.append('image', image);

        try {
            await axios.post('http://localhost:5002/madmin', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            alert('Mobile data uploaded successfully!');
        } catch (error) {
            console.error('Error uploading mobile data:', error);
            alert('Failed to upload mobile data');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Mobile Name:</label>
                <input 
                    type="text" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
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
                <label>Mobile Image:</label>
                <input 
                    type="file" 
                    onChange={(e) => setImage(e.target.files[0])} 
                    required 
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

export default MobileAdmin;
