import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'

interface EmailState {
  networkError: string | null
  emailValue: string
  success: boolean
}

const initialState: EmailState = {
  networkError: null,
  emailValue: '',
  success: false,
}

interface SubmitEmailData {
  email: string
  time: string
}

export const submitEmail = createAsyncThunk(
  'email/submitEmail',
  async (dataWithTime: SubmitEmailData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        'http://localhost:4000/submit-email',
        dataWithTime
      )
      return response.data
    } catch (error: any) {
      return rejectWithValue(error.message)
    }
  }
)

const emailSlice = createSlice({
  name: 'email',
  initialState,
  reducers: {
    clearNetworkError: (state) => {
      state.networkError = null
    },
    setEmailValue: (state, action: PayloadAction<string>) => {
      state.emailValue = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(submitEmail.pending, (state) => {
      state.networkError = null
      state.success = false
    })
    builder.addCase(submitEmail.fulfilled, (state) => {
      state.networkError = null
      state.success = true
    })
    builder.addCase(
      submitEmail.rejected,
      (state, action: PayloadAction<any>) => {
        state.networkError = action.payload.message || 'Unknown error'
        state.success = false
      }
    )
  },
})

export const { clearNetworkError, setEmailValue } = emailSlice.actions

export const selectNetworkError = (state: { email: EmailState }) =>
  state.email.networkError
export const selectEmailValue = (state: { email: EmailState }) =>
  state.email.emailValue

export default emailSlice.reducer
