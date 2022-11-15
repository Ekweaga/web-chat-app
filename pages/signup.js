import React from 'react'
import Link from "next/link"

function signup() {
  return (
   <>

<div className='flex h-[100vh] gap-[200px]'>

<div className='h-[100vh] bg-[#217AF5] w-[500px] flex items-center justify-center text-white '>
            <h1 className='font-bold text-6xl text-center'>We Connect <br/>We Chat</h1>

        </div>
        <div className='flex flex-col items-center justify-center'>
            <div className='mb-[20px]'>
                <h2 className='font-bold '>Welcome to Connectron</h2>
                <h1 className=' text-2xl'>Create account to continue</h1>
            </div>
            <fom className="flex flex-col gap-[20px]">
            <div>
                    <label className='text-sm'>UserName</label>
                    <div>
                        <input type="text" placeholder='Username' style={{borderBottom:'1px solid #0066FF'}} className="text-sm w-[300px] py-2 focus:outline-none px-2"/>
                    </div>
                </div>


                <div>
                    <label className='text-sm'>Email Address</label>
                    <div>
                        <input type="email" placeholder='info@gmail.com' style={{borderBottom:'1px solid #0066FF'}} className="text-sm w-[300px] py-2 focus:outline-none px-2"/>
                    </div>
                </div>


                <div>
                    <label className='text-sm'>Password</label>
                    <div>
                        <input type="password" placeholder='xxxxxxxxxxxxxxxxxxxxx' style={{borderBottom:'2px solid #0066FF'}} className="text-sm w-[300px] py-2 focus:outline-none px-2"/>
                    </div>
                </div>

               

                <div className='text-center'>
                    Already have an account? <Link href="login" className='text-[#217AF5]'>Log in</Link>
                </div>

                <div>
                <button className='bg-[#217AF5] text-white p-2 rounded-2xl w-[300px] shadow'>Submit</button>
                </div>
                <div className='text-center border-2 border-black p-2 cursor-pointer'>
                    SignInWithGoogle
                </div>
            </fom>
        </div>
    </div>
   </>
  )
}

export default signup
