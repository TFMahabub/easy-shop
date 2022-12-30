import React from 'react';

const RequiredInput = ({type, name, id}) => {
  return (
    <input type={type} name={name} id={id} required />
  );
};

export default RequiredInput;