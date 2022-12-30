import React from 'react';
import Article from '../GloceryProduct/Article';
import MenCartSection from './MenCartSection';

const MenWinter = () => {
  return (
    <section className='mb-14 container mx-auto'>
      <Article porductName ='Mens Winter Collection' url='men_winter_collection_all'/>
      <MenCartSection/>
    </section>
  );
};

export default MenWinter;