import React, { useState } from 'react';
import { submitEnquiry } from '../api.js';
import './Pages.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState(null); // { type: 'success' | 'error', text }
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus(null);
    try {
      const res = await submitEnquiry(form);
      setStatus({ type: 'success', text: res.data.message || 'Thanks! We will get back to you soon.' });
      setForm({ name: '', email: '', phone: '', message: '' });
    } catch (err) {
      setStatus({
        type: 'error',
        text: err.response?.data?.error || 'Something went wrong. Please try again.'
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <header className="page-header">
        <h1>Contact Us</h1>
        <p>Have a question or want to place an order? Send us a message.</p>
      </header>

      <section className="section container contact-layout">
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone number (optional)"
            value={form.phone}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Tell us about your order or question"
            value={form.message}
            onChange={handleChange}
            required
          />
          <button type="submit" className="btn btn-primary-red" disabled={submitting}>
            {submitting ? 'Sending…' : 'Send Message'}
          </button>
          {status && <p className={`form-status ${status.type}`}>{status.text}</p>}
        </form>

        <div className="contact-info-card">
          <h3>Visit or reach us</h3>
          <p><strong>Address:</strong> 69, 21st Cross Street, Madambakkam Main Rd, Padmavathy Nagar, Balaji Nagar, Madambakkam, Chennai, TN - 600126</p>
          <p><strong>Email:</strong> <a href="mailto:info@tanyasbaking.com">info@tanyasbaking.com</a></p>
          <p><strong>Phone:</strong> <a href="tel:+919677276248">+91 96772 76248</a></p>
          <a
            href="https://wa.me/919677276248?text=Hi%20Tanya!%20I%20want%20to%20order%20a%20cake"
            target="_blank"
            rel="noreferrer"
            className="btn-primary-red" style={{background:"transparent", color:"var(--color-darkred)", border:"2px solid var(--color-darkred)"}}
          >
            Chat on WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
