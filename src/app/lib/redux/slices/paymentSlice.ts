import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface PaymentState {
  plan1: boolean
  plan2: boolean
  plan3: boolean
  currency: {
    name: string
    abbr: string
    symbol: string
  }
  planOne: {
    status: boolean
    name: string
    discountPrice: string
    oldPrice: string
    discountFullPrice: string
    monthPrice: string
    totalPrice: string
    totalDiscountPrice: string
  }
  planTwo: {
    status: boolean
    name: string
    discountPrice: string
    oldPrice: string
    discountFullPrice: string
    monthPrice: string
    totalPrice: string
    totalDiscountPrice: string
  }
  planThree: {
    status: boolean
    name: string
    discountPrice: string
    oldPrice: string
    discountFullPrice: string
    monthPrice: string
    totalPrice: string
    totalDiscountPrice: string
  }
  bestOffer: string
  popular: string
}

const initialState: PaymentState = {
  plan1: false,
  plan2: true,
  plan3: false,
  currency: {
    name: 'euro',
    abbr: 'EUR',
    symbol: '€',
  },
  planOne: {
    status: false,
    name: '1-Month Plan',
    discountPrice: '0.77',
    oldPrice: '1.54',
    discountFullPrice: '23.10',
    monthPrice: '46.20',
    totalPrice: '46.20',
    totalDiscountPrice: '23.10',
  },
  planTwo: {
    status: true,
    name: '3-Month Plan',
    discountPrice: '0.54',
    oldPrice: '1.08',
    discountFullPrice: '16.20',
    monthPrice: '32.40',
    totalPrice: '97.20',
    totalDiscountPrice: '48.60',
  },
  planThree: {
    status: false,
    name: '6-Month Plan',
    discountPrice: '0.31',
    oldPrice: '0.62',
    discountFullPrice: '9.30',
    monthPrice: '18.65',
    totalPrice: '111.90',
    totalDiscountPrice: '55.80',
  },
  bestOffer: 'Best Offer',
  popular: '',
}

const paymentSlice = createSlice({
  name: 'payment',
  initialState,
  reducers: {
    setPlans: (
      state,
      action: PayloadAction<{ plan1: boolean; plan2: boolean; plan3: boolean }>
    ) => {
      state.plan1 = action.payload.plan1
      state.plan2 = action.payload.plan2
      state.plan3 = action.payload.plan3
    },
    setCurrency: (
      state,
      action: PayloadAction<{ name: string; abbr: string; symbol: string }>
    ) => {
      state.currency = { ...state.currency, ...action.payload }
    },
    setPlanOne: (state, action: PayloadAction<PaymentState>) => {
      state.planOne = { ...state.planOne, ...action.payload }
    },
    setPlanTwo: (state, action: PayloadAction<PaymentState>) => {
      state.planTwo = { ...state.planTwo, ...action.payload }
    },
    setPlanThree: (state, action: PayloadAction<PaymentState>) => {
      state.planThree = { ...state.planThree, ...action.payload }
    },
    setOffer: (state, action: PayloadAction<string>) => {
      state.bestOffer = action.payload
    },
    setPopular: (state, action: PayloadAction<string>) => {
      state.popular = action.payload
    },
  },
})

export const {
  setPlans,
  setCurrency,
  setPlanOne,
  setPlanTwo,
  setPlanThree,
  setOffer,
  setPopular,
} = paymentSlice.actions

export const selectPlans = (state: { payment: PaymentState }) => state.payment
export const selectCurrency = (state: { payment: PaymentState }) =>
  state.payment.currency
export const selectPlanOne = (state: { payment: PaymentState }) =>
  state.payment.planOne
export const selectPlanTwo = (state: { payment: PaymentState }) =>
  state.payment.planTwo
export const selectPlanThree = (state: { payment: PaymentState }) =>
  state.payment.planThree
export const selectOffer = (state: { payment: PaymentState }) =>
  state.payment.bestOffer
export const selectPopular = (state: { payment: PaymentState }) =>
  state.payment.popular

export default paymentSlice.reducer
