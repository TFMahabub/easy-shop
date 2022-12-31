import { useQuery } from '@tanstack/react-query';
import React, { createContext, useContext } from 'react';

export const PRODUCT_CONTEXT = createContext()
const ProductContext = ({children}) => {
  const {data: products, isLoading} = useQuery({
    queryKey: ['products'],
    queryFn: async()=>{
      const res = await fetch('http://localhost:5000/products')
      const data = await res.json();
      return data
    }    
  })

  const ProductsValue = {
    products,
    isLoading
  }
  return (
    <PRODUCT_CONTEXT.Provider value={ProductsValue}>
      {children}
    </PRODUCT_CONTEXT.Provider>
  );
};

// export const useProductContext = () =>{
//   const context = useContext(PRODUCT_CONTEXT)
//   return context
// }

export default ProductContext;