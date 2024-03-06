import React, { useState } from 'react';


const RegisterPage = () => {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('');

  const handleRoleSelection = (selectedRole) => {
    setRole(selectedRole);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Handle form submission based on role
    console.log('Form submitted for role:', role);
  };

  return (
    <div className="register-page">
      <h2>Register</h2>
      <div className="role-selection">
        <button onClick={() => handleRoleSelection('trucker')}>I'm a trucker</button>
        <button onClick={() => handleRoleSelection('load-provider')}>I'm a load provider</button>
      </div>
      {role=="trucker" ?(
        <form onSubmit={handleFormSubmit}>
        <div className='bg-gradient-to-r from-[#2193b0] to-[#6dd5ed] text-black flex items-center justify-center h-screen w-screen'>
    <form className='flex flex-col items-center justify-center w-[350px] h-[350px] bg-cyan-500 shadow-lg shadow-cyan-500/50   focus:border rounded-md  space-y-3' action="" method="post">
      <input required onChange={(e)=>{setName(e.target.value)}}  value={name } className=' focus:outline-none bg-transparent border-b-[2px]  border-black placeholder-black focus:border-white  p-3' placeholder='User name' type="text" name="" id="" />
      <input required onChange={(e)=>{setPassword(e.target.value)}} value={password} className=' focus:outline-none bg-transparent focus:border-white  border-b-[2px] border-black placeholder-black p-3' placeholder='Password' type="password" name="" id="" />
      <button  className='bg-white  text-lg px-8 py-3 rounded-md hover:text-white hover:bg-cyan-500/50 hover:border-2 font-bold'>Login</button>
    </form>
 </div>
          {/* Additional fields based on role */}
          {role === 'trucker' && (
            <div>
              <input type="text" placeholder="Truck type" />
              <input type="text" placeholder="License plate number" />
            </div>
          )}
          {role === 'load-provider' && (
            <div>
              <input type="text" placeholder="Company name" />
              <input type="text" placeholder="Company address" />
            </div>
          )}
          <button type="submit">Register</button>
        </form>
      ):(
        <div></div>
      )}
    </div>
  );
};

export default RegisterPage;
