import React from 'react'
import './Home.css';
import {useNavigate } from 'react-router-dom';

const HomePage = () => {

  const Navigate = useNavigate();

  const Loginpage=async()=>{
    try {
      Navigate('/Login')
    } catch (error) {
      alert("Failed to fetch the page. Check Your Internet Connection.")
    }
  }
  const onSubmit= async()=>{
    try {
      Navigate('/Register')
    } catch (error) {
      alert("Failed to fetch the page. Check Your Internet Connection.")
    }
  }

  return (
    <div className='Image_Container'>
        <div className="Image">
            <img src='https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_256px.png' alt="gmail.jpg"/>
        </div>
        <br></br>
        <div className='Buttons'>
          <button type="button" class="btn btn-primary btn-lg" onClick={()=>Loginpage()}>Sign In</button>
          <br></br>
          <button type="button" class="btn btn-secondary btn-lg" onClick={()=>onSubmit()}>Register</button>
        </div>
    </div>
  )
}

export default HomePage