import React from 'react';
import Banner from './Banner/Banner';
import GloceryProduct from './GloceryProduct/GloceryProduct';
import MenWinter from './MenWinterCollections/MenWinter';

const Home = () => {
  return (
    <section className='container mx-auto mt-6'>
      <Banner/>
      <GloceryProduct />
      <MenWinter/>
    </section>
  );
};

export default Home;