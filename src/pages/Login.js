import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        `${process.env.REACT_APP_API_URL}auth/login/`,
        formData,
        { withCredentials: true }
      );
      setMessage('Login successful!');
    } catch (err) {
      setMessage('Login failed. Please check your credentials.');
    }
  };

  return (
    <div className="container mt-4">
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            className="form-control"
            name="username"
            placeholder="Username"
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <input
            className="form-control"
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-warning">Submit</button>
      </form>
      {message && <div className="mt-3 alert alert-info">{message}</div>}
    </div>
  );
};

export default Login;

