import React, { useState } from 'react';
import items from './data'
import './App.css';


function App() {
  const [products, setProducts] = useState(items);
  console.log(products)
  return (
    <div>
      <header>
        <div className="navigation">
          <h1>Happy pie</h1>
          <nav>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Shop</a></li>
            </ul>
          </nav>
        </div>
        
        <div className="shopping-cart">
          <p>shopping cart (0)</p>
        </div>
      </header>
      
      <section className="shop-container">
        {products.map((product, index) => {
          const {id, name, price, img} = product;
          return(
            <article key={id} className="product">
              <img src={img} alt="pie"/>
              <h4 className="product-title">{name}</h4>
              <p className="product-price">${price}</p>
              <button>Add to cart</button>
            </article>
          )
        })}
      </section>
      
    </div>
  );
}

export default App;
