import React, { useState } from 'react'
import './Resetpass.css';
import axios from 'axios';

const API = "https://gamil-clone-backend.onrender.com/U1/forgot-password";
function Resetpass () {

  const initialFormData = {
    email: ''
  };
  const [formData, setFormData] = useState(initialFormData);
  const [loginMessage, setLoginMessage] = useState('');

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post(`${API}`, formData);

      if (response.data.message === 'Reset password link has been sent to your email.') {
        setLoginMessage('Reset password link has been sent to your email.');
        // setIsLoggedIn(true);
      } else {
        console.log(response.data.message)
        setLoginMessage('Invalid Email');
      }
    } catch (error) {
      console.error('Error while sending email: Internal Server Error:  ', error);
      setLoginMessage('User not found. Please register first.');
    }
  };
  return (
    <div className='Resetpass_Container'>
      <form onSubmit={handleSubmit}>
    <div class="form-row">
  <div class="form-group col-md-6">
  <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}/>
  </div>
    </div>
  <div className='Sign_btn'>
    <button type="submit" class="btn btn-primary">Send Reset Link</button>
  </div>
  </form>
  {loginMessage && (
        <div
          style={{ color: loginMessage === 'Reset password link has been sent to your email.' ? 'green' : 'red' }}
        >
          {loginMessage}
        </div>
  )}
    </div>
  )
}

export default Resetpass