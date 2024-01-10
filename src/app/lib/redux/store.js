import { configureStore } from '@reduxjs/toolkit'
import {
  useSelector as useReduxSelector,
  useDispatch as useReduxDispatch,
} from 'react-redux'
import formReducer from './slices/formSlice'
import switcherReducer from './slices/switcherSlice'

export const reduxStore = configureStore({
  reducer: {
    form: formReducer,
    switcher: switcherReducer,
  },
})

export const useDispatch = () => useReduxDispatch()
export const useSelector = useReduxSelector
