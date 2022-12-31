import React, { useContext, useState } from 'react';
import './ProductSwiper.css'
import SingleCart from './SingleCart';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
// import "swiper/components/pagination/pagination.min.css"
// import "swiper/components/navigation/navigation.min.css"



// import Swiper core and required modules
import SwiperCore, {
  Pagination,Navigation
} from 'swiper/core';
import { PRODUCT_CONTEXT } from '../../../../Contexts/Auth/ProductContext';

// install Swiper modules
SwiperCore.use([Pagination,Navigation]);

const CartSection = () => {
  //get all products from PRODUCT_CONTEXT-
  const {products, isLoading} = useContext(PRODUCT_CONTEXT);
  //filter glocery product-
  const gloceryProducts = products?.filter(product=>product.porductCategory === 'glocery')




  const [swiperRef, setSwiperRef] = useState(null);
  let appendNumber = 4;
  let prependNumber = 1;

  const prepend2 = () => {
    swiperRef.prependSlide([
      '<div class="swiper-slide">Slide ' + (--prependNumber) + '</div>',
      '<div class="swiper-slide">Slide ' + (--prependNumber) + '</div>'
    ]);
  }

  const prepend = () => {
    swiperRef.prependSlide('<div class="swiper-slide">Slide ' + (--prependNumber) + '</div>');
  }

  const append = () => {
    swiperRef.appendSlide('<div class="swiper-slide">Slide ' + (++appendNumber) + '</div>');
  }

  const append2 = () => {
    swiperRef.appendSlide([
      '<div class="swiper-slide">Slide ' + (++appendNumber) + '</div>',
      '<div class="swiper-slide">Slide ' + (++appendNumber) + '</div>'
    ]);
  }


  if(!gloceryProducts){return <h3>loading...</h3>}

  
  return (
      <div className='mt-6'>
        <Swiper onSwiper={setSwiperRef} slidesPerView={3} centeredSlides={true} spaceBetween={30}  navigation={true} className="mySwiper">
          {
            gloceryProducts?.map(product=>
            <SwiperSlide key={product._id} >
              <SingleCart product={product} />
            </SwiperSlide>
              )
          }
        </Swiper>
      
        {/* <p className="append-buttons">
  

  
  
        <button onClick={() => prepend2()} className="prepend-2-slides">Prepend 2 Slides</button>
        <button onClick={() => prepend()} className="prepend-slide">Prepend Slide</button>
        <button onClick={() => append()} className="append-slide">Append Slide</button>
        <button onClick={() => append2()} className="append-2-slides">Append 2 Slides</button>
        </p> */}
      </div>
  );
};

export default CartSection;