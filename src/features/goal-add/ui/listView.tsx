import { goalsModel } from 'entities/goal'
import { GoalList, useAppDispatch } from 'shared'

export const ListView = () => {
  const dispatch = useAppDispatch()
  const goalsList = goalsModel.selectors.getGoals()

  function onDeleteItem(id: string): void {
    dispatch(goalsModel.actions.deleteGoalFromList(id))
  }

  return (
    <>
      <GoalList goalsList={goalsList} onDeleteItem={onDeleteItem} />
    </>
  )
}
