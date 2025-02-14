import React from 'react';
import VisitMarketPlacebtn from './login/visitMarketPlacebtn';
import LoginForm from './login/loginForm';

const Login = () => {
 
  return (
    <div className="flex flex-col md:flex-row">
      {/* Left side image section */}
      <div className="md:basis-1/2 flex justify-center relative items-center">
        <img src="/login/12123.png" alt="Login" className="w-full xs:h-44 object-cover  md:h-full max-h-screen" />
        <VisitMarketPlacebtn />
      </div>

      {/* Right side form section */}
      <div className="md:basis-1/2 flex justify-center items-center p-6 rounded-lg">
      
        <div className="flex flex-col xs:mt-20 md:mt-3 xs:w-[100%] md:w-[85%] space-y-4">
        <img className='md:h-16 xs:h-12 xs:w-12 mx-auto md:w-16' src='/login/logo.png'></img>
          <h1 className="xs:text-3xl md:text-4xl font-bold text-center">Great to see you again!</h1>
          <h4 className="text-center xs:text-lg md:text-xl font-semibold text-gray-600">Enter your login details to connect.</h4>

          <LoginForm />

          <div className="text-center">
            <p className="text-sm text-start text-[#00422F]">Lost your password?</p>
            <h2 className="mt-4 text-center xs:text-lg md:text-xl font-semibold text-[#00422F] cursor-pointer">No Account Yet? Register now</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
