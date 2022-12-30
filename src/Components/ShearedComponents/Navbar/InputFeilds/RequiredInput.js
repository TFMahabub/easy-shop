import React from 'react';

const RequiredInput = ({type, name, id}) => {
  return (
    <input type={type} name={name} id={id} className='w-full rounded-md border-1 border-gray focus:border-primary' required />
  );
};

export default RequiredInput;