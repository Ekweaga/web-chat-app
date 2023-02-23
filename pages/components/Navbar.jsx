import React,{useState} from 'react'
import Link from "next/link"
import Image from "next/image"

function Navbar() {
  const [open,setOpen] = useState(false)
  return (
   <>
   <nav className='flex md:justify-around p-3 mb-[40px] justify-between items-center'>
   <h2 className='font-bold text-2xl'>Connectron</h2>
    <div className='md:flex gap-[50px] hidden'>

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

     <div
          onClick={() => setOpen(!open)}
          className={`z-[99999px]  ${
            open ? "text-gray-900" : ""
          } text-3xl md:hidden `}
        >
          <Image src={open ? "/icon-close.svg" :"/icon-hamburger.svg"} alt="icon" width={30} height={20}></Image>
        </div>
        <div
          className={`md:hidden transition ease-out duration-500 text-white absolute w-screen h-screen z-10
      px-7 py-2 font-medium bg-[#081421] shadow-2xl  top-0 ${
        open ? "right-0 block" : "left-0 hidden"
      }`   } style={{transition:'all 0.5 ease'}}
        >
<div    className={`z-[99999px] text-3xl md:hidden absolute left-[30px] top-[30px] `}>
     
    </div>
          <div  onClick={() => setOpen(!open)}
          className={`z-[99999px] text-3xl md:hidden absolute right-[30px] top-[30px] `}>
            <Image src="/icon-close.svg" width={20} height={20} alt="icon"/>
          </div>
          <ul className="flex flex-col justify-center h-[300px] gap-[50px] py-2 text-lg mt-[180px]">
          <li  onClick={() => setOpen(!open)}><Link href="/">Home</Link></li>
          <li className="cursor-pointer" >
                About Us
            </li>
                
                <li  onClick={() => setOpen(!open)}><Link href="melodax">Community</Link></li>
                <li  onClick={() => setOpen(!open)}>Features</li>
               
                <li className='flex gap-[5px]'><Link href="/login"><button className="bg-[#54CED5] text-white w-[170px] rounded-full p-2" >LOGIN</button></Link>
                <Link href="/signup"><button className="bg-[#54CED5] text-white w-[170px] rounded-full p-2" >SIGNUP</button></Link>
                </li>
          </ul>
        </div>
   </nav>
   
   </>
  )
}

export default Navbar
