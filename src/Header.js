import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'boxicons/css/boxicons.min.css';
import './App.css'
import  {useState} from 'react'

const Header = () => {
    const [menu, setMenu] = useState(false)
    const handelMenu = () => {
        setMenu(!menu)
    }
  return (
    <div className='navbar-content fixed-top    '>

  <div className="container text-center fixed-top">
    <div className="row flex-toggle">
      <div className="col">
        <div className='col text-start d-flex displayhide'>
          <div className="py-3 px-5 displayhide">
            <h1 className='head-1'>cryptolite<span className='intro'>trade</span></h1>
          </div>
          <Link to="/Combine" className='nav-link link-1 p-3'>HOME</Link>
          <Link to="/About" className='nav-link link-1 p-3'>ABOUT US</Link>
          <Link to="/Investment" className='nav-link link-1 p-3'>INVESTMENT PLANS</Link>
          <Link to="/Referral" className='nav-link link-1 p-3'>REFERRALS</Link>
          <Link to="/ContactUs" className='nav-link link-1 p-3'>CONTACT</Link>
        </div>
      </div>
      <div className="col py-3  displayhide">
      <button className='btn reg link-1 mx-1'>Regester an accout</button>
      <button className='btn sign-2 link-1'>sign in</button>
      </div>
    </div>
  </div>



<div className='w-100 d-flex '>

<div className="col py-3  displaynone">
        <h1 className='head-1'>cryptolite<span className='intro'>trade</span></h1>
   
    </div>

  <div className='px-3 py-4'>
<i className='bx bx-menu fs-1 displaynone flex-h' onClick={handelMenu}></i>
</div>   



</div>

{menu &&
  <div className='col text-start displaynone '>
                            <Link to="/Combine" className='nav-link link-1 p-3'>HOME</Link>
          <Link to="/About" className='nav-link link-1 p-3'>ABOUT US</Link>
          <Link to="/Investment" className='nav-link link-1 p-3'>INVESTMENT PLANS</Link>
          <Link to="/Referral" className='nav-link link-1 p-3'>REFERRALS</Link>
          <Link to="/ContactUs" className='nav-link link-1 p-3'>CONTACT</Link>
                         
                       <div className='py-3'>
                       <button className='btn reg link-1 mx-1'>Regester an accout</button>
                       <button className='btn sign-2 link-1'>sign in</button>
                       </div>
                 
                           </div>}
    

    </div>
  )
}

export default Header