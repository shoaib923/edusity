import React, { useState } from 'react'
import "./Contact.css"
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {
    const [result,setResult]=useState("");

     const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "e0f23ae2-681f-4ff9-aef0-28c6562eae40");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
    return (
        <div className='contact'>
            <div className='contact-col'>
                <h3>Send us a message <img src={msg_icon} alt="" /></h3>
                <p>We're here to support your academic journey. Whether you have questions about admissions, programs, or campus life, we’re happy to help. Our dedicated team is ready to assist you with any inquiries. Simply fill out the form below, and we'll respond promptly.</p>
                <ul> <li> <img src={mail_icon} alt="" />
                    Contact@uni.com
                </li>
                    <li><img src={phone_icon} alt="" />
                        +923115232432
                    </li>
                    <li><img src={location_icon} alt="" />
                        I-9 Islamabad <br />Pakistan
                    </li>
                </ul>
            </div>
            <div className='contact-col'>
                <form onSubmit={onSubmit}>
                    <label >Your Name</label>
                    <input type="text" name='name' placeholder='Enter your name' required/>
                     <label> Phone Number</label>
                    <input type="tel" name='phone' placeholder='Enter your mobile number' required/>
                     <label >Write your messages here</label>
                    <textarea name='message' rows="6" placeholder='Enter your message' required>
                    </textarea>
                    <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /></button>

                </form>
                <span>{result}</span>
            </div>


        </div>
    )
}

export default Contact
