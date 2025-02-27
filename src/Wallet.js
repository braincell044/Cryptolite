import { useState, useEffect, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaChartLine, FaWallet, FaUserCircle, FaCog, FaSignOutAlt } from "react-icons/fa";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


const InvestmentPage = () => {
    const [selectedPlan, setSelectedPlan] = useState(null);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const walletAddress = "17K8yXFer49JCRQAUV1iyB1q2QBFn73GM";
    const [amount, setAmount] = useState("");
    const [message, setMessage] = useState("");
    const [isAuthenticated, setIsAuthenticated] = useState(null);
    const [user, setUser] = useState(null);
    const [menu, setMenu] = useState(false);
    const navigate = useNavigate();
    const [dateTime, setDateTime] = useState(new Date());

    const investmentPlans = [
        { name: "Standard Plan", profit: "3% After 24 Hours", min: 50, max: 1499 },
        { name: "Premium Plan", profit: "5% After 24 Hours", min: 1500, max: 4999 },
        { name: "Golden Plan", profit: "7% After 36 Hours", min: 5000, max: 9999 },
        { name: "Pirates Plan", profit: "10% After 48 Hours", min: 10000, max: 500000 }
    ];

    

    const handlePlanSelection = (plan) => {
        setSelectedPlan(plan);
    };

    const handleDeposit = () => {
        if (amount >= selectedPlan.min && amount <= selectedPlan.max) {
            setShowConfirmation(true);
        } else {
            alert(`Amount must be between $${selectedPlan.min} and $${selectedPlan.max}`);
        }
    };

    const handleDepositNow = async () => {
      try {
          const token = localStorage.getItem("token");
          if (!token) {
              setMessage("User not authenticated. Please log in.");
              return;
          }

          const res = await axios.post("https://cryptoapi-1-c7wy.onrender.com/api/deposit/deposit", 
              { amount: Number(amount), plan: selectedPlan.name },
              { headers: { Authorization: `Bearer ${token}` } }
          );

          setMessage(res.data.message || "Deposit request sent successfully. Await admin approval.");
          setShowConfirmation(false);
      } catch (error) {
          setMessage(error.response?.data?.message || "Deposit request failed.");
      }
  };

  
    // Fetch user details function (wrapped in useCallback)
    const fetchUser = useCallback(async () => {
      const token = localStorage.getItem("token");
  
      if (!token) {
        navigate("/login");
        return;
      }
  
      try {
        const response = await axios.get("https://cryptoapi-1-c7wy.onrender.com/api/auth/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(response.data);
        setIsAuthenticated(true);
      } catch (error) {
        console.error("Error fetching user details", error);
        if (error.response && error.response.status === 401) {
          localStorage.removeItem("token");
          setIsAuthenticated(false);
          navigate("/login");
        }
      }
    }, [navigate]);
  
    // Authentication check & fetch user
    useEffect(() => {
      fetchUser();
    }, [fetchUser]);
  
    const handleLogout = () => {
      localStorage.removeItem("token");
      setIsAuthenticated(false);
      navigate("/login");
    };
  
    const handleMenu = () => setMenu(!menu);
      // Update date & time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  
    if (!isAuthenticated) {
      return <div>Redirecting to login...</div>;
    }
  
    if (!user) {
      return <div>Loading user data...</div>;
    }

    return (
        <div className='dashboard-wall '>
            
     

            
              <nav
          className={`sidebar p-3 position-fixed w-50 transition-menu ${
            menu ? "menu-open" : "menu-closed"
          }`}
        >
              <div className="d-flex w-100">
          <div className="text-start ">
          <p className="text-light">${user.balance || "0.00"}</p>
          <p className="mb-2 text-light">Account Balance</p>
          
          </div>

          </div>
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link to="/dashboard" className="nav-link text-light">
                <FaChartLine className="me-2" /> Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/wallet" className="nav-link text-light">
                <FaWallet className="me-2" /> Make a deposit
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/adminlogin" className="nav-link text-light">
                <FaUserCircle className="me-2" /> Profile
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/admindashboard" className="nav-link text-light">
                <FaCog className="me-2" /> Settings
              </Link>
            </li>
            <li className="nav-item mt-auto">
              <button className="btn btn-danger w-100" onClick={handleLogout}>
                <FaSignOutAlt className="me-2" /> Logout
              </button>
            </li>
          </ul>
        </nav>

  
      
        <div className="container  mt-1 text-white" style={{ maxWidth: '600px',  padding: '20px', borderRadius: '10px' }}>
            
            {!showConfirmation ? (
                <>
                    <div className="py-1  d-flex hidden justify-content-between align-items-center">
              <Link to="/" className="nav-link">
                <h1 className="head-1">
                  cryptolite<span className="intro">trade</span>
                </h1>
              </Link>

              <i className="bx bx-menu fs-1 text-light " onClick={handleMenu}></i>
            </div>
            <div className="text-light d-flex  pb-3">
            <h6>{dateTime.toLocaleDateString()}</h6>,
            <h6>{dateTime.toLocaleTimeString()}</h6>
          </div>
               <h4 className="text-center fw-bold py-4">Select Investment Plan</h4>
                
                    {investmentPlans.map((plan, index) => (
                        <div key={index} className="p-3 my-3 border rounded" style={{ cursor: 'pointer', backgroundColor: '#121212' }} onClick={() => handlePlanSelection(plan)}>
                            <h5>{plan.name}</h5>
                            <p>{plan.profit}</p>
                            <p>Min: ${plan.min} ↔ Max: ${plan.max}</p>
                        </div>
                    ))}
                    {selectedPlan && (
                        <div className="mt-3">
                            <h5>Selected Plan: {selectedPlan.name}</h5>
                            <label className="form-label">Enter Amount</label>
                            <input type="number" className="form-control" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder={`Min: $${selectedPlan.min}`} />
                            <button className="btn btn-primary mt-3" onClick={handleDeposit}>Make a Deposit</button>
                        </div>
                    )}
                </>
            ) : (
                <>
                    <h4 className="fw-bold">Make a Deposit</h4>
                    <p>Please send your payments to this wallet address:</p>
                    <div className="bg-dark text-white p-2 rounded text-break">
                        <strong>{walletAddress}</strong>
                    </div>
                    <p className="mt-2">Click the save button below after making payments</p>

                    <div className="mt-4 p-3 rounded" style={{ backgroundColor: '#121212' }}>
                        <h5 className="text-info">DEPOSIT CONFIRMATION</h5>
                        <table className="table text-white">
                            <tbody>
                                <tr><td><strong>Plan:</strong></td><td>{selectedPlan.name}</td></tr>
                                <tr><td><strong>Profit:</strong></td><td>{selectedPlan.profit}</td></tr>
                                <tr><td><strong>Principal Return:</strong></td><td>Yes</td></tr>
                                <tr><td><strong>Principal Withdraw:</strong></td><td>Available with 0.00% fee</td></tr>
                                <tr><td><strong>Credit Amount:</strong></td><td>${amount}</td></tr>
                                <tr><td><strong>Deposit Fee:</strong></td><td>0.00% + $0.00</td></tr>
                                <tr><td><strong>Debit Amount:</strong></td><td>${amount}</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="d-flex mt-3">
                    <button onClick={handleDepositNow} className="btn btn-info mx-2">Deposit</button>
                    <button className="btn btn-secondary" onClick={() => setShowConfirmation(false)}>Cancel</button>
                    
                    </div>
                    {message && <p className="text-success">{message}</p>}
                </>
            )}
      
        </div>
        </div>
    );
};

export default InvestmentPage;
