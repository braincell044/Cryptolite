import React from 'react'
import Home from './Home'
import About from './About'
import Investment from './Investment'
import CryptoWidget from './CryptoWidget'
import Referral from './Referral';
import HowToUse from './HowToUse'
import FAQ from './FAQ'
import ContactUs from './ContactUs'
import Footer from './Footer'

const Combine = () => {
  return (
    <div className=''>
<Home/>
<About/>
<Investment/>
<CryptoWidget/>

<Referral />
<HowToUse/>
<FAQ/>
<ContactUs/>
<Footer/>

    </div>
  )
}

export default Combine