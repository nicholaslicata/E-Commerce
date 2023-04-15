
function AddButton({ productItem, cart, setCart }) {

    function handleAddItem() {
        let isPresent = false;
        cart.forEach((item) => {
            if (productItem.id === item.id) {
                isPresent = true;
            }
        })

        const cartItem = {
                title: productItem.title,
                price: productItem.price,
                image: productItem.image,
                id: productItem.id,
        }

        if (isPresent) {
            return;
        } else {
            setCart((prev) => {
                return [
                    ...prev,
                        cartItem
                ]
            })
        }
     
}

    return (
        <button className='add-button' onClick={handleAddItem}>Add to cart</button>
    )
}

export default AddButton;