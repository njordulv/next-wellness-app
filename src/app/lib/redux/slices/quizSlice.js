import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  quizSlug: '',
  quizTotal: '',
}

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    setQuizSlug: (state, action) => {
      state.quizSlug = action.payload
    },
    setQuizTotal: (state, action) => {
      state.quizTotal = action.payload
    },
  },
})

export const { setQuizSlug, setQuizTotal } = quizSlice.actions
export const selectQuizSlug = (state) => state.quiz.quizSlug
export const selectQuizTotal = (state) => state.quiz.quizTotal

export default quizSlice.reducer
