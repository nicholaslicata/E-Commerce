import AddButton from '../components/AddButton';

function Product({ productItem, cart, setCart, itemTotal, setItemTotal }) {
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
                    cart={cart} 
                    setCart={setCart} 
                    itemTotal={itemTotal}
                    setItemTotal={setItemTotal}/>
                  </div>
            </div>
    )
}

export default Product;