import React, { useState } from 'react';

const Shop = ({products, addToCart, pieQty, handleQty}) => {
    const quantity = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return(
        <section className="shop-container">
            {products.map((product) => {
                const {id, name, price, img} = product;
                return(
                    <article key={id} className="product-card">
                        <div className="images-container">
                            <img src={img} alt="pie"/>
                        </div>
                        <div className="product-card__header">
                            <h4 className="product-card__name">{name}</h4>
                            <p className="product-card__price">${price}</p>
                        </div>
                        
                        <form>
                            <label for="quantity">Qty:</label>
                            <select id="quantity" name="quantity" onChange={(e)=>handleQty(e)}>
                                {quantity.map(qty =>{
                                    return(
                                        <option value={qty}>{qty}</option>
                                    )
                                })}
                            </select>
                        </form>
                        <button onClick={()=>addToCart(id, name, price, img, parseInt(pieQty))}>Add to cart</button>
                    </article>
            )
            })} 
        </section>
    )
}

export default Shop;