const express = require('express');
const path = require('path');

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Products data (in production this would come from a database)
const products = [
  { id: 1, name: 'Oversized Noir Hoodie', category: 'Hoodies', price: 89, stock: 15 },
  { id: 2, name: 'Acid Wash Tee', category: 'Tees', price: 45, stock: 30 },
  { id: 3, name: 'Cargo Track Pants', category: 'Bottoms', price: 75, stock: 10 },
  { id: 4, name: 'Logo Dad Cap', category: 'Accessories', price: 35, stock: 50 },
  { id: 5, name: 'Flame Graphic Tee', category: 'Tees', price: 55, stock: 25 },
  { id: 6, name: 'Puffer Vest', category: 'Outerwear', price: 110, stock: 8 },
];

// In-memory orders store (use a database in production)
let orders = [];

// GET all products
app.get('/api/products', (req, res) => {
  res.json(products);
});

// GET single product
app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).json({ error: 'Product not found' });
  res.json(product);
});

// POST create order
app.post('/api/orders', (req, res) => {
  const { items, total } = req.body;
  if (!items || !items.length) return res.status(400).json({ error: 'No items in order' });

  const order = {
    id: Date.now(),
    items,
    total,
    status: 'confirmed',
    createdAt: new Date().toISOString(),
  };

  orders.push(order);
  res.status(201).json(order);
});

// GET all orders
app.get('/api/orders', (req, res) => {
  res.json(orders);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`DRIP store running on http://localhost:${PORT}`));
