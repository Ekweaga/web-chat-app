import React,{useState} from 'react'
import Link from "next/link"
//import {createUserWithEmailAndPassword} from 'firebase/auth';
//import {auth,db} from './components/Firebase';
//import {setDoc,doc,Timestamp} from 'firebase/firestore';

function signup() {
   const [data, SetData] = useState({
        name:'',
        email : '',
        password : '',
       error: '',
       success:'',
       loading:false
    })
    const {name,email,password,error,loading,success} = data;
    const handlechange = (e)=>{
        SetData({...data, [e.target.name]:e.target.value});
    }
    
   /*   const submit = async (e)=>{
        e.preventDefault();
        SetData({loading:true})
        if(!name || !email || !password){
            SetData({...data, error:"Empty Fields are available"})
            alert("empty")
        }
        try{
            const result = await createUserWithEmailAndPassword(auth,email,password)
            console.log(result.user);
    
             setDoc(doc(db,"users",result.user.uid),{
                uid:result.user.uid,
                name,
                 email,
               password,
           Isonline:true,
                CreatedAt:Timestamp.fromDate(new Date())
            }
            )
          
            SetData({...data, success:"Profile created successfully"});
                alert("success");
            
        }
       
        catch(err){
            SetData({error:err.message})
    
        }
        SetData({name:'', email:'',password:''})
    
    }
        */
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
            <fom className="flex flex-col gap-[20px]">
            <div>
                    <label className='text-sm'>UserName</label>
                    <div>
                        <input type="text" placeholder='Username' value={name} onChange={handlechange} style={{borderBottom:'1px solid #0066FF'}} className="text-sm w-[300px] py-2 focus:outline-none px-2"/>
                    </div>
                </div>


                <div>
                    <label className='text-sm'>Email Address</label>
                    <div>
                        <input type="email" placeholder='info@gmail.com' value={email} onChange={handlechange} style={{borderBottom:'1px solid #0066FF'}} className="text-sm w-[300px] py-2 focus:outline-none px-2"/>
                    </div>
                </div>


                <div>
                    <label className='text-sm'>Password</label>
                    <div>
                        <input type="password" placeholder='xxxxxxxxxxxxxxxxxxxxx' value={password} onChange={handlechange} style={{borderBottom:'2px solid #0066FF'}} className="text-sm w-[300px] py-2 focus:outline-none px-2"/>
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

            <div className='md:mt-[50px] py-2'>
                <p><Link href="/">Go back Home</Link></p>
            </div>

        </div>
    </div>
   </>
  )
}

export default signup
