import CartProduct from "../components/CartProduct";

function Cart({ cart, setCart, cartItem }) {

  console.log(cartItem);
    
    return (
         <div className='cart-container'>
            {cart.length > 0 ? ( 
              <div>
                {cart.map((cartItem) => (
                <CartProduct 
                // singleCartItem={singleCartItem}
                cartItem={cartItem}
                />
                 ))}
              </div>
            ) : (<p className='empty-cart-p'>Your cart is empty.</p>)}
         </div>
        )
}

export default Cart;