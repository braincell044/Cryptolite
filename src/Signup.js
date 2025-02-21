import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';



export default function Signup() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { data } = await axios.post("https://cryptoapi-hazel.vercel.app/api/user", form);
      localStorage.setItem("token", data.token);
      navigate("/dashboard"); // Redirect after successful signup
    } catch (error) {
      setErrorMessage(error.response?.data?.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-dark">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content bg-dark text-light p-4 rounded">
          <button
            type="button"
            className="btn-close btn-close-white position-absolute top-0 end-0 m-3"
          ></button>

          {/* Logo */}
          <div className="text-center mb-3">
            <h3 className="fw-bold">
              Cryptolite<span className="intro">trade</span>
            </h3>
          </div>

          <p className="text-center">Create an account</p>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                className="form-control bg-secondary text-light"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                className="form-control bg-secondary text-light"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                className="form-control bg-secondary text-light"
                required
              />
            </div>

            {errorMessage && <p className="text-danger text-center">{errorMessage}</p>}

            <button type="submit" className="btn intro w-100 text-white fw-bold" disabled={loading}>
              {loading ? "Loading..." : "Sign Up"}
            </button>
          </form>

          {/* Links */}
          <div className="text-center mt-3">
            <p>
              Already have an account? <a href="/login" className="text-info">Login</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
