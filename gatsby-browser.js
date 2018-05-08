import React from 'react'
import { Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import objectFitImages from 'object-fit-images'

import createStore from './src/state/createStore'

exports.replaceRouterComponent = ({ history }) => {
  const store = createStore()

  const ConnectedRouterWrapper = ({ children }) => (
    <Provider store={store}>
      <Router history={history}>{children}</Router>
    </Provider>
  )

  return ConnectedRouterWrapper
}


exports.onInitialClientRender = () => {
  objectFitImages()
}
