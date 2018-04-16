import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { connect } from 'react-redux';

import Header from '../components/Header'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'

const TemplateWrapper = ({ children, lockScreen }) => (
  <div style={(lockScreen ? { position: 'fixed', height: '100%', width: '100%' } : {})}>
    <Header
      links={[
        {to: '/', text: 'Home'},
        {to: '/places', text: 'Standorte'},
        {to: '/products/', text: 'Produkte'},
        {to: '/pricelist/', text: 'Preisliste'},
        {to: '/terms', text: 'Konditionen'},
        {to: '/contact', text: 'Kontakt'},
      ]}
    />
    <Sidebar
      links={[
        {to: '/products/gnocchi/', text: 'Gnocchi'},
        {to: '/products/ravioli/', text: 'Ravioli'},
        {to: '/products/noodle/', text: 'Nudeln'},
        {to: '/products/season/', text: 'Saisonprodukte & Spezialitäten'},
        {to: '/products/speacial/', text: 'Teigwaren mit Spezialfüllung'},
        {to: '/products/vegan/', text: 'Ingredienza goes vegan'},
        {to: '/products/fatto/', text: 'Fatto a mano'},
      ]}
    />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
        float: 'left',  
      }}
    >
      {children()}
    </div>
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
