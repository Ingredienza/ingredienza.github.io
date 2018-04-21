import React from 'react';
import Link from 'gatsby-link';
import logo from './logo.png';

const Footer = () =>
  <footer style={{ gridArea: 'footer', zIndex: 10000 }}>
    <img src={logo} alt="Ingredienza Logo" /> 
  </footer>

export default Footer
