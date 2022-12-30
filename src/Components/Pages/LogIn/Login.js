import React from 'react';
import RequiredInput from '../../ShearedComponents/Navbar/InputFeilds/RequiredInput';

const Login = () => {
  const hangleOnSubmit = (e) =>{
    e.preventDefault()
    console.log(e.target.email.value);
  }
  return (
    <section className='bg-white container mx-auto'>
      <form  onSubmit={hangleOnSubmit}>
        <RequiredInput type={"email"} name={"email"}/>
        <RequiredInput type={"email"} name={"email"}/>
        <button className='w-full py-2 bg-primary text-white'>Log In</button>
      </form>
    </section>
  );
};

export default Login;