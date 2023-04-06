import { useState, useEffect } from 'react';
import Product from '../components/Product';

function Store() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    });

    async function getProducts() {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
    }


    return (
        <div className='product-list'>
            {products.map(productItem => (
                <Product productTitle={productItem.title} 
                productImage={productItem.image} 
                productPrice={productItem.price}/>
            ))}
        </div>
    )
}

export default Store;