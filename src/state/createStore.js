import { createStore as reduxCreateStore } from "redux"

const reducer = (state, action) => {
  if (action.type === 'TOGGLE_NAV') {

    return Object.assign({}, state, {
      showNav: !state.showNav,
    })
  }
  return state
}

const initialState = { showNav: false }

const createStore = () => reduxCreateStore(reducer, initialState)
export default createStore
