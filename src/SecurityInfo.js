import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SecurityInfo = () => {
    const [userData, setUserData] = useState({
        signupDate: '',
        lastLogin: '',
        ipAddress: '',
        operatingSystem: '',
        browser: ''
    });

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const token = localStorage.getItem('token');
                const { data } = await axios.get('https://cryptoapi-hkw0.onrender.com/api/user/profile', {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setUserData(data);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };
        fetchUserData();
    }, []);

    return (
        <div className="col-md-3">
            <div className="card bg-dark text-light p-3">
                <h5>Security / Login</h5>
                <p>Signup Date: {userData.signupDate ? new Date(userData.signupDate).toLocaleDateString() : 'N/A'}</p>
<p>Last Login: {userData.lastLogin ? new Date(userData.lastLogin).toLocaleString() : 'N/A'}</p>
<p>IP Address: {userData.ipAddress || 'N/A'}</p>
<p>Operating System: {userData.operatingSystem || 'N/A'}</p>
<p>Browser: {userData.browser || 'N/A'}</p>

            </div>
        </div>
    );
};

export default SecurityInfo;
