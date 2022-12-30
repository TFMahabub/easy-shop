import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
import { RiShoppingBasketLine, RiShoppingCart2Fill, RiHeartFill } from "react-icons/ri";
import './GloceryDetails.scss'

const GloceryDetails = () => {
  //get the dynamic _id from path:
  const params = useParams();

  
  const {data: singleProduct, isLoading} = useQuery({
    queryKey: ['singleProduct'],
    queryFn: async()=>{
      const res = await fetch(`http://localhost:5000/products/product_details/${params.id}`);
      const data =  await res.json();
      return data;
    }
  })
  if(isLoading){return <h3>Loading...</h3>}
  //distructure single data:
  const {_id, imgUrl, price, productCode, productName, size, weight} = singleProduct;
  console.log(singleProduct);
  return (
    <section className='container mx-auto mt-5'>
      <div className='porduct-details-container'>
        <div className='product-image'>
          <img src={imgUrl} className='' alt="" />
        </div>
        <div className='product-details'>
          <h3 className='product-name'>{productName}</h3>
          <h4 className='product-code'>Product Code: {productCode}</h4>
          {
            weight&& 
            <p className='weight'>{weight}</p>
          }
          <p className='product-price'>Price: ${price}</p>
          {
            size && 
            <div className='product-size-container'>
              <p>Size:</p>
              <div className='size-container'>
                <input type="radio" id="html" name="size" value="m" />
                <label htmlFor="">M</label><br />
                <input type="radio" id="html" name="size" value="l" />
                <label htmlFor="">L</label><br />
                <input type="radio" id="html" name="size" value="xl" />
                <label htmlFor="">XL</label><br />
              </div>
            </div>
          }
          <div className='button-container'>
            <button className='button-add-to-cart'><RiShoppingCart2Fill/> Add to Cart</button>
            <button className='button-buy-now'><RiShoppingBasketLine/> Buy Now</button>
            <button className='button-add-to-wishlist'><RiHeartFill/> Add to Wishlist</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GloceryDetails;