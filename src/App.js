import React, { useState } from 'react';
import items from './data'
import Header from './Header'
import Shop from './Shop'
import './App.css';


function App() {
  const [products, setProducts] = useState(items);
  const [cart, setCart] = useState([]);

  const addToCart = (id, name, price, img, pieQty) => {
    setCart([...cart, {id, name, price, img, pieQty }])
    console.log(cart)
  }

  return (
    <div className="main-container">
      <Header cart={cart} />
      <Shop products={products} addToCart={addToCart} />
      <div className="checkout-overlay">
        <h3>Shopping Cart</h3>
        {cart.map((item)=>{
          return(
            <div className="checkout-product">
              <p>{item.name} (${item.price}) x{item.pieQty}</p>
              <div className="adjust-qty">
                <button>+</button><button>-</button>
              </div>
            </div>
          )
        })}
        <p>Total: ${cart.reduce((a, v)=> a = a + (v.price*v.pieQty), 0)}</p>
      </div>
    </div>
  );
}

export default App;
