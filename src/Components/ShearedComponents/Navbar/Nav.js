import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiPhoneCall, FiShoppingCart, FiUser } from "react-icons/fi";

const Nav = () => {
  const [items, setItems] = useState(0)
  const user = null;
  const menus = [
    { id: 1, menu: 'Home', path: '/' },
    { id: 2, menu: 'About', path: '/about' },
  ]

  return (
      <nav className='text-white'>
        <div className='bg-DarkPrimary py-1 hidden lg:block'>
          <div className='flex justify-between items-center container mx-auto'>
            <p>Trusted Online Shopping Site in United State</p>
            <p className='flex items-center space-x-1'><FiPhoneCall className='text-lg'/> <span>+8812345678910 (9am-5pm)</span></p>
          </div>
        </div>
        <div className='bg-primary'>
          <div className='container mx-auto py-4 flex-col lg:flex-row space-y-2 lg:space-y-0 lg:flex lg:items-center lg:justify-between px-3 lg:px-0'>
            <h2 className='text-2xl font-semibold'>EasyShop</h2>
            <ul className='space-x-4 lg:flex lg:items-center lg:justify-center'>
            {
              menus.map((menu)=>
                <Link to={menu?.path} key={menu?.id}><li className='inline-block hover:text-LightPrimary font-normal text-lg'>{menu?.menu}</li></Link>
                )
            }
            </ul>
            <div className='flex-col lg:flex-row lg:flex lg:items-center space-y-2 lg:space-y-0 lg:space-x-6 space-x-2'>
              {
                user?
                <>
                  <div className='lg:relative'>
                    <div className='flex items-center text-lg space-x-1 hover:text-LightPrimary cursor-pointer'><span>Shop</span><FiShoppingCart className='text-xl lg:text-2xl'/></div>
                    <div className='lg:absolute bg-LightPrimary h-4 w-4 flex items-center justify-center rounded-full top-[-12px] right-[-12px]'>
                      <span className='text-primary text-xs font-semibold'>{items}</span>
                    </div>
                  </div>
                  <div className='hover:bg-DarkPrimary p-2 rounded-full cursor-pointer'>
                    <FiUser className='text-2xl hover:text-LightPrimary'/>
                  </div>
                </>
                :
                <>
                  <Link to='/signup'><button className='lg:py-[5px] py-1 px-3 hover:scale-105 duration-300 text-white border-2 hover:bg-LightPrimary hover:text-primary border-LightPrimary rounded-full font-medium text-lg'>Sign Up</button></Link>
                  <Link to='/login'><button className='lg:py-[5px] py-1 px-3 hover:scale-105 duration-300 text-white border-2 hover:bg-LightPrimary hover:text-primary border-LightPrimary rounded-full font-medium text-lg'>Log In</button></Link>
                </>
              }
            </div>
          </div>   
        </div>
      </nav>
  );
};

export default Nav;