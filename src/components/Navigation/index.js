import React from 'react';
import Link from 'gatsby-link';
import styles from '../../styles/navigation.module.css';
import { connect } from 'react-redux';
import Footer from '../Footer';

const NavigationLink = props =>
  <li style={{ fontSize: '40px', fontWeight: '300'}}>
    <Link to={props.to}>
      {props.children}
    </Link>
  </li>  

const Navigation = props =>
  <nav className={(props.showNav ? styles.active : "")}>
    <div style={{ margin: '0 auto', width: '90%' }}>
      <ul>
      {
        props.links.map(link => (
          <NavigationLink to={link.to}>{link.text}</NavigationLink>
        ))
      }
      </ul>
    </div>
    <Footer /> 
  </nav>

const mapStateToProps = ({ showNav }) => {
  return { showNav }
}

const ConnectedNavigation = connect(mapStateToProps, {})(Navigation)
export default ConnectedNavigation;
