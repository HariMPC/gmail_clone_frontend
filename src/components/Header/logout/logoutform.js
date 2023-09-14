import React from 'react';
import './logoutform.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const API = "http://localhost:8000/U1/logout";
function Logoutform (props) {
    const Navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
          const response = await axios.get(`${API}`);
    
          if (response.data.message === 'User logged-out successfully.') {
            Navigate('/');
          }
        } catch (error) {
          console.log('Internal Server Error');
        }
      };
    
  return (props.trigger) ? (
    <div className='Logout_container'>
    <form  onSubmit={handleSubmit}>
        <div class="form-row">
        <div className='Sign_btn'>
        <button type="submit" class="btn btn-primary">LOG OUT</button>
    </div>
    </div>
    </form>
    </div>
  ):("");
}

export default Logoutform