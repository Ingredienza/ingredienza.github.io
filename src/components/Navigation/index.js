import React from 'react';
import Link from 'gatsby-link';
import { connect } from 'react-redux';
import classNames from 'classNames';


import Footer from '../Footer';
import styles from '../../styles/navigation.module.css';

const NavigationLink = props =>
  <li style={{ fontSize: '40px', fontWeight: '300'}}>
    <Link to={props.to} onClick={props.toggleNav}>
      {props.children}
    </Link>
  </li>  

const Navigation = ({showNav, toggleNav, links}) =>
  <nav
    className={classNames({
      [`${styles.active}`]: showNav,
    })}
  >
    <ul>
    {
      links.map(link => (
        <NavigationLink to={link.to} toggleNav={toggleNav}>
          {link.text}
        </NavigationLink>
      ))
    }
    </ul>
  </nav>

const mapStateToProps = ({ showNav }) => {
  return { showNav }
}

const mapDispatchToProps = dispatch => {
  return { toggleNav: () => dispatch({ type: 'TOGGLE_NAV' }) }
}

const ConnectedNavigation = connect(mapStateToProps, mapDispatchToProps)(Navigation)
export default ConnectedNavigation;
