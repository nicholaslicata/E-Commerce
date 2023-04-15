import { useState, useEffect } from 'react';
import Product from '../components/Product';

function Store({ products, cart, setCart }) {


    return (
        <div className='product-list'>
            {products.map(productItem => (
                <Product 
                productItem={productItem}
                key={productItem.id}
                cart={cart}
                setCart={setCart}
                />
            ))}
        </div>
    )
}

export default Store;