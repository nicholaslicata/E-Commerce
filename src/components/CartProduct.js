
function CartProduct({ cartItem, cart }) {

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