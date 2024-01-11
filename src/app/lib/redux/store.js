import { configureStore } from '@reduxjs/toolkit'
import {
  useSelector as useReduxSelector,
  useDispatch as useReduxDispatch,
} from 'react-redux'
import formReducer from './slices/formSlice'
import switcherReducer from './slices/switcherSlice'
import emailReducer from './slices/emailSlice'
import paymentReducer from './slices/paymentSlice'
import checkboxReducer from './slices/checkboxSlice'

export const reduxStore = configureStore({
  reducer: {
    form: formReducer,
    switcher: switcherReducer,
    email: emailReducer,
    payment: paymentReducer,
    checkbox: checkboxReducer,
  },
})

export const useDispatch = () => useReduxDispatch()
export const useSelector = useReduxSelector
