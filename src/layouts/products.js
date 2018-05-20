import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { connect } from 'react-redux';
import classNames from 'classNames';

import Header from '../components/Header'
import Footer from '../components/Footer'
import Navigation from '../components/Navigation';
import Sidebar from '../components/Sidebar'

import styles from '../styles/products.module.css';

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
        {to: '/places/', text: 'Standorte'},
        {to: '/products/', text: 'Produkte'},
        {to: '/pricelist/', text: 'Preisliste'},
        {to: '/terms/', text: 'Konditionen'},
        {to: '/contact/', text: 'Kontakt'},
      ]}
    />
      <Sidebar
        links={[
          {to: '/products/gnocchi/', text: 'Gnocchi'},
          {to: '/products/ravioli/', text: 'Ravioli'},
          {to: '/products/noodle/', text: 'Nudeln'},
          {to: '/products/season/', text: 'Saisonprodukte & Spezialitäten'},
          {to: '/products/special/', text: 'Teigwaren mit Spezialfüllung'},
          {to: '/products/vegan/', text: 'Ingredienza goes vegan'},
          {to: '/products/fatto/', text: 'Fatto a mano'},
        ]}
      />
    <main className={styles.content} lang="de">
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
