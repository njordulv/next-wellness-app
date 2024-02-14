import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface FormState {
  inputHeight: string
  heightError: string
  disabled: boolean
  disabledWeight: boolean
  disabledGoal: boolean
  isMetric: boolean
  inputWeight: string
  weightImperial: string
  weightError: string
  weightGoalError: string
  heightImperial: { feet: string; inch: string }
  totalCm: number
  totalKg: number
  goal: string
  goalImperial: string
  verdict: string
  active: number
}

interface HeightImperialPayload {
  feet: string
  inch: string
}

const initialState: FormState = {
  inputHeight: '',
  heightError: '',
  disabled: true,
  disabledWeight: true,
  disabledGoal: true,
  isMetric: true,
  inputWeight: '',
  weightImperial: '',
  weightError: '',
  weightGoalError: '',
  heightImperial: { feet: '', inch: '' },
  totalCm: 0,
  totalKg: 0,
  goal: '',
  goalImperial: '',
  verdict: '',
  active: -1,
}

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setInputHeight(state, action: PayloadAction<string>) {
      state.inputHeight = action.payload
    },
    setHeightError(state, action: PayloadAction<string>) {
      state.heightError = action.payload
    },
    setDisabled(state, action: PayloadAction<boolean>) {
      state.disabled = action.payload
    },
    setDisabledWeight(state, action: PayloadAction<boolean>) {
      state.disabledWeight = action.payload
    },
    setDisabledGoal(state, action: PayloadAction<boolean>) {
      state.disabledGoal = action.payload
    },
    setIsMetric(state, action: PayloadAction<boolean>) {
      state.isMetric = action.payload
    },
    setInputWeight(state, action: PayloadAction<string>) {
      state.inputWeight = action.payload
    },
    setWeightImperial(state, action: PayloadAction<string>) {
      state.weightImperial = action.payload
    },
    setWeightError(state, action: PayloadAction<string>) {
      state.weightError = action.payload
    },
    setWeightGoalError(state, action: PayloadAction<string>) {
      state.weightGoalError = action.payload
    },
    setHeightImperial(state, action: PayloadAction<HeightImperialPayload>) {
      state.heightImperial = action.payload
    },
    setFeet: (state, action: PayloadAction<string>) => {
      state.heightImperial.feet = action.payload
    },
    setInch: (state, action: PayloadAction<string>) => {
      state.heightImperial.inch = action.payload
    },
    setTotalCm(state, action: PayloadAction<number>) {
      state.totalCm = action.payload
    },
    setTotalKg(state, action: PayloadAction<number>) {
      state.totalKg = action.payload
    },
    setGoal(state, action: PayloadAction<string>) {
      state.goal = action.payload
    },
    setGoalImperial(state, action: PayloadAction<string>) {
      state.goalImperial = action.payload
    },
    setVerdict(state, action: PayloadAction<string>) {
      state.verdict = action.payload
    },
    setActive(state, action: PayloadAction<number>) {
      state.active = action.payload
    },
    resetForm(state) {
      state.inputHeight = initialState.inputHeight
      state.heightError = initialState.heightError
      state.heightImperial.feet = initialState.heightImperial.feet
      state.heightImperial.inch = initialState.heightImperial.inch
      state.totalCm = initialState.totalCm
      state.disabled = initialState.disabled
    },
    resetWeightForm(state) {
      state.inputWeight = initialState.inputWeight
      state.weightImperial = initialState.weightImperial
      state.weightError = initialState.weightError
      state.disabledWeight = initialState.disabledWeight
    },
    resetWeightGoalForm(state) {
      state.disabledGoal = initialState.disabledGoal
      state.goal = initialState.goal
      state.goalImperial = initialState.goalImperial
      state.verdict = initialState.verdict
      state.weightGoalError = initialState.weightGoalError
    },
  },
})

export const {
  setInputHeight,
  setHeightError,
  setDisabled,
  setDisabledWeight,
  setDisabledGoal,
  setIsMetric,
  setInputWeight,
  setWeightImperial,
  setWeightError,
  setWeightGoalError,
  setHeightImperial,
  setFeet,
  setInch,
  setTotalCm,
  setTotalKg,
  setGoal,
  setGoalImperial,
  setVerdict,
  setActive,
  resetForm,
  resetWeightForm,
  resetWeightGoalForm,
} = formSlice.actions

export const selectInputHeight = (state: { form: FormState }) =>
  state.form.inputHeight
export const selectHeightError = (state: { form: FormState }) =>
  state.form.heightError
export const selectDisabled = (state: { form: FormState }) =>
  state.form.disabled
export const selectDisabledWeight = (state: { form: FormState }) =>
  state.form.disabledWeight
export const selectDisabledGoal = (state: { form: FormState }) =>
  state.form.disabledGoal
export const selectIsMetric = (state: { form: FormState }) =>
  state.form.isMetric
export const selectInputWeight = (state: { form: FormState }) =>
  state.form.inputWeight
export const selectWeightImperial = (state: { form: FormState }) =>
  state.form.weightImperial
export const selectWeightError = (state: { form: FormState }) =>
  state.form.weightError
export const selectWeightGoalError = (state: { form: FormState }) =>
  state.form.weightGoalError
export const selectHeightImperialFeet = (state: { form: FormState }) =>
  state.form.heightImperial.feet
export const selectHeightImperialInch = (state: { form: FormState }) =>
  state.form.heightImperial.inch
export const selectTotalCm = (state: { form: FormState }) => state.form.totalCm
export const selectTotalKg = (state: { form: FormState }) => state.form.totalKg
export const selectGoal = (state: { form: FormState }) => state.form.goal
export const selectGoalImperial = (state: { form: FormState }) =>
  state.form.goalImperial
export const selectVerdict = (state: { form: FormState }) => state.form.verdict
export const selectActive = (state: { form: FormState }) => state.form.active

export default formSlice.reducer
