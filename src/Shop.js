import React, { useState, useEffect } from 'react';
import items from './data'
import Header from './Header'
import ProductList from './ProductList'

const Shop = () => {
    const [products, setProducts] = useState(items);
    const [cart, setCart] = useState([]);
    const [pieQty, setPieQty] = useState(1);
    const [update, setUpdate] = useState(0)
    
    const addToCart = (id, name, price, img, pieQty) => {
        setCart([...cart, {id, name, price, img, pieQty }])
      }

      const handleQty = (e) => {
        setPieQty(e.target.value)
      }
    
  useEffect(()=>{
}, [update])


    return(
        <div>
            <Header cart={cart} />
            <ProductList 
                products={products} 
                pieQty={pieQty}
                addToCart={addToCart} 
                handleQty={handleQty}
            />
            <div className="checkout-overlay">
                <h3>Shopping Cart</h3>
                {cart.map((item)=>{
                return(
                    <div key={item.id} className="checkout-product">
                    <p>{item.name} (${item.price}) x{item.pieQty}</p>
                    <div className="adjust-qty">
                        <button onClick={()=> {
                        item.pieQty = item.pieQty + 1
                        setUpdate(item.pieQty)
                        }}>+</button>
                        <button onClick={()=> {
                        item.pieQty = item.pieQty -1
                        setUpdate(item.pieQty)
                        }}>-</button>
                    </div>
                    </div>
                )
                })}
                <p>Total: ${cart.reduce((a, v)=> a = a + (v.price*v.pieQty), 0)}</p>
            </div>
        </div>
    )
    
}

export default Shop;