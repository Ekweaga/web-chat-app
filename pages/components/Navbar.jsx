import React from 'react'

function Navbar() {
  return (
   <>
   <nav className='flex justify-around p-2 mb-[40px]'>
    <div className='flex gap-[50px]'>
<h2 className='font-bold text-1xl'>Connectron</h2>
<ul className='flex gap-[30px]'>
<li>Home</li>
<li>Blog</li>
<li>Community</li>
<li>Events</li>
</ul>
    </div>

    <div>
        <button className='bg-[#217AF5] text-white p-2 rounded-2xl w-[100px] shadow'>Login</button>

    </div>
   </nav>
   
   </>
  )
}

export default Navbar
