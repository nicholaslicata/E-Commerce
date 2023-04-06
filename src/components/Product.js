import AddButton from '../components/AddButton';

function Product({ productTitle, productImage, productPrice }) {
    return (
            <div className='product-container'>
                <div className='product-img-container'>
                  <img className='product-img' src={productImage}></img>
                </div>
                  <div className='product-text-container'>
                    <p className='product-title'>{productTitle}</p>
                    <p className='product-price'>{`$ ${productPrice}`}</p>
                    <AddButton />
                  </div>
            </div>
    )
}

export default Product;