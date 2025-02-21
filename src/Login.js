import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
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
      const { data } = await axios.post("https://cryptoapi-hazel.vercel.app/api/auth", form);
      localStorage.setItem("token", data.token);
      navigate("/dashboard"); // Redirect after successful login
    } catch (error) {
      setErrorMessage(error.response?.data?.message || "Invalid login credentials");
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

          <p className="text-center">Login to your account</p>

          {/* Form */}
          <form onSubmit={handleSubmit}>
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
              {loading ? "Loading..." : "Sign In"}
            </button>
          </form>

          {/* Links */}
          <div className="text-center mt-3">
            <p>
              No account? <a href="/signup" className="text-info">Register here!</a>
            </p>
            <p>
              <a href="/forgot-password" className="text-light">Forgot Password?</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
