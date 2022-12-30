import React from 'react';
import { Link } from 'react-router-dom';
import './ProductSwiper.css'

const SingleCart = ({product}) => {
  const {imgUrl, productName, productCode, price, productCategory, _id} = product;
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
        <button onClick={handleAddToCart} className='p-1 w-1/2 hover:bg-primary hover:text-white duration-200 bg-lightGray'>Add to cart</button>
        <Link to={`/products/product_details/${_id}`} className='p-1 border-l border-lightGray hover:bg-primary bg-lightGray hover:text-white duration-200 w-1/2'>Details</Link>
      </div>
    </div>
  );
};

export default SingleCart;