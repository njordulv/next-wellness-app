import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface QuizState {
  quizSlug: string
  quizTotal: number
}

const initialState: QuizState = {
  quizSlug: '',
  quizTotal: 0,
}

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    setQuizSlug: (state, action: PayloadAction<string>) => {
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
