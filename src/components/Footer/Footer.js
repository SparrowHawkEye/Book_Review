import React from 'react';
import './Footer.css'
import { FaGithub,FaTwitter,FaLinkedin,FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer-container'>
      <p className="copyright text-center">
        Copyright &copy; 2022 all rights reserved | made with ❤️ by Maksud
        <small> aka</small> <i>Sparrow Hawk Eye</i></p>

        <div className="contact-links">  
          <a target="_blank" rel="noreferrer" href="https://github.com/SparrowHawkEye" className="link"> <FaGithub></FaGithub></a>
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/maksudur-rahman-a9733a161/" className="link"> <FaLinkedin></FaLinkedin> </a>
          <a target="_blank" rel="noreferrer" href="https://twitter.com/SparrowHawk_Eye " className="link"> <FaTwitter></FaTwitter> </a>
          <a target="_blank" rel="noreferrer" href="mailto:makh0043@gmail.com" className="link"> <FaEnvelope></FaEnvelope></a>
        </div>
    </div>
  );
};

export default Footer;