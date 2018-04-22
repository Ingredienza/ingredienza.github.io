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
      maxWidth: 300,
      float: 'left',
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
