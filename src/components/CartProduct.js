
function CartProduct({ cartItem, cart }) {

    // console.log(cartItem, 'cartItem');
    // console.log(singleCartItem, 'singleCartItem');

    return (
        <div className='cart-product'>
            <div>
                <img src={cartItem.image}></img>
            </div>
            <div>
                <p>{cartItem.title}</p>
                <p>{cartItem.price}</p>
            </div>
        </div>
    )
}

export default CartProduct;