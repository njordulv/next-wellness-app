import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface OptionState {
  [pathname: string]: string
}

interface OptionPayload {
  pathname: string
  option: string
}

const initialState: OptionState = {}

const optionHistorySlice = createSlice({
  name: 'optionHistory',
  initialState,
  reducers: {
    setOptionHistory: (state, action: PayloadAction<OptionPayload>) => {
      const { pathname, option } = action.payload
      state[pathname] = option
    },
  },
})

export const { setOptionHistory } = optionHistorySlice.actions

export default optionHistorySlice.reducer
