import React from 'react'
import '../components/agency.css'
import bell from '../../src/bell.jpg'
import icon from '../../src/icon.png'
const Agency = () => {
  return (
    <>
    <hr></hr>
    <div className='container'>
      <div className='row'>
        <div className='col-lg-2'>
    <div className='navbar'>
        <div className='bell'>
        <img src={bell} alt='bell'></img>
        </div>
        <div className='hello'>
        <img src={icon} alt='icon'></img>
        <p className='p-2'>Hello,Admin</p>
        </div>
    </div>
    </div>
    <div className='col-lg-10'>
    <h1>Welcome Admin</h1>
    <p>Dashboard</p>
    <div className='cards mt-5'>
      <div className='box-1 m-2'>
      <p>0</p>
      <p>Total Host Count</p>
      </div>
      <div className='box-1 m-2'>
      <p>0</p>
      <p>Total Host Count</p>
      </div>
      <div className='box-1 m-2'>
      <p>0</p>
      <p>Total Host Count</p>
      </div>
    </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default Agency