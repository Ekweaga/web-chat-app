import React from 'react'
import Link from "next/link"

function login() {
  return (
    <>
    <div className='flex h-[100vh] gap-[200px]'>

        <div className='h-[100vh] bg-[#217AF5] w-[500px] flex items-center justify-center text-white '>
            <h1 className='font-bold text-6xl text-center'>We Connect <br/>We Chat</h1>

        </div>


        <div className='flex flex-col items-center justify-center'>
            <div className='mb-[20px]'>
                <h1 className='font-bold text-2xl'>Log in to continue</h1>
            </div>
            <fom className="flex flex-col gap-[30px]">
                <div>
                    <label className='text-sm'>Email Address</label>
                    <div>
                        <input type="email" placeholder='info@gmail.com' style={{borderBottom:'2px solid #0066FF'}} className="text-sm w-[300px] py-2 focus:outline-none px-2"/>
                    </div>
                </div>


                <div>
                    <label className='text-sm'>Password</label>
                    <div>
                        <input type="text" placeholder='xxxxxxxxxxxxxxxxxxxxx' style={{borderBottom:'2px solid #0066FF'}} className="text-sm w-[300px] py-2 focus:outline-none px-2"/>
                    </div>
                </div>

                <div className='text-center'>
                    <p>Don't have an account? <Link href="signup" className='text-[#217AF5]'>Sign Up</Link></p>
                </div>

                <div>
                <button className='bg-[#217AF5] text-white p-2 rounded-2xl w-[300px] shadow'>Login</button>
                </div>
            </fom>
        </div>


    </div>
    
    </>
  )
}

export default login