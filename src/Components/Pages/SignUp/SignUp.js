import React, { useContext } from 'react';
import RequiredInput from '../../ShearedComponents/Navbar/InputFeilds/RequiredInput';
import { AiFillGoogleCircle } from "react-icons/ai";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { AuthProvider } from '../../../Contexts/Auth/UserContext';
import toast from 'react-hot-toast';

const SignUp = () => {
  const {signUp} = useContext(AuthProvider)
  const hangleOnSubmit = (e) =>{
    e.preventDefault()
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signUp(email, password)
    .then(()=>{toast.success('sign up successfuly')})
    .catch(err=>console.error(err))
    console.log(email, password);
  }

  const handleGoogleLogin = () =>{

  }
  return (
    <section className='bg-white container mx-auto lg:flex justify-center items-center lg:h-[83vh]'>
      <div className='max-w-lg border-2 border-primary p-8 rounded-lg mt-16 '>
        <form onSubmit={hangleOnSubmit} >
          <div>
            <label htmlFor="" className='text-sm text-gray'>Name:</label><br />
            <RequiredInput type={"text"} name={"name"}/>
          </div>
          <div className='mt-2'>
            <label htmlFor="" className='text-sm text-gray'>Email:</label><br />
            <RequiredInput type={"email"} name={"email"}/>
          </div>
          <div className='mt-2'>
            <label htmlFor="" className='text-sm text-gray'>Password:</label><br />
            <RequiredInput type={"password"} name={"password"}/>
          </div>
          <div className='mt-3'>
            <button className='w-full py-2 bg-primary text-white rounded-md'>Sign Up</button>    
          </div>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px bg-gray"></div>
          <p className="px-1 text-sm text-gray">Login with</p>
          <div className="flex-1 h-px bg-gray"></div>
        </div>
        <div className='flex items-center justify-between w-32 mt-2 mx-auto'>
        <AiFillGoogleCircle onClick={handleGoogleLogin} className='text-4xl text-primary cursor-pointer'/>
          <BsFacebook className='text-3xl text-primary cursor-pointer'/>
          <BsTwitter className='text-3xl text-primary cursor-pointer'/>
        </div>
      </div>
    </section>
  );
};

export default SignUp;