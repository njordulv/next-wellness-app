import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface QuizState {
  [pathname: string]: string
}

interface QuizPayload {
  pathname: string
  option: string
}

const initialState: QuizState = {}

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    setQuiz: (state, action: PayloadAction<QuizPayload>) => {
      const { pathname, option } = action.payload
      state[pathname] = option
    },
  },
})

export const { setQuiz } = quizSlice.actions

export default quizSlice.reducer
