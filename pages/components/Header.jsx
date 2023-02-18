import React from 'react'
import Image from 'next/image'

function Header() {
  return (
    <header className='flex justify-center items-center flex-col md:flex-row p-3'>

        <div className='md:w-[600px] mt-[30px]'>
          <div className="bg-[#E8F1FE] w-[230px] p-2 text-sm text-[#84B6F9] rounded-2xl mb-[15px]">Connectron community</div>
            <h1 className='text-[#0A093D] md:text-5xl text-4xl font-bold mb-[20px]'>Your Solutions For <br/> Community!</h1>
            <p className="md:w-[450px] text-sm">More than 1 million people in over countries use connectron to stay in touch with friends and family</p>
            <div className="flex gap-[30px] mt-[20px]">
            <Image src="/button-Discover me.png" width={150} height={300}/> 
            <div className='flex items-center'><button  className='flex items-center justify-center border-2 border-blue p-2'>Invite Friend</button></div> 
            </div>
        </div>
    <Image src="/Iamge.png" width={500} height={300}/>
  </header>
  )
}

export default Header
