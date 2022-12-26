import React from 'react';
import { Link } from 'react-router-dom';

const Article = ({ porductName, url }) => {
  return (
    <div className='flex items-center justify-between'>
     <h3 className='text-primary text-2xl font-semibold'>{porductName}</h3> 
     <Link to={`/products/${url}`} className='text-lg hover:text-primary underline'>see more</Link>
    </div>
  );
};

export default Article;