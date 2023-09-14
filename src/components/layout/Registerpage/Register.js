import React, { useState } from 'react'
import './Register.css';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

// import { userRegister } from '../../Axios/useraxios';
const API = "http://localhost:8000/U1/register";

function Register () {

  const Navigate = useNavigate();

  const initialFormData = {
    name: '',
    email: '',
    password: '',
    mobileNumber: '',
  };

  const [formData, setFormData] = useState(initialFormData);

  const [registrationStatus, setRegistrationStatus] = useState({
    message: '',
    isError: false,
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${API}`, formData);
      setRegistrationStatus({ message: response.data.message, isError: false });

      // Clear the form data after successful registration
      setFormData(initialFormData);

      setTimeout(() => {
        Navigate('/login');
      }, 1000);
    } catch (error) {
      console.error('Error registering:', error);
      setRegistrationStatus({ message: 'Registration failed', isError: true });
    }
  };

  return (
  <div className='Register_Container'>
  <div class="form-row">
  <form onSubmit={handleSubmit}>
  <div class="form-group col-md-6">
  <label htmlFor="name">name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
  </div>
  <div class="form-group col-md-6">
  <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
  </div>
  <div class="form-group col-md-6">
  <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
  </div>
  <div class="form-group col-md-6">
  <label htmlFor="mobileNumber">Mobile Number</label>
          <input
            type="text"
            className="form-control"
            id="mobileNumber"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleInputChange}
          />
  </div>
  <br></br>
  <button type="submit" class="btn btn-primary">Register</button>
  </form>
  {registrationStatus.message && (
        <div
          style={{ color: registrationStatus.isError ? 'red' : 'green' }}
        >
          {registrationStatus.message}
        </div>
      )}
  </div>
    </div>
  )
}

export default Register;