import { configureStore } from '@reduxjs/toolkit'
import {
  useSelector as useReduxSelector,
  useDispatch as useReduxDispatch,
} from 'react-redux'
import formReducer from './slices/formSlice'
import switcherReducer from './slices/switcherSlice'
import emailReducer from './slices/emailSlice'

export const reduxStore = configureStore({
  reducer: {
    form: formReducer,
    switcher: switcherReducer,
    email: emailReducer,
  },
})

export const useDispatch = () => useReduxDispatch()
export const useSelector = useReduxSelector
