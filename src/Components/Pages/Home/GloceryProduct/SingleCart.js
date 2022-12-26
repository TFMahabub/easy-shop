import React from 'react';
import './ProductSwiper.css'

const SingleCart = ({product}) => {
  const {imgUrl, productName, productCode, price, productCategory} = product;
  const handleAddToCart = () =>{

  }
  const handleBuyNow = () =>{

  }
  return (
    <div className='border border-lightGray w-72'>
      <img src={imgUrl} id='cart-img' alt="" />
      <h3 className='text-xl font-semibold mt-2'>{productName.slice(0,25)}</h3>
      <p className='text-primary text-lg font-semibold'>${price}</p>
      <div className='flex items-center justify-between border-t border-lightGray mt-2'>
        <button onClick={handleAddToCart} className='p-1 w-1/2 '>Add to cart</button>
        <button onClick={handleBuyNow} className='p-1 border-l w-1/2'>Buy Now</button>
      </div>
    </div>
  );
};

export default SingleCart;