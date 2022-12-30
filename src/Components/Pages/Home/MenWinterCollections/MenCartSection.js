import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import '../GloceryProduct/ProductSwiper.css'
import SingleCart from '../GloceryProduct/SingleCart';
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

// install Swiper modules
SwiperCore.use([Pagination,Navigation]);

const MenCartSection = () => {
  const {data: menProducts, isLoading} = useQuery({
    queryKey: ['menProducts'],
    queryFn: async()=>{
      const res = await fetch('http://localhost:5000/products/men_winter_product_category/men_winter_collection')
      const data = await res.json();
      return data
    }    
  })
  






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


  if(isLoading){return <h3>loading...</h3>}
  console.log(menProducts);
  
  return (
      <div className='mt-6'>
        <Swiper onSwiper={setSwiperRef} slidesPerView={3} centeredSlides={true} spaceBetween={30}  navigation={true} className="mySwiper">
          {
            menProducts.map(product=>
            <SwiperSlide>
              <SingleCart product={product} key={product._id}/>
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

export default MenCartSection;