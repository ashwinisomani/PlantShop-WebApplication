import React, { useState } from "react";

import "../styles/Contact.css";

const Contact = () => {
  const [userInfo, setUserInfo] = useState({
    fullname: "",
    phone: "",
    email: "",
    message: ""
  });

  const submitForm = (event) => {
    event.preventDefault();
    alert(
      `Your information has been shared successfully. Name: ${userInfo.fullname}. Phone no ${userInfo.phone}. Email ID ${userInfo.email}`
    );
  };

  const formChange = (event) => {
    const {name, value} = event.target;
    setUserInfo((userInfos) => ({
      ...userInfos,
      [name]: value
    }));
  };

  return (
    <div className="contact-container">
      <div className="contact-heading">
        <h1>CONTACT US</h1>
      </div>
      <div className="contact-form">
        <form onSubmit={submitForm} onChange={formChange}>
          <label className="label" for="fullNameId">Full Name</label>
          <input className="input" type="text" placeholder="Enter name" id="fullNameId" name="fullname" value={userInfo.fullname} required></input>

          <label className="label" for="phoneNumberId">Phone Number</label>
          <input className="input" type="tel" placeholder="1234567890" id="phoneNumberId" name="phone" value={userInfo.phone} pattern="[0-9]{10}" required></input>

          <label className="label" for="emailId">Email</label>
          <input className="input" type="email" placeholder="Enter email" id="emailId" name="email" value={userInfo.email} required></input>

          <label className="label" for="messageId">Message</label>
          <textarea className="input" rows="6" placeholder="Enter message..." name="message" value={userInfo.message} required></textarea>

          <button className="form-button" type="submit">Submit message</button>
        </form>
      </div>
    </div>
  )
};

export default Contact;