const express = require('express');
const router = express.Router();
const CartItem = require('../models/CartItem');


router.get('/cart', async (req, res) => {
    try {
        const items = await CartItem.find();
        res.json(items);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching cart items' });
    }
});

router.delete('/cart/:id', async (req, res) => {
    try {
        const item = await CartItem.findByIdAndDelete(req.params.id);
        if (!item) {
            return res.status(404).json({ error: 'Item not found' });
        }
        res.json({ message: 'Item removed successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error removing item' });
    }
});

module.exports = router;
