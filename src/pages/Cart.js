import CartProduct from "../components/CartProduct";

function Cart({ cart }) {

    return (
         <div className='cart-container'>
            {cart.length > 0 ? ( 
              <div className='cart-item-container'>
                {cart.map((cartItem) => (
                <CartProduct 
                cartItem={cartItem}
                />
                 ))}
              </div>
            ) : (<p className='empty-cart-p'>Your cart is empty.</p>)}
         </div>
        )
}

export default Cart;