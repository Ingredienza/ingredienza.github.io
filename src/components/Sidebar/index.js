import React from 'react';
import Link from 'gatsby-link';
import styles from '../../styles/sidebar.module.css';
import { connect } from 'react-redux';

const ProductLink = props =>
  <li style={{ fontSize: '20px', fontWeight: '300'}}>
    <Link to={props.to}>
      {props.children}
    </Link>
  </li>  

const Sidebar = props =>
  <aside style={{
      margin: '0 auto',
      maxWidth: 300,
      float: 'left',
      padding: '0px 1.0875rem 1.45rem',
      paddingTop: 0,
    }}
  >
    <ul>
    {
      props.links.map(link => (
        <ProductLink to={link.to}>
          {link.text}
        </ProductLink>
      ))
    }
    </ul>
  </aside>

export default Sidebar;
