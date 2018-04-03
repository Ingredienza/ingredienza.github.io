import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { connect } from 'react-redux';

import Header from '../components/Header'

const TemplateWrapper = ({ children, lockScreen }) => (
  <div style={(lockScreen ? { position: 'fixed', height: '100%', width: '100%' } : {})}>
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header
      links={[
        {to: '/', text: 'Home'},
        {to: 'places', text: 'Standorte'},
        {to: 'products/', text: 'Produkte'},
        {to: 'terms', text: 'Konditionen'},
        {to: 'contact', text: 'Kontakt'},
      ]}
    />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
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
