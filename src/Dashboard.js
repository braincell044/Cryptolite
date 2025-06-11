import { useState, useEffect, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaChartLine, FaWallet, FaUserCircle, FaCog, FaSignOutAlt } from "react-icons/fa";
import axios from "axios";
import CryptoWidget from "./CryptoWidget";




export default function Dashboard() {
  const [dateTime, setDateTime] = useState(new Date());
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [user, setUser] = useState(null);
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();

  // Update date & time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

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

  if (!isAuthenticated) {
    return <div>Loading user data...</div>;
  }

  if (!user) {
    return <div>Loading user data...</div>;
  }



  return (
    <div className="container-fluid dashboard  text-light min-vh-100 d-flex flex-column">
      <div className="row flex-grow-1">
        {/* Sidebar */}
        <nav
          className={`sidebar p-3 position-fixed w-50 transition-menu ${
            menu ? "menu-open" : "menu-closed"
          }`}
        >
              <div className="d-flex w-100">
          <div className="text-start ">
          <p className="">${user.balance || "0.00"}</p>
          <p className="mb-2">Account Balance</p>
          
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
              <Link to="/admin/dashboard" className="nav-link text-light">
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

        {/* Main Content */}
        <main className=" col-md-12  col-lg-12">
        <div className="py-3 px-1  d-flex hidden justify-content-between align-items-center">
              <Link to="/" className="nav-link">
                <h1 className="head-1 mx-1">
                  cryptolite<span className="intro">trade</span>
                </h1>
              </Link>
              <i className="bx bx-menu fs-1 text-light " onClick={handleMenu}></i>
            </div>
            <div className="text-light pb-4 px-1">
            <h6 className="">{dateTime.toLocaleDateString()}</h6>
            <h6 className="">{dateTime.toLocaleTimeString()}</h6>
          </div>

          {/* User Account Info */}
          <div className="row g-4 justify-content-center">
            <div className=" col-md-4 col-sm-6">
              <div className="card bg-dark text-light p-3">
                <h5>Account Balance</h5>
                <h3 className="text-success">${user.balance || "0.00"}</h3>
                <p>Name: <strong>{user.name}</strong></p>
                <p>Email: <strong>{user.email}</strong></p>
              </div>
            </div>

            <div className="col-6 col-md-3 col-sm-3">
              <div className="card bg-dark text-light p-3">
                <h5>Active Deposits</h5>
                <h3 className="text-info">$0.00</h3>
                <p>Last Withdrawal: $0.00</p>
                <p>Pending Deposits: $0.00</p>
                <p>Total Deposited: $0.00</p>
              </div>
            </div>

            <div className=" col-6 col-md-3 col-sm-3">
              <div className="card bg-dark text-light p-3">
                <h5>Earnings</h5>
                <h3 className="text-warning">$0.00</h3>
                <p>Last Withdrawal: $0.00</p>
                <p>Pending Withdrawal: $0.00</p>
                <p>Total Withdrawal: $0.00</p>
              </div>
            </div>
         

     <div className="col-12  col-md-10 col-sm-12  ">
      <CryptoWidget/>
    
     </div>
            {/* <div className="col-md-4 ">
              <div className="card bg-dark text-light p-3">
                <h5>Security / Login</h5>
                <p>2 Factor Authentication: May-13-2024</p>
                <p>Last Login: Aug-7-2024, 12:12 AM</p>
                <p>Operating System: Windows 10</p>
              </div>
            </div>  */}
            </div>

            
     
    

        </main>
      </div>
    </div>
  );
}
