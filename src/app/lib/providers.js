'use client'

import { Provider } from 'react-redux'
import { reduxStore } from './redux/store'

export const Providers = (props) => {
  return <Provider store={reduxStore}>{props.children}</Provider>
}
