import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface QuizState {
  quizSlug: number
  quizTotal: number
}

const initialState: QuizState = {
  quizSlug: 0,
  quizTotal: 0,
}

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    setQuizSlug: (state, action: PayloadAction<number>) => {
      state.quizSlug = action.payload
    },
    setQuizTotal: (state, action: PayloadAction<number>) => {
      state.quizTotal = action.payload
    },
  },
})

export const { setQuizSlug, setQuizTotal } = quizSlice.actions
export const selectQuizSlug = (state: { quiz: QuizState }) =>
  state.quiz.quizSlug
export const selectQuizTotal = (state: { quiz: QuizState }) =>
  state.quiz.quizTotal

export default quizSlice.reducer
