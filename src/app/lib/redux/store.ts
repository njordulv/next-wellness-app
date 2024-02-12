import { configureStore, combineReducers } from '@reduxjs/toolkit'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
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

const rootReducer = combineReducers({
  optionHistory: optionHistoryReducer,
  form: formReducer,
  switcher: switcherReducer,
  email: emailReducer,
  payment: paymentReducer,
  checkbox: checkboxReducer,
  quiz: quizReducer,
})

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const reduxStore = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(reduxStore)
export type AppDispatch = typeof reduxStore.dispatch
export const useDispatch = () => useReduxDispatch()
export const useSelector = useReduxSelector
