import React from 'react';
import { FaEnvelope } from 'react-icons/fa';

function SendEmail() {
  const handleSendEmail = () => {
    const recipient = "manasapatgar95@gmail.com";
    const subject = encodeURIComponent("Email Subject");
    const body = encodeURIComponent("Hello,\n\nThis is the email body.\n\nBest regards,");
    
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${subject}&body=${body}`;
    
    // Redirect to Gmail compose screen
    window.open(gmailLink, "_blank");
  };

  return (
    <a href="#" onClick={handleSendEmail}>
      <FaEnvelope />
    </a>
  );
}

export default SendEmail;
