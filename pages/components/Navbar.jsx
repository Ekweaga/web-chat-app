import React from 'react'
import Link from "next/link"

function Navbar() {
  return (
   <>
   <nav className='flex justify-around p-2 mb-[40px]'>
    <div className='md:flex gap-[50px] hidden'>
<h2 className='font-bold text-1xl'>Connectron</h2>
<ul className='flex gap-[30px]'>
<li>Home</li>
<li>Blog</li>
<li>Community</li>
<li>Events</li>
</ul>
    </div>

    <div  className='md:flex gap-[50px] hidden'>
        <button className='bg-[#217AF5] text-white p-2 rounded-2xl w-[100px] shadow cursor-pointer'><Link href="login">Login</Link></button>

    </div>
   </nav>
   
   </>
  )
}

export default Navbar
