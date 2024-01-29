import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CheckboxState {
  conditions: boolean
  terms: boolean
}

interface CheckboxPayload {
  conditions: boolean
  terms: boolean
}

const initialState: CheckboxState = {
  conditions: false,
  terms: false,
}

const checkboxSlice = createSlice({
  name: 'checkbox',
  initialState,
  reducers: {
    setCheckbox: (state, action: PayloadAction<CheckboxPayload>) => {
      state.conditions = action.payload.conditions
      state.terms = action.payload.terms
    },
  },
})

export const { setCheckbox } = checkboxSlice.actions

export const selectCheckbox = (state: { checkbox: CheckboxState }) =>
  state.checkbox

export default checkboxSlice.reducer
