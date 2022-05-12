import React from 'react'
import '../components/host.css'
import bell from '../../src/bell.jpg'
import icon from '../../src/icon.png'
import logo from '../../src/logoML.png'
import { MdHome } from "react-icons/md";
import { HiUsers } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import { Link } from 'react-router-dom'
import {SiChakraui} from "react-icons/si";
import '../components/agency.css'
const Host = () => {
  return (
    <>
    <div className='row'>
        <div className='col-2'>
        <div className='wrap'>
    <ul>
      <li><img src={logo} alt='logo'></img>MiloLive
        <ul>
        <li><MdHome/><Link to='/agency'>DashBoard</Link></li>
          <li> <HiUsers/><Link to='/host'>Host User</Link></li>
          <li><CgProfile/><Link to='/profile'>Profile</Link></li>
        </ul>
      </li>
    </ul>
    </div>
        </div>
        <div className='col-lg-10'>
        <div className='container1'>
    <div className='navbar mt-2'>
        <div className='bell'>
        <img src={bell} alt='bell'></img>
        </div>
        <div className='hello'>
        <img src={icon} alt='icon'></img>
        <p className='p-2'>Hello,Admin</p>
        </div>
    </div>
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

export default Host