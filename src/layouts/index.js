import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { connect } from 'react-redux';
import classNames from 'classNames';

import Header from '../components/Header'
import Footer from '../components/Footer'
import Navigation from '../components/Navigation';
import styles from '../styles/layout.module.css';

const TemplateWrapper = ({ children, lockScreen }) => (
  <div
    className={classNames({
      [`${styles.container}`]: true,
      [`${styles.locked}`]: lockScreen,
    })}
  >
    <Header />
    <Navigation
      links={[
        {to: '/', text: 'Home'},
        {to: '/places', text: 'Standorte'},
        {to: '/products/', text: 'Produkte'},
        {to: '/pricelist/', text: 'Preisliste'},
        {to: '/terms', text: 'Konditionen'},
        {to: '/contact', text: 'Kontakt'},
        {to: '/links', text: 'Links' }
      ]}
    />
    <main className={styles.content}>
      {children()}
    </main>
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
  lockScreen: PropTypes.bool,
}

const mapStateToProps = ({ showNav }) => {
  return { lockScreen: showNav }
}

const ConnectedTemplateWrapper = connect(mapStateToProps, {})(TemplateWrapper)

export default ConnectedTemplateWrapper 
