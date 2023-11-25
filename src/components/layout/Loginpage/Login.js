import React, { useState} from 'react'
import './Login.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const API = "https://gamil-clone-backend.onrender.com/U1/login";


function Login () {
  const Navigate =useNavigate()

  const initialFormData = {
    email: '',
    password: ''
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

      if (response.data.message === 'User logged-in successfully') {
        setLoginMessage('User logged-in successfully');
        // setIsLoggedIn(true);
        Navigate('/Inbox');
      } else {
        console.log(response.data.message)
        setLoginMessage('Invalid Email or password');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      setLoginMessage('User not found. Please register first.');
    }
  };

  const pass =async()=>{
    try {
      Navigate('/ResetPass');
    } catch (error) {
      alert("Failed to fetch the page. Check Your Internet Connection.")
    }
  }
  return (
    <div className='Login_Container'>
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
  </div>
  <div className='Sign_btn'>
    <button type="submit" class="btn btn-primary">Sign in</button>
  </div>
  <div class="forgot" onClick={()=>pass()}>Forgot Password?</div>
  </form>
  {loginMessage && (
        <div
          style={{ color: loginMessage === 'Login successful' ? 'green' : 'red' }}
        >
          {loginMessage}
        </div>
  )}
  </div>
  )
}

export default Login