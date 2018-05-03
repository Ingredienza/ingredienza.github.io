import React from 'react'
import Link from 'gatsby-link'
import styles from '../../styles/header.module.css'
import { connect } from 'react-redux';
import classNames from 'classNames';

import Navigation from '../Navigation';

const Header = ({ toggleNav, showNav }) => (
  <header>
      <div
        className={classNames({
          [`${styles.toggle}`]: true,
        })}
        onClick={toggleNav}
      >
        <div
          className={classNames({
            [`${styles.bar}`]: true,
            [`${styles.active}`]: showNav,
          })}
        />
        <div
          className={classNames({
            [`${styles.bar}`]: true,
            [`${styles.active}`]: showNav,
          })}
        />
        <div
          className={classNames({
            [`${styles.bar}`]: true,
            [`${styles.active}`]: showNav,
          })}
        />
      </div>
  </header>
)

const mapDispatchToProps = dispatch => {
  return { toggleNav: () => dispatch({ type: 'TOGGLE_NAV' }) }
}

const mapStateToProps = ({ showNav }) => {
  return { showNav }
}

const ConnectedHeader = connect(mapStateToProps, mapDispatchToProps)(Header);

export default ConnectedHeader;
