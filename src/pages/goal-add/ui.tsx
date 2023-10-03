import { GoalForm, ListView } from 'features/goal-add'
import { useState } from 'react'
import { AddButton } from 'shared'

export const AddGoalScreen = () => {
  const [modalIsVisible, setModalIsVisible] = useState(false)

  function endAddGoalHandler(flag: boolean): void {
    setModalIsVisible(flag)
  }

  return (
    <>
      <AddButton
        title="Add New Goal"
        color={'#a065ec'}
        onPress={() => endAddGoalHandler(true)}
      />
      {modalIsVisible && (
        <GoalForm
          modalIsVisible={modalIsVisible}
          closeModalHandler={endAddGoalHandler}
        />
      )}
      <ListView />
    </>
  )
}
