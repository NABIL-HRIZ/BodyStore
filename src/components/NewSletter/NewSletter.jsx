import React from 'react'
import { useRef, useState } from 'react';
import './newSletter.css'
import { FaFacebookF } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import emailjs from '@emailjs/browser';
const NewSletter = () => {
  const form = useRef();
  const [message, setMessage] = useState('')
  const [messageColor, setMssageColor] = useState('')

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_5w0y8wm', 'template_sly8bh7', form.current, {
        publicKey: 'V-yQ-UZiZ01T_eB9d',
      })
      .then(
        () => {
          form.current.reset()
          setMessage('Your Email Sended')
          setMssageColor('green')

        },
        (error) => {
          setMssageColor('FAILED...', error.text);
          setMssageColor('red')
        },
      );
  };
  return (
    <div className='newSletter'>
      <span>NewSletter</span>
      <span>Sign Up For Latest updates and offers </span>
      <form ref={form} onSubmit={sendEmail} className='form'>
        <input type="email" name="user_email" placeholder='Email Adress' required />
        <button>Subscribe</button>
      </form>
      <div className='social_media'>
        <span><FaFacebookF /></span>
        <span><RiInstagramFill /></span>
        <span><FaTwitter /></span>
      </div>
      <div style={{ fontSize: "20px", fontWeight: 'bold', color: messageColor }}>{message}</div>


    </div>
  )
}

export default NewSletter
