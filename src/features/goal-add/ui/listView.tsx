import { goalsModel } from 'entities/goal'
import { GoalList } from 'shared/ui/goal_list'

export const ListView = () => {
  const goalsList = goalsModel.selectors.getGoals()

  return (
    <>
      <GoalList goalsList={goalsList} />
    </>
  )
}
