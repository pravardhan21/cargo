// LoginPage.js

import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const handleLogin = () => {
    // Handle login logic here
    console.log('Login button clicked');
  };
  
  return (
    <div className="login-page flex items-center ">
      <div className='p-5'>
        <h1>CCI</h1>
        <div className='space-y-5'>
         <p> "Welcome to Cargo Connect India, where we're revolutionizing the logistics landscape across the nation. In a booming economy like India's, the efficient movement of goods is crucial. However, challenges such as fragmentation, lack of transparency, and inefficient transportation networks persist, leading to higher costs, delayed deliveries, and frustrated businesses.</p>

 <p>At Cargo Connect India, we're poised to address these challenges and emerge as leaders in the Indian logistics industry. Our digital platform serves as a bridge, connecting shippers and carriers seamlessly throughout the country. By bringing together businesses in need of transportation services with truck owners and operators equipped to fulfill those needs, we're streamlining the logistics process like never before.</p>

<p>Our vision is clear: to create a connected ecosystem where shippers effortlessly find reliable carriers, and carriers optimize their potential with competitive rates and optimized routes. With Cargo Connect India, experience a transformed logistics landscape where efficiency, transparency, and reliability reign supreme. Join us as we pave the way for a brighter, more connected future in logistics."</p>
        </div>
      </div>
<div className='space-y-7 border-2 p-6 rounded-md'>
<div className="logo-container">
        {/* Replace 'logo.png' with the path to your logo image */}
        <img src="logo.png" alt="Logo" className="logo" />
      </div>
      <div className="login-form flex flex-col  space-y-5">
        {/* Your login form fields go here */}
        <input classname=" " type="text" placeholder="Username" />
        <input lassname="h-[20px] " type="password" placeholder="Password" />
        <button className='border-2 p-3 rounded-md' onClick={handleLogin}>Login</button>
      </div>
      <div className="register-link text-center">
        {/* Navigate to Register page when clicked */}
        <p>You haven't registered yet?</p>
        <Link className="register-link cursor-pointer underline" to="/register">Register</Link>
      </div>
</div>
    </div>
  );
};

export default LoginPage;
