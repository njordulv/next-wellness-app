import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface StepState {
  current: number
  total: number
}

const initialState: StepState = {
  current: 0,
  total: 0,
}

const stepSlice = createSlice({
  name: 'steps',
  initialState,
  reducers: {
    setQuizCurrent: (state, action: PayloadAction<number>) => {
      state.current = action.payload
    },
    setQuizTotal: (state, action: PayloadAction<number>) => {
      state.total = action.payload
    },
  },
})

export const { setQuizCurrent, setQuizTotal } = stepSlice.actions
export const selectQuizCurrent = (state: { steps: StepState }) =>
  state.steps.current
export const selectQuizTotal = (state: { steps: StepState }) =>
  state.steps.total

export default stepSlice.reducer
