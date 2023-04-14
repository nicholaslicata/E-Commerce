import { useState, useEffect } from 'react';

function AddButton({ productItem, cartItem, setCartItem, cart, setCart, }) {

    const [buttonClicked, setButtonClicked]  = useState(false);

    // useEffect(() => {
    //     setCartItem( {
    //         title: productItem.title,
    //         price: productItem.price,
    //         image: productItem.image,
    //         id: productItem.id,
    //         quantity: 1,
    //     })
    // }, [buttonClicked]);

    function handleAddItem(e) {
        console.log(productItem);
        setButtonClicked(true);
        
        // setCartItem((prev) => {
        //     return {
        //         ...prev,
        //     title: productItem.title,
        //     price: productItem.price,
        //     image: productItem.image,
        //     id: productItem.id,
        //     quantity: 1,
        //     }
        // })

        const cartItem = {
                title: productItem.title,
                price: productItem.price,
                image: productItem.image,
                id: productItem.id,
        }

        setCart((prev) => {
            return [
                ...prev,
                    cartItem
            ]
        })
}

    return (
        <button className='add-button' onClick={handleAddItem}>Add to cart</button>
    )
}

export default AddButton;