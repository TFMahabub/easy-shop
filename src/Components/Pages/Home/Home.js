import React from 'react';
import Banner from './Banner/Banner';
import CartSection from './GloceryProduct/CartSection';
import GloceryProduct from './GloceryProduct/GloceryProduct';

const Home = () => {
  return (
    <section className='container mx-auto mt-6'>
      <Banner/>
      <GloceryProduct />
    </section>
  );
};

export default Home;