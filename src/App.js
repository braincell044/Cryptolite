import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from './Header';
import Combine from './Combine';
import ContactUs from './ContactUs';
import About from './About';
import Investment from './Investment';
import Referrals from './Referral';
import Login from './Login';
import Signup from './Signup';
import Dashboard from './Dashboard';
import Footer from './Footer';
import Home from './Home'
import Wallet from './Wallet'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useEffect } from "react";
import AdminDashboard from './AdminDashboard';
import AdminLogin from './LoginAdmin';
import JivoChat from './JoviChat';
const App = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://code.jivosite.com/widget/6GI5lMt7X4";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const location = useLocation();  // Get current route

  // Define paths where Header and Footer should be hidden
  const hideHeaderFooter = ['/dashboard', '/login', '/signup', '/wallet',  '/admin/dashboard', '/adminlogin' ].includes(location.pathname);

  return (
    <div className='app'>
      {/* Conditionally render Header */}
      {!hideHeaderFooter && <Header />}

      <Routes>
        <Route path='/' element={<Combine />} />
        <Route path='/ContactUs' element={<ContactUs />} />
        <Route path='/Investment' element={<Investment />} />
        <Route path='/About' element={<About />} />
        <Route path='/Home' element={<Home/>} />
        <Route path='/Referral' element={<Referrals />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='*' element={<h1>Page not found</h1>} />
        <Route path='/admin/dashboard' element={<AdminDashboard/>}/>
        <Route path='/adminlogin' element={<AdminLogin/>}/>
        <Route path='/wallet' element={<Wallet/>}/>
      </Routes>
<JivoChat/>
      {/* Conditionally render Footer */}
      {!hideHeaderFooter && <Footer />}
    </div>
  );
};

export default App;






