import React from 'react'
import Link from 'gatsby-link'
import styles from '../../styles/header.module.css'
import { connect } from 'react-redux';

import Navigation from '../Navigation';

const Header = ({ toggleNav, showNav, links }) => (
  <div>
    <header className={styles.group}>
      <div className={(showNav ? styles.navToggleActive: styles.navToggle )} onClick={toggleNav}>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>
    </header>
    <Navigation
      links={links}
    />
  </div>
)

const mapDispatchToProps = dispatch => {
  return { toggleNav: () => dispatch({ type: 'TOGGLE_NAV' }) }
}

const mapStateToProps = ({ showNav }) => {
  return { showNav }
}

const ConnectedHeader = connect(mapStateToProps, mapDispatchToProps)(Header);

export default ConnectedHeader;
