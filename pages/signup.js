import React,{useState} from 'react'
import Link from "next/link"
import {signInWithPopup, GoogleAuthProvider,createUserWithEmailAndPassword} from 'firebase/auth'
import {auth,db} from  "../Firebase/fiebase"
import {setDoc,doc,Timestamp} from 'firebase/firestore';
import {useRouter} from "next/router"

function Signup() {
    const provider = new GoogleAuthProvider();
 const [name,setName] = useState('')
 const [email,setEmail] = useState('')
 const [pwd,setPwd] = useState('')
 const [error,setError] = useState('')
 const [success,setSuccess] = useState('')
 const [loading,setLoading] = useState(false)

 const router = useRouter();
    
      const submit = async (e)=>{
        e.preventDefault();
       
        if(name === "" || email === "" || pwd ===""){
            setError("Fields are empty, Check your inputs")
            return;
           
        }
        try{

            setLoading(true)
            const result = await createUserWithEmailAndPassword(auth,email,pwd).then(()=>{
              setLoading(false)
              setSuccess("Account created successfully")
                setDoc(doc(db,"users",result.user.uid),{
                    uid:result.user.uid,
                    name,
                     email,
                   password,
               Isonline:true,
                    CreatedAt:Timestamp.fromDate(new Date())
                }
                )
                setName('')
                setPwd('')
                setEmail('')
            })
          
    
           
          
           
            
        }
       
        catch(err){
           setError(error.message)
          console.log(err.message)
    
        }

        
      
    
    }
        

    const SignInWithGoogle =  async()=>{
        await signInWithPopup(auth,provider).then((user)=>{
       
        const googleemail = user.user.email
        setDoc(doc(db,"users",`${googleemail}`,{
            uid:result.user.uid,
                name,
                email,
               password,
               Isonline:true,
                CreatedAt:Timestamp.fromDate(new Date())
         })).then().catch((error)=>{
                setError(error.message)
         })
          router.push("/")
        }).catch((error)=>{
            setError(error.message)
            console.log(error.message)
        })
    }
  return (
   <>

<div className='flex md:h-[100vh] gap-[200px] flex-col md:flex-row'>

<div className='md:h-[100vh] bg-[#217AF5] md:w-[500px] flex items-center justify-center text-white h-[300px] '>
            <h1 className='font-bold text-6xl text-center'>We Connect <br/>We Chat</h1>

        </div>
        <div className='flex flex-col items-center justify-center -mt-[120px] md:mt-0'>
            <div className='mb-[20px]'>
                <h2 className='font-bold '>Welcome to Connectron</h2>
                <h1 className=' text-2xl'>Create account to continue</h1>
            </div>
            <form className="flex flex-col gap-[20px]" onSubmit={submit}>
            <div>
                    <label className='text-sm'>UserName</label>
                    <div>
                        <input type="text" placeholder='Username' value={name} onChange={(e)=>setName(e.target.value)} style={{borderBottom:'1px solid #0066FF'}} className="text-sm w-[300px] py-2 focus:outline-none px-2"/>
                    </div>
                </div>


                <div>
                    <label className='text-sm'>Email Address</label>
                    <div>
                        <input type="email" placeholder='info@gmail.com' value={email} onChange={(e)=>setEmail(e.target.value)} style={{borderBottom:'1px solid #0066FF'}} className="text-sm w-[300px] py-2 focus:outline-none px-2"/>
                    </div>
                </div>


                <div>
                    <label className='text-sm'>Password</label>
                    <div>
                        <input type="password" placeholder='type your password here' value={pwd} onChange={(e)=>setPwd(e.target.value)} style={{borderBottom:'2px solid #0066FF'}} className="text-sm w-[300px] py-2 focus:outline-none px-2"/>
                    </div>
                </div>

               

                <div className='text-center'>
                    Already have an account? <Link href="login" className='text-[#217AF5]'>Log in</Link>
                </div>
                <div className='text-red-800 flex items-center justify-center'>{error ?(<p>{error}</p>):null}</div>
               {loading ? (<div className='text-green-800 flex items-center justify-center'>{loading ?(<p>{success}</p>):<p>We are creating your account....</p>}</div>):null} 
                <div>
                <button className='bg-[#217AF5] text-white p-2 rounded-2xl w-[300px] shadow'>Submit</button>
                </div>
                <div className='text-center border-2 border-black p-2 cursor-pointer' onClick={SignInWithGoogle}>
                    SignInWithGoogle
                </div>
            </form>

            <div className='md:mt-[50px] py-2'>
                <p><Link href="/">Go back Home</Link></p>
            </div>

        </div>
    </div>
   </>
  )
}

export default Signup
