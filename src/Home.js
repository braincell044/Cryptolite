import React from 'react'
import './App.css'
import Spin from './assest/image/spin.jpg'
import 'boxicons/css/boxicons.min.css';

const Home = () => {
  return (
    <div className='home' id='Home'>
        <div className='container text-center'>
            <div className='row'>
            <div className='col'>
            <div class="col col-12 col-sm-12 col-md">
            <div class="spin1">
<img src={Spin} alt="" class="spin" id="glow" width="250px"/>
</div>
</div>

            </div>
            <div className='col'>

            <div class="col col-12 col-sm-12 col-md short">
<h1 class="crypto">Cryptolitetrade</h1>
<h2 className='invest'>Advanced Assest Management.</h2>
<p className='invest'>use our investment plan and get up to 12% rerturn in 24 hours</p>
<p className='invest-2' >Cancel your deposit at any time</p>
<button class="btn reg  mx-1">Register an Account</button>
<button class="btn sign-2">Sign in</button>
</div>

            </div>

            </div>
      
        </div>

    </div>
  )
}

export default Home