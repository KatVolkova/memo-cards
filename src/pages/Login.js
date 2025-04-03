import React, { useState } from 'react';
import axios from 'axios';
import styles from '../styles/AuthForm.module.css';

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
    <div className={`container mt-4 ${styles.formContainer}`}>
      <h2 className={styles.formTitle}>Login Form</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.formInput}>
          <input
            className="form-control"
            name="username"
            placeholder="Username"
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formInput}>
          <input
            className="form-control"
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className={`btn btn-warning ${styles.formButton}`}>Submit</button>
      </form>
      {message && <div className={`alert alert-info ${styles.alertBox}`}>{message}</div>}
    </div>
  );
};

export default Login;

