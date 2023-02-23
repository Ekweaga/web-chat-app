import React,{useState} from 'react'
import Link from "next/link"
import {signInWithPopup, GoogleAuthProvider,signInWithEmailAndPassword} from 'firebase/auth'
import {auth,db} from  "../Firebase/fiebase"
import {setDoc,doc,Timestamp} from 'firebase/firestore';
import {useRouter} from "next/router"


function Login() {

    const provider = new GoogleAuthProvider();
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [pwd,setPwd] = useState('')
    const [error,setError] = useState('')
    const [success,setSuccess] = useState('')
    const [loading,setLoading] = useState(false)
   
    const router = useRouter();

    const  login = async (e)=>{
        e.preventDefault();
        //setLoading(true)
    
        if(email === "" || !password === "" ){
          setError("Fields are empty")
          //setLoading(false)
        }
    
       else{
        try{
          await signInWithEmailAndPassword(auth,email,pwd)
        // setLoading(false)
         router.replace("/");
         setSuccess("Welcome to Movella")
         
       }
       catch(err){
         console.log(err)
         setError(err.message)
       }
    
       }
       
       
      
    
      }

      const SignInWithGoogle =  async()=>{
        await signInWithPopup(auth,provider).then((user)=>{
          router.push("/")
        }).catch((error)=>{
            setError(error.message)
            console.log(error.message)
        })
    }
  return (
    <>
    <div className='flex h-[100vh] gap-[200px] flex-col md:flex-row'>

        <div className='md:h-[100vh] bg-[#217AF5] md:w-[500px] flex items-center justify-center text-white h-[300px] '>
            <h1 className='font-bold text-6xl text-center'>We Connect <br/>We Chat</h1>

        </div>


        <div className='flex flex-col items-center justify-center -mt-[120px] md:mt-0'>
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
                        <input type="password" placeholder='xxxxxxxxxxxxxxxxxxxxx' style={{borderBottom:'2px solid #0066FF'}} className="text-sm w-[300px] py-2 focus:outline-none px-2"/>
                    </div>
                </div>

                <div className='text-center'>
                    <p>Don't have an account? <Link href="signup" className='text-[#217AF5]'>Sign Up</Link></p>
                </div>

                <div>
                <button className='bg-[#217AF5] text-white p-2 rounded-2xl w-[300px] shadow'>Login</button>
                </div>

                <div className='text-center border-2 border-black p-2 cursor-pointer' onClick={SignInWithGoogle}>
                    SignInWithGoogle
                </div>
            </fom>

            <div className='md:mt-[50px] py-2'>
                <p><Link href="/">Go back Home</Link></p>
            </div>
        </div>


    </div>
    
    </>
  )
}

export default Login