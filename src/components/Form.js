import './Form.css';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form = () => {

  const form = useRef();
  const notify = () => toast("Message Send!");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_aq7w0ad', 'template_9i4hqdg', form.current, '1j6Z7wWMBxKK7Xnue')
      .then((result) => {
        console.log(result.text);
        notify();
        window.location.reload();
      }, (error) => {
        console.log(error.text);
      });
  };
  return (
    <div className="form">
      <ToastContainer />
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea rows="4" placeholder="Type your message here..." name="message"></textarea>
        <input className="btn" type="submit" value="Send Message" />
      </form>
    </div>
  );
}

export default Form