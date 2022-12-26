import React from 'react';
import Article from './Article';
import CartSection from './CartSection';

const GloceryProduct = () => {
  return (
    <section className='mt-14 container mx-auto w-full'>
      <Article porductName ='Glocery Product' url='glocery'/>
      <CartSection />
    </section>
  );
};

export default GloceryProduct;