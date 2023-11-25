import React from 'react';
import './SendEmail.css';
import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';
import axios from 'axios';

const API = "https://gamil-clone-backend.onrender.com/gmail/sendmail";
function SendEmail(props) { 

  const initialFormData = {
    toEmail:'',
   subject:'',
   fromEmail:'',
   text:''
  };
  const [formData, setFormData] = useState(initialFormData);
  const [sendmail, setSendmail] = useState('');

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post(`${API}`, formData);

      if (response.data.message === 'email is sent.') {
        setSendmail('email is sent.');
        // setIsLoggedIn(true);
      } else {
        setSendmail(' ');
      }
    } catch (error) {
      console.error('Error while sending email: Internal Server Error:  ', error);
      setSendmail('Error while sending email: Internal Server Error');
    }
  };

  return (props.trigger) ? (
    <div className='Send_email_container'>
      <h1 className='Heading'>New Message <CloseIcon onClick={()=>props.setTrigger(false)}/></h1>
      <div class="container py-4">

  {/* <!-- Bootstrap 5 starter form --> */}
  <form id="contactForm" onSubmit={handleSubmit}>

    {/* <!-- Email address input --> */}
    <div class="mb-3">
    <label htmlFor="toEmail">To_Email</label>
          <input
            type="toEmail"
            className="form-control"
            id="toEmail"
            name="toEmail"
            value={formData.toEmail}
            onChange={handleInputChange}/>
    </div>
    
    {/* <!-- Name input --> */}
    <div class="mb-3">
    <label htmlFor="subject">Subject</label>
          <input
            type="subject"
            className="form-control"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}/>
    </div>

    {/* <!-- Email address input --> */}
    <div class="mb-3">
    <label htmlFor="fromEmail">From_Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="fromEmail"
            value={formData.fromEmail}
            onChange={handleInputChange}/>
    </div>

    {/* <!-- Message input --> */}
    <div class="mb-3">
      <label class="form-label" for="text">Text</label>
      <textarea type="text"
            className="form-control"
            id="text"
            name="text"
            value={formData.text}
            onChange={handleInputChange}>
      </textarea>
    </div>

    {/* <!-- Form submit button --> */}
    <div class="d-grid">
      <button class="btn btn-primary btn-lg" type="submit"> SEND<ExpandMoreIcon/></button>
    </div>
  </form>
  {sendmail && (
        <div
          style={{ color: sendmail === 'email is sent.' ? 'green' : 'red' }}>
          {sendmail}
        </div>
  )}
</div>
    </div>
  ) : ("");
}

export default SendEmail