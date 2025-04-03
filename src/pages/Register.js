import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password1: '',
    password2: '',
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        `${process.env.REACT_APP_API_URL}auth/registration/`,
        formData
      );
      setMessage('Registration successful!');
    } catch (err) {
      setMessage('Error occurred during registration.');
    }
  };

  return (
    <div className="container mt-4">
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input className="form-control" name="username" placeholder="Username" onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <input className="form-control" name="email" placeholder="Email" type="email" onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <input className="form-control" name="password1" placeholder="Password" type="password" onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <input className="form-control" name="password2" placeholder="Confirm Password" type="password" onChange={handleChange} required />
        </div>
        <button type="submit" className="btn btn-warning">Submit</button>
      </form>
      {message && <div className="mt-3 alert alert-info">{message}</div>}
    </div>
  );
};

export default Register;
