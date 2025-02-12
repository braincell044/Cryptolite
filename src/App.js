import React from 'react'
import Header from './Header'
import Combine from './Combine'

import ContactUs from './ContactUs'
import About from './About'
import Investment from './Investment'
import { Route, Routes } from 'react-router-dom';
import Referrals from './Referral'


import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'


const App = () => {
  return (
    <div className='app'>
   
<Header/>


<Routes>
      <Route path='/' element={<Combine/>}/>
      <Route path='/ContactUs' element={<ContactUs/>}/>
      <Route path='/Investment' element={<Investment/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Combine' element={<Combine/>}/>
      <Route path='/Referrals' element={<Referrals/>}/>

    </Routes>
 
    </div>
  )
}

export default App