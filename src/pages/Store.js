import { useState, useEffect } from 'react';
import Product from '../components/Product';

function Store({ products, cart, setCart, cartItem, setCartItem }) {


    return (
        <div className='product-list'>
            {products.map(productItem => (
                <Product 
                productItem={productItem}
                key={productItem.id}
                cart={cart}
                setCart={setCart}
                // cartItem={cartItem}
                // setCartItem={setCartItem}
                />
            ))}
        </div>
    )
}

export default Store;