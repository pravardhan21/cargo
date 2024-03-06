import React from 'react'
import "./Landing.css"  ;
import truck from './truck.png'
import { Link } from 'react-router-dom';
function Landing() {
    const width='90%'  ;
    const height = '50%' ;
  return (

   <>
   <div className=''>
{/* nav bar anrdr logo  */}

   </div>
        <div className="flex flex-row -mb-72 ">
            <div className="truck  w-[100vw] h-[100vh]">
                        <img src={truck} width={width} height={height} />
            </div> 
            <div className="info -ml-40 p-10 basis-1/2">
                kabvannnfwc
                kjbdskjbsjkda
                askjcbkbsjkbjs
                sdkjbjkadjksjkc
                ksbjkcbkbkdbcb jkbksajbkj akjbbck ajkbckjnjksnjk
                kabvannnfwc
                kjbdskjbsjkda
                askjcbkbsjkbjs
                sdkjbjkadjksjkc
                ksbjkcbkbkdbcb jkbksajbkj akjbbck ajkbckjnjksnjk
                kabvannnfwc
                kjbdskjbsjkda
                askjcbkbsjkbjs
                sdkjbjkadjksjkc
                ksbjkcbkbkdbcb jkbksajbkj akjbbck ajkbckjnjksnjk
                kabvannnfwc
                kjbdskjbsjkda
                askjcbkbsjkbjs
                sdkjbjkadjksjkc
                ksbjkcbkbkdbcb jkbksajbkj akjbbck ajkbckjnjksnjk
                kabvannnfwc
                kjbdskjbsjkda
                askjcbkbsjkbjs
                sdkjbjkadjksjkc
                ksbjkcbkbkdbcb jkbksajbkj akjbbck ajkbckjnjksnjk
            </div>

        </div>
        <div className="flex flex-col justify-center w-[60vw] ml-[20vw] rounded-2xl mb-10 items-center bg-yellow-600 p-10">
            <center className='block'>
                <h1 className='block font-mono font-extrabold text-5xl'>Login</h1>
            </center>
                <label className='mt-10  -ml-[67%] mb-4' >Email</label>
                <input typeof='field' className='w-[40vw] bg-slate-200 block h-[5vh] rounded-3xl mb-2' />
                
                <label className='mt-2 -ml-[65%] mb-3' >Password</label>
                <input typeof='password' className='w-[40vw] bg-slate-200 block h-[5vh] rounded-3xl mb-20' />
                <button  className='w-[12vw] block h-[5vh] -mt-6 bg-slate-300 rounded-3xl mb-5' >Submit</button>
                <div className=''>
                    <Link href='/register'>Haven't Registered Yet ?Register</Link>
                </div>
        </div>
   </>
  )
}

export default Landing ;