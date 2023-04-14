import AddButton from '../components/AddButton';

function Product({ productItem, cartItem, setCartItem, cart, setCart}) {
    return (
            <div className='product-container'>
                <div className='product-img-container'>
                  <img className='product-img' src={productItem.image}></img>
                </div>
                  <div className='product-text-container'>
                    <p className='product-title'>{productItem.title}</p>
                    <p className='product-price'>{`$ ${productItem.price}`}</p>
                    <AddButton 
                    productItem={productItem} 
                    // cartItem={cartItem} 
                    // setCartItem={setCartItem} 
                    cart={cart} 
                    setCart={setCart} />
                  </div>
            </div>
    )
}

export default Product;