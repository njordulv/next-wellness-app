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
import quizReducer from './slices/quizSlice'
import formReducer from './slices/formSlice'
import metricReducer from './slices/metricSlice'
import emailReducer from './slices/emailSlice'
import paymentReducer from './slices/paymentSlice'
import checkboxReducer from './slices/checkboxSlice'
import stepReducer from './slices/stepSlice'

const rootReducer = combineReducers({
  quiz: quizReducer,
  form: formReducer,
  metric: metricReducer,
  email: emailReducer,
  payment: paymentReducer,
  checkbox: checkboxReducer,
  steps: stepReducer,
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
