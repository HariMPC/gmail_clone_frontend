import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import './Newpass.css';
const API = "https://gamil-clone-backend.onrender.com/U1/reset-password/:Token/:userId";
const Newpass = () => {
  const Navigate = useNavigate();

  const initialFormData = {
    userId: '',
    token: '',
    newPassword: ''
  };

  const [formData, setFormData] = useState(initialFormData);

  const [newpassword, setNewpassword] = useState('');

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${API}`, formData);
      if (response.data.message === 'Password has been reset successfully.') {
        setNewpassword('Password has been reset successfully.');
        // setIsLoggedIn(true);
        Navigate('/Login');
      } else {
        console.log(response.data.message)
        setNewpassword('Invalid token or userid');
      }
    } catch (error) {
      console.error('Error in reseting password', error);
      setNewpassword('Error in reseting password');
    }
  };

  return (
<div className='Newpass_Container'>
      <div class="form-row">
        <form onSubmit={handleSubmit}>
      <div class="form-group col-md-6">
      <label htmlFor="password">User_Id</label>
          <input
            type="userId"
            className="form-control"
            id="userId"
            name="userId"
            value={formData.userId}
            onChange={handleInputChange}
          />
    </div>
    <div class="form-group col-md-6">
      <label htmlFor="password">Token</label>
          <input
            type="token"
            className="form-control"
            id="token"
            name="token"
            value={formData.token}
            onChange={handleInputChange}
          />
    </div>
    <div class="form-group col-md-6">
    <label htmlFor="password">New Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="newPassword"
            value={formData.newPassword}
            onChange={handleInputChange}
          />
    </div>
  <div className='Sign_btn'>
    <button type="submit" class="btn btn-primary">Save</button>
  </div>
  </form>
  {newpassword && (
        <div
          style={{ color: newpassword === 'Password has been reset successfully.' ? 'green' : 'red' }}
        >
          {newpassword}
        </div>
  )}
       </div>
    </div>
  )
}

export default Newpass