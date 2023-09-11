import { useAppSelector } from 'shared'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// TYPES
type GoalsState = {
  goals: string[]
}

const initialState: GoalsState = {
  goals: [],
}

const goalSlice = createSlice({
  name: 'goalsReducer',
  initialState,
  reducers: {
    addGoalToList: (state, { payload }: PayloadAction<string>) => {
      state.goals.push(payload)
    },
  },
})

// selectors
const getGoals = () => useAppSelector((state) => state.goalsReducer.goals)

export const goalsModel = {
  ...goalSlice,
  selectors: {
    getGoals,
  },
}
