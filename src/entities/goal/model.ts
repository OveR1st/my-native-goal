import { useAppSelector } from 'shared'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// TYPES

export interface IGoal {
  id: string
  text: string
}

type GoalsState = {
  goals: IGoal[]
}

const initialState: GoalsState = {
  goals: [],
}

const goalSlice = createSlice({
  name: 'goalsReducer',
  initialState,
  reducers: {
    addGoalToList: (state, { payload }: PayloadAction<IGoal>) => {
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
