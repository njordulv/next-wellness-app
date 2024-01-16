import { configureStore } from '@reduxjs/toolkit'
import {
  useSelector as useReduxSelector,
  useDispatch as useReduxDispatch,
} from 'react-redux'
import optionHistoryReducer from './slices/optionHistorySlice'
import formReducer from './slices/formSlice'
import switcherReducer from './slices/switcherSlice'
import emailReducer from './slices/emailSlice'
import paymentReducer from './slices/paymentSlice'
import checkboxReducer from './slices/checkboxSlice'
import quizReducer from './slices/quizSlice'

export const reduxStore = configureStore({
  reducer: {
    optionHistory: optionHistoryReducer,
    form: formReducer,
    switcher: switcherReducer,
    email: emailReducer,
    payment: paymentReducer,
    checkbox: checkboxReducer,
    quiz: quizReducer,
  },
})

export const useDispatch = () => useReduxDispatch()
export const useSelector = useReduxSelector
