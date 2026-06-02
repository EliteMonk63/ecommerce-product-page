# DRIP — E-Commerce Product Page

A modern, fully interactive e-commerce storefront built with HTML, CSS, JavaScript and Node.js.

![Status](https://img.shields.io/badge/Status-Active-success) ![Node](https://img.shields.io/badge/Node.js-18+-green) ![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow)

## Features

- 🛍️ Product grid with categories and badges
- 🛒 Slide-out cart drawer with animations
- ➕ Add to cart with size selection
- 🔢 Quantity controls (increase/decrease/remove)
- 💰 Live cart total calculation
- 📦 Order placement via REST API
- 📱 Fully responsive design
- 🎨 Custom streetwear aesthetic

## Tech Stack

**Frontend:** HTML5, CSS3, Vanilla JavaScript  
**Backend:** Node.js, Express.js  
**API:** RESTful endpoints for products and orders

## Getting Started

```bash
# Clone the repo
git clone https://github.com/EliteMonk63/ecommerce-product-page.git
cd ecommerce-product-page

# Install dependencies
npm install

# Start the server
npm start
```

Visit `http://localhost:3000`

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/products | Get all products |
| GET | /api/products/:id | Get single product |
| POST | /api/orders | Place an order |
| GET | /api/orders | Get all orders |

## License

MIT © Kyle Fernandes
