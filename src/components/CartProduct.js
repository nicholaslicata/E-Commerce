
function CartProduct({ cartItem }) {

    return (
        <div className='cart-product'>
            <div className='cart-img-container'>
                <img className='cart-img' src={cartItem.image}></img>
            </div>
            <div className='cart-text-container'>
                <p className='cart-product-title'>{cartItem.title}</p>
                <p className='cart-product-price'>{`$ ${cartItem.price}`}</p>
            </div>
        </div>
    )
}

export default CartProduct;