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
  name: 'metric',
  initialState,
  reducers: {
    toggleSwitch: (state) => {
      state.system = state.system === 'Metric' ? 'Imperial' : 'Metric'
      state.isMetric = !state.isMetric
    },
  },
})

export const { toggleSwitch } = metricSlice.actions

export const selectSwitcherSystem = (state: { metric: SwitcherState }) =>
  state.metric.system
export const selectSwitcherIsMetric = (state: { metric: SwitcherState }) =>
  state.metric.isMetric

export default metricSlice.reducer
