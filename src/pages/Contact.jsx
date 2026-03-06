// 

import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';
import "./Contact.css";

const Contact = () => {
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [capVal, setCapVal] = useState(null);
  const validate = (data) => {
    const errs = {};
    if (!data.get("name")?.trim()) errs.name = "Name is required.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.get("email"))) errs.email = "Enter a valid email.";
    if (!data.get("number")?.trim()) errs.number = "Phone number is required.";
    if (data.get("message")?.trim().length < 10) errs.message = "Message must be at least 10 characters.";
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const errs = validate(data);

    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});
    setStatus("loading");

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      e.target.reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  const siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

  return (
    <section className='contact-section flex flex-col justify-center items-center align w-full h-fit'>
      <div className="contact-wrapper h-fit w-full flex flex-col justify-center items-center gap-10">
        <h1 className='text-3xl text-lime-600'>Contact Us</h1>
        <p className='text-2xl'>Get in touch with us today!</p>

        <div className="contact-form-wrapper w-full md:w-[50%] h-fit flex justify-center items-center">
          <form onSubmit={handleSubmit} className='flex flex-col justify-center items-start gap-5 w-full h-full'>

            {/* Hidden title for EmailJS subject */}
            <input type="hidden" name="title" value="New Message" />

            <label htmlFor="name" className='text-lime-600'>Your Name</label>
            <input className='border-2 input-form' name='name' type="text" placeholder='Your Name' />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

            <label htmlFor="email" className='text-lime-600'>Your Email</label>
            <input className='border-2 input-form' name='email' type="email" placeholder='Your Email' />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

            <label htmlFor="number" className='text-lime-600'>Your Phone Number</label>
            <input className='border-2 input-form' name='number' type="tel" placeholder='Your Phone Number' />
            {errors.number && <p className="text-red-500 text-sm">{errors.number}</p>}

            <label htmlFor="message" className='text-lime-600'>Your Message</label>
            <textarea className='border-2 input-form' name='message' placeholder='Your Message'></textarea>
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}


            <ReCAPTCHA
            sitekey={siteKey}
            onChange={(value) => setCapVal(value)}/>

            <button
              type="submit"
              disabled={!capVal || status === "loading"}
              className='submit-button border-2 bg-lime-600 text-white py-2 px-4 rounded hover:bg-lime-700 disabled:opacity-50'
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && <p className="text-green-600">Message sent! We'll be in touch soon.</p>}
            {status === "error" && <p className="text-red-500">Something went wrong. Please try again.</p>}

          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;