import React from 'react'

const Login = () => {
  return (
    <div>
        <div className='bg-[#F6F5FF]'>
            <div className='py-[4rem] max-w-[1600px] mx-auto px-[4rem]'>
                <h1 className='text-[#101750] text-[32px] font-bold'>My Account</h1>
                <p>Home / <span className='text-[#FB2E86]'>Login</span></p>
            </div>
        </div>
        <div className='w-[544px] mx-auto text-center mt-[4rem] p-[4rem] shadow-xl text-[#9096B2]'>
            <h1 className='font-[600] text-[#101750] text-[24px]'>Login</h1>
            <p className='mb-7'>Please login using account detail below.</p>
            <input type="text" placeholder='Email Address' className='outline-none block border border-[#C2C5E1] h-[38px] w-full pl-2' />
            <input type="password" placeholder='Password' className='outline-none block border border-[#C2C5E1] h-[38px] w-full pl-2 mt-4' />
            <p className='text-left font-[300] cursor-pointer text-[13px] mt-1'>Forgot your password?</p>
            <button className='w-full bg-[#FB2E86] text-white py-[0.4rem] mt-4 rounded-[3px]'>Sign In</button>
            <p className='text-[13px] mt-5'>Don’t have an Account? <span className='text-[#FB2E86] cursor-pointer'>Create account</span> </p>
        </div>
    </div>
  )
}

export default Login