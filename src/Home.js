import React from 'react'
import './App.css'
import Spin from './assest/image/spin.jpg'
import 'boxicons/css/boxicons.min.css';
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <section  id='home'>
    <div className='home' id='Home'>

        <div className='container text-center'>
            <div className='row'>
            <div className='col'>
            <div className="col col-12 col-sm-12 col-md">
            <div className="spin1">
<img src={Spin} alt="" className="spin" id="glow" width="250px"/>
</div>
</div>

            </div>
            <div className='col'>

            <div className="col col-12 col-sm-12 col-md short">
<h1 className="crypto">Cryptolitetrade</h1>
<h2 className='invest'>Advanced Assest Management.</h2>
<p className='invest'>use our investment plan and get up to 12% rerturn in 24 hours</p>
<p className='invest-2' >Cancel your deposit at any time</p>
      <Link to="/Signup"><button className='btn reg link-1 mx-1'>Regester an accout</button></Link>
      <Link to="/Login"><button className='btn sign-2 link-1'>sign in</button></Link>
</div>

            </div>

            </div>
      
        </div>

    </div>
    </section>
  )
}

export default Home