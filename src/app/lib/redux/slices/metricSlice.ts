import { createSlice } from '@reduxjs/toolkit'

interface SwitcherState {
  system: string
  isMetric: boolean
}

const initialState: SwitcherState = {
  system: 'Metric',
  isMetric: true,
}

const metricSlice = createSlice({
  name: 'metricSystem',
  initialState,
  reducers: {
    toggleSwitch: (state) => {
      state.system = state.system === 'Metric' ? 'Imperial' : 'Metric'
      state.isMetric = !state.isMetric
    },
  },
})

export const { toggleSwitch } = metricSlice.actions

export const selectSwitcherSystem = (state: { metricSystem: SwitcherState }) =>
  state.metricSystem.system
export const selectSwitcherIsMetric = (state: {
  metricSystem: SwitcherState
}) => state.metricSystem.isMetric

export default metricSlice.reducer
