import React, { useState, useEffect } from 'react';

import Header from './Header'
import ProductList from './ProductList'
import Shop from './Shop'
import './App.css';


function App() {
  
  const [cart, setCart] = useState([]);

  return (
    <div className="main-container">
      <Header cart={cart} />
      <div className="home-page-content">
        <h1>Hey! This is the home page</h1>
      </div>

    </div>
  );
}

export default App;
