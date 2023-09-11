import { configureStore } from '@reduxjs/toolkit'
import { goalsModel } from 'entities/goal'

export const store = configureStore({
  reducer: {
    goalsReducer: goalsModel.reducer,
  },
})
