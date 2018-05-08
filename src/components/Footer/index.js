import React from 'react';
import Link from 'gatsby-link';
import logo from './logo.png';

import styles from '../../styles/footer.module.css';

const Footer = () =>
  <footer className={styles.footer}>
    <img src={logo} alt="Ingredienza Logo" /> 
  </footer>

export default Footer
