import React from 'react';
import { AiFillInstagram , AiOutlineFacebook } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
        <p>2022 M and E Trends Fashion All rights reserved</p>
        <p className="icons">
            <AiFillInstagram />
            <AiOutlineFacebook />
        </p>
    </div>
  )
}

export default Footer
