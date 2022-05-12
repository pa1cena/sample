import React from 'react'
import '../components/host.css'
import bell from '../../src/bell.jpg'
import icon from '../../src/icon.png'
import logo from '../../src/logoML.png'
import { MdHome } from "react-icons/md";
import { HiUsers } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import { Link } from 'react-router-dom'
import '../components/agency.css'
import { FiUsers } from "react-icons/fi";
import { VscBell } from "react-icons/vsc";
const Host = () => {
  return (
    <>
    <div className='row'>
        <div className='col-2'>
        <div className='wrap'>
    <ul>
      <li><img src={logo} alt='logo'></img>MiloLive
        <ul>
        <li><MdHome size={25}/><Link to='/agency'>DashBoard</Link></li>
          <li> <HiUsers size={25}/><Link to='/host'>Host User</Link></li>
          <li><CgProfile size={25}/><Link to='/profile'>My Profile</Link></li>
        </ul>
      </li>
    </ul>
    </div>
        </div>
        <div className='col-lg-10'>
        <div className='container1'>
    <div className='navbar mt-2'>
        <div className='bell'>
        <VscBell size={40}/>
        </div>
        <div className='hello'>
          <div className='profile'>
        <CgProfile size={30}/>
        </div>
        <p className='p-2'>Hello,Admin</p>
        </div>
    </div>
    <h1>Welcome Admin</h1>
    <p>Dashboard</p>
    <div className='cards mt-5'>
      <div className='box-1 m-2'>
        <div>
      <p>0</p>
      <p>Total Host Count</p>
      </div>
      <div className='icon'>
      <FiUsers/>
      </div>
      </div>
      <div className='box-1 m-2'>
        <div>
      <p>0</p>
      <p>Total Host Count</p>
      </div>
      <div className='icon'>
      <FiUsers/>
      </div>
      </div>
      <div className='box-1 m-2'>
        <div>
      <p>0</p>
      <p>Total Host Count</p>
      </div>
      <div className='icon'>
      <FiUsers/>
      </div>
      </div>
    </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default Host