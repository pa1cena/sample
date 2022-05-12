import React from 'react'
import '../components/host.css'
import bell from '../../src/bell.jpg'
import icon from '../../src/icon.png'
import logo from '../../src/logoML.png'
import { MdHome } from "react-icons/md";
import { HiUsers } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import { Link } from 'react-router-dom'
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
        <p>Users</p>
        <select>
            <option value='Host-type'>Host-Type</option>
            <option value='Host-type2'>Host-Type2</option>
            <option value='Host-type3'>Host-Type3</option>
            <option value='Host-type4'>Host-Type4</option>
        </select>
        <table className='table-content'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Bio</th>
                    <th>Coin</th>
                    <th>Country</th>
                    <th>Redeem Amount</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className='tdh'>Mark</td>
                    <td>Mark</td>
                    <td>100</td>
                    <td>USA</td>
                    <td>1000</td>
                </tr>
                <tr>
                    <td>Mark</td>
                    <td>Mark</td>
                    <td>100</td>
                    <td>USA</td>
                    <td>1000</td>
                </tr>
                <tr>
                    <td>Mark</td>
                    <td>Mark</td>
                    <td>100</td>
                    <td>USA</td>
                    <td>1000</td>
                </tr>
                <tr>
                    <td>Mark</td>
                    <td>Mark</td>
                    <td>100</td>
                    <td>USA</td>
                    <td>1000</td>
                </tr>
            </tbody>
        </table>
    </div>
    </div>
    </div>
    
    </>
  )
}

export default Host