// src/app/blog/contact/page.tsx
"use client";
import { useState } from 'react';
import Image from 'next/image';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    // Here you would normally send the data to your server
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ fullName: '', phone: '', email: '', message: '' });
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="contact-header">
          <h1>Don't be a stranger !  just say hello</h1>
        </div>

        <div className="contact-content">
          <div className="contact-form-container">
            <div className="contact-info">
              <div className="contact-info-item">
                <div className="icon-circle">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 13.5C13.933 13.5 15.5 11.933 15.5 10C15.5 8.067 13.933 6.5 12 6.5C10.067 6.5 8.5 8.067 8.5 10C8.5 11.933 10.067 13.5 12 13.5Z" stroke="#666" strokeWidth="1.5"/>
                    <path d="M12 21.5C17 17.5 21 13.5 21 10C21 5.581 16.97 2 12 2C7.03 2 3 5.581 3 10C3 13.5 7 17.5 12 21.5Z" stroke="#666" strokeWidth="1.5"/>
                  </svg>
                </div>
                <p>Rampura, Dhaka, Bangladesh</p>
              </div>
              
              <div className="contact-info-item">
                <div className="icon-circle">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 10.999V16.999C20 19.209 18.209 20.999 16 20.999H8C5.791 20.999 4 19.209 4 16.999V6.999C4 4.79 5.791 2.999 8 2.999H14" stroke="#666" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M15 8.99902C15 11.209 16.791 12.999 19 12.999V4.99902C16.791 4.99902 15 6.78902 15 8.99902Z" stroke="#666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p>+8801647040520</p>
              </div>
              
              <div className="contact-info-item">
                <div className="icon-circle">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.9026 8.85156L13.4593 12.4646C12.6198 13.1306 11.4387 13.1306 10.5992 12.4646L6.11841 8.85156" stroke="#666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M16.9089 21C19.9502 21.0084 22 18.5095 22 15.4384V8.57001C22 5.49883 19.9502 3 16.9089 3H7.09114C4.04979 3 2 5.49883 2 8.57001V15.4384C2 18.5095 4.04979 21.0084 7.09114 21H16.9089Z" stroke="#666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p><a href="mailto:kanon.shazzad@gmail.com" className="contact-info-link">kanon.shazzad@gmail.com</a></p>
              </div>

              {/* GitHub Link */}
              <div className="contact-info-item">
                <div className="icon-circle">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12C2 16.417 4.865 20.164 8.839 21.504C9.392 21.602 9.584 21.288 9.584 21.017C9.584 20.774 9.576 20.041 9.571 19.184C7.009 19.717 6.159 18.083 5.907 17.379C5.781 17.043 5.215 16.037 4.816 15.8C4.48 15.602 3.951 15.087 4.792 15.074C5.583 15.063 6.245 15.79 6.506 16.174C7.37 17.723 8.903 17.27 9.562 16.992C9.64 16.37 9.895 15.952 10.175 15.706C7.911 15.452 5.543 14.585 5.543 10.733C5.543 9.546 5.95 8.597 6.619 7.854C6.493 7.599 6.134 6.57 6.747 5.008C6.747 5.008 7.562 4.75 9.569 6.128C10.331 5.916 11.161 5.81 12 5.806C12.839 5.81 13.669 5.916 14.431 6.128C16.438 4.75 17.253 5.008 17.253 5.008C17.866 6.57 17.507 7.599 17.381 7.854C18.05 8.597 18.457 9.546 18.457 10.733C18.457 14.596 16.089 15.452 13.825 15.706C14.158 16.004 14.429 16.583 14.429 17.473C14.429 18.767 14.417 19.807 14.417 20.216C14.417 20.489 14.606 20.809 15.168 20.708C19.137 19.362 22 15.617 22 11.2C22 5.647 17.523 1.2 12 1.2V2Z" stroke="#666" strokeWidth="1"/>
                  </svg>
                </div>
                <p><a href="https://github.com/sazzad3802" target="_blank" rel="noopener noreferrer" className="contact-info-link">GitHub</a></p>
              </div>

              {/* LinkedIn Link */}
              <div className="contact-info-item">
                <div className="icon-circle">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V8H14V9.6C14.5515 8.90414 15.277 8.33876 16.0944 8.00934C16.9118 7.67991 17.7942 7.60865 18.633 7.803" stroke="#666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6 21H2V8H6V21Z" stroke="#666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="#666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p><a href="https://www.linkedin.com/in/sazzad-h-kanon-198999117/" target="_blank" rel="noopener noreferrer" className="contact-info-link">LinkedIn</a></p>
              </div>

              {/* X (Twitter) Link */}
              <div className="contact-info-item">
                <div className="icon-circle">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M18.901 1.15344C18.317 1.00644 17.723 1 17.121 1C14.059 1 11.089 2.691 9.757 4.95C9.176 5.969 8.773 7.071 8.534 8.211C5.907 7.246 3.69 5.47 1.977 3.03C1.681 3.578 1.5 4.182 1.5 4.816C1.5 6.471 2.518 7.868 3.918 8.684C3.313 8.665 2.732 8.494 2.205 8.23C2.198 8.244 2.196 8.258 2.196 8.273C2.196 10.469 3.744 12.31 5.797 12.716C5.291 12.85 4.765 12.91 4.225 12.91C3.956 12.91 3.692 12.884 3.438 12.836C4.021 14.628 5.684 15.868 7.6 15.901C6.056 17.137 4.132 17.818 2.001 17.818C1.619 17.818 1.24 17.797 0.868 17.752C2.898 19.066 5.264 19.8 7.768 19.8C17.134 19.8 22.107 12.168 22.107 5.588C22.107 5.373 22.102 5.159 22.092 4.945C23.014 4.258 23.817 3.399 24.399 2.42C23.55 2.812 22.642 3.086 21.687 3.214C22.666 2.61 23.441 1.726 23.818 0.674C22.937 1.157 21.982 1.523 20.98 1.741C20.158 0.856 18.997 0.298 17.738 0.298C15.387 0.298 13.49 2.19 13.49 4.536C13.49 4.872 13.529 5.198 13.604 5.51C13.604 5.51 13.604 5.51 13.604 5.51Z" fill="#666"/>
                  </svg>
                </div>
                <p><a href="https://x.com/Shazzadkanon?t=UDoAsgem_uoma_49NoLOeg&s=09" target="_blank" rel="noopener noreferrer" className="contact-info-link">X (Twitter)</a></p>
              </div>

              {/* Google Scholar Link */}
              <div className="contact-info-item">
                <div className="icon-circle">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 9L12 14L2 9V16C2 16.5523 2.44772 17 3 17H21C21.5523 17 22 16.5523 22 16V9Z" stroke="#666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M12 14L4 9.5L12 5L20 9.5L12 14Z" stroke="#666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <p><a href="https://scholar.google.com/citations" target="_blank" rel="noopener noreferrer" className="contact-info-link">Google Scholar</a></p>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="fullName">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" stroke="#666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M20.5899 22C20.5899 18.13 16.7399 15 11.9999 15C7.25991 15 3.40991 18.13 3.40991 22" stroke="#666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="phone">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 10.999V16.999C20 19.209 18.209 20.999 16 20.999H8C5.791 20.999 4 19.209 4 16.999V6.999C4 4.79 5.791 2.999 8 2.999H14" stroke="#666" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M15 8.99902C15 11.209 16.791 12.999 19 12.999V4.99902C16.791 4.99902 15 6.78902 15 8.99902Z" stroke="#666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Phone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+1 234 567 8900"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.9026 8.85156L13.4593 12.4646C12.6198 13.1306 11.4387 13.1306 10.5992 12.4646L6.11841 8.85156" stroke="#666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M16.9089 21C19.9502 21.0084 22 18.5095 22 15.4384V8.57001C22 5.49883 19.9502 3 16.9089 3H7.09114C4.04979 3 2 5.49883 2 8.57001V15.4384C2 18.5095 4.04979 21.0084 7.09114 21H16.9089Z" stroke="#666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="example@email.com"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 10H16" stroke="#666" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M8 14H13" stroke="#666" strokeWidth="1.5" strokeLinecap="round"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M17 21.25H7C4.929 21.25 3.25 19.571 3.25 17.5V6.5C3.25 4.429 4.929 2.75 7 2.75H17C19.071 2.75 20.75 4.429 20.75 6.5V17.5C20.75 19.571 19.071 21.25 17 21.25Z" stroke="#666" strokeWidth="1.5"/>
                  </svg>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Write your message here..."
                />
              </div>
              
              <button type="submit" className="submit-button">SUBMIT</button>
              
              <p className="privacy-note">
                I don't sell, share, or trade personal information. Your privacy is very important to me.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}