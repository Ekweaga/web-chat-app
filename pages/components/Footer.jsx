import React from 'react'
import Image from "next/image"
function Footer() {
  return (
  <>
  <footer className='bg-[#2B2B39] md:h-[250px] text-white mt-[50px] flex py-3 '>

    <div className='grid grid-cols-2 md:grid-cols-5 gap-[80px] w-[80%] m-auto'>
        <div>
            <h2 className='font-bold mb-[20px]'>Home</h2>
            <ul className='flex flex-col gap-[15px] text-sm'>
                <li>Home</li>
                <li>Community</li>
                <li>Events</li>
                <li>Contact</li>
                
            </ul>
        </div>

        <div>
        <h2 className='font-bold mb-[20px]'>Resources</h2>
            <ul className='flex flex-col gap-[15px] text-sm'>
                <li>Blog</li>
                <li>News</li>
                <li>Guides</li>
                <li>Help Center</li>
                
            </ul>
        </div>


        <div>
        <h2 className='font-bold mb-[20px]'>Community</h2>
            <ul className='flex flex-col gap-[15px] text-sm'>
                <li>NewsFeed</li>
                <li>Profile</li>
                <li>Forums</li>
                <li>Friends</li>
                
            </ul>
        </div>

        <div>
        <h2 className='font-bold mb-[20px]'>Main links</h2>
            <ul className='flex flex-col gap-[15px] text-sm'>
                <li>Members</li>
                <li>Activity</li>
                <li>Groups</li>
                <li>Private Group</li>
                
            </ul>
        </div>

        <div>
        <h2 className='font-bold mb-[20px]'>Connectron Newsletter</h2>
            <ul className='flex flex-col gap-[15px] text-sm'>
              <p className='text-sm'>Subscribe to be the first to know latest updates</p>

              <div className='border-2 border-white rounded-2xl flex w-[230px]'>
                <input type="email" placeholder='Email Address' className='text-white p-2 bg-transparent w-[150px]'/><button className='bg-white text-black rounded-2xl p-2'>Subscribe</button>
              </div>
                
            </ul>
        </div>
    </div>

   

  </footer>
  <div  className="bg-[#20202D] md:h-[50px] text-white flex justify-around items-center flex-col md:flex-row gap-2 p-2">

    <div>We Connect We Chat</div>
    <div>
        <h1 className='font-bold'>Connectron</h1>
    </div>
    <div>  <Image src="/Social icon.png" width={100} height={30}/></div>
  

</div>

  
  </>
  )
}

export default Footer