import { useState } from "react";
import axios from "axios";


import "./App.css";


export default function Auth() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleToggle = () => {
    setIsLogin(!isLogin);
    setForm({ name: "", email: "", password: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = isLogin ? "/api/auth" : "/api/users";

    // Validate form fields
    if (isLogin && (!form.email || !form.password)) {
      alert("Email and password are required!");
      return;
    }

    try {
      setLoading(true);
      const { data } = await axios.post(`https://cryptoapi-hazel.vercel.app${endpoint}`, form);
      localStorage.setItem("token", data.token);
      navigate("/dashboard");
    } catch (error) {
      console.error(error.response?.data || "An error occurred");
      alert(error.response?.data?.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
 
      <div className="min-h-screen flex items-center justify-center text-center bg-white">
        <form onSubmit={handleSubmit} className="p-8 bg-white rounded-lg">
          <h2 className="text-2xl mb-4 text-center">{isLogin ? "Login" : "Sign Up"}</h2>
          {!isLogin && (
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              className="block w-full p-2 border rounded mb-2"
              required
            />
          )}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="block w-full p-2 border rounded mb-2"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="block w-full p-2 border rounded mb-2"
            required
          />
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded"
            disabled={loading}
          >
            {loading ? "Loading..." : isLogin ? "Login" : "Sign Up"}
          </button>
          <p className="mt-4 text-center">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <span className="text-blue-500 cursor-pointer" onClick={handleToggle}>
              {isLogin ? "Sign Up" : "Login"}
            </span>
          </p>
        </form>
      </div>
    
    </div>
  );
}
