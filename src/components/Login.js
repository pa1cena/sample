import React from 'react'
import '../components/login.css'
import logo from '../../src/logoML.png'
import dial from '../../src/dial.png'
import black from '../../src/blackbell.png'
const Login = () => {
  return (
    <>
         <div className='navbar mt-3 mx-5'>
             <div className='first-1'>
                 <img src={logo} alt='logo'></img>
                 <p>MiloLive</p>
             </div>
             <div className='second-1'>
             <img src={dial} alt='dial'></img>
             <p className='text-info'>+1 999 999 999</p>
             <img src={black} alt='bell'></img>
             <p className='butt-1'>Eng</p>
             </div>
         </div>
        <div className='container'>
            <div className='contain-1'>
            <div className='row mt-5'>
                <div className='col-lg-5 col-md-8 col-sm-12'>
                <h1 className='text-info text-center mb-3'>Agency Login</h1>
                <form className='px-4'>
                    <div className='form mb-3 mt-2'>
                        <label className='mb-2'>Email:</label>
                        <input type='email' placeholder='Email' className='form-control'></input>
                    </div>
                    <div className='form'>
                    <label className='mb-2'>Password:</label>
                        <input type='password' placeholder='Password' className='form-control'></input>
                    </div>
                    <div className='mt-3 mb-3'>
                    <a href='#' className='text-info'>Forgot Password?</a><br></br>
                    </div>
                    <input type='radio'></input>
                    <label>By signing in, you agree to our <a href='#' className='text-info'> terms and conditions</a> </label>
                    <br></br>
                    <div className='btu-1'>
                    <button className='btn1 mt-2 mb-2'>Submit</button>
                    </div>
                </form>
                </div>
            </div>
        </div>
        </div>
    </>
  )
}

export default Login