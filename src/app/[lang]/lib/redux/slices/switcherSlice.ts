import { createSlice } from '@reduxjs/toolkit'

interface SwitcherState {
  system: string
  isMetric: boolean
}

const initialState: SwitcherState = {
  system: 'Metric',
  isMetric: true,
}

const switcherSlice = createSlice({
  name: 'switcher',
  initialState,
  reducers: {
    toggleSwitch: (state) => {
      state.system = state.system === 'Metric' ? 'Imperial' : 'Metric'
      state.isMetric = !state.isMetric
    },
  },
})

export const { toggleSwitch } = switcherSlice.actions

export const selectSwitcherSystem = (state: { switcher: SwitcherState }) =>
  state.switcher.system
export const selectSwitcherIsMetric = (state: { switcher: SwitcherState }) =>
  state.switcher.isMetric

export default switcherSlice.reducer
