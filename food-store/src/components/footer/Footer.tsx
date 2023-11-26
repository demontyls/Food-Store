import React from 'react';
import './style.scss'
import Logo from "@/components/logo/logo";

const Footer = () => {
  return (
    <footer className="footer bg-body-secondary">
      <div className="d-flex align-items-center justify-content-between container">
        <Logo/>
        <div>2023</div>
      </div>
    </footer>
  );
};

export default Footer;