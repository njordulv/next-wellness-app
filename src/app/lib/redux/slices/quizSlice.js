import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  quizId: 0,
  quizTotal: 0,
}

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    setQuizId: (state, action) => {
      state.quizId = action.payload
    },
    setQuizTotal: (state, action) => {
      state.quizTotal = action.payload
    },
  },
})

export const { setQuizId, setQuizTotal } = quizSlice.actions
export const selectQuizId = (state) => state.quiz.quizId
export const selectQuizTotal = (state) => state.quiz.quizTotal

export default quizSlice.reducer
