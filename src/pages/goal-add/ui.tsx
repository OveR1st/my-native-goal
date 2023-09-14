import { GoalForm, ListView } from 'features/goal-add'
import { useState } from 'react'
import { AddButton } from 'shared'

export const AddGoalScreen = () => {
  const [modalIsVisible, setModalIsVisible] = useState(false)

  return (
    <>
      <AddButton
        title="Add New Goal"
        color={'purple'}
        onPress={() => setModalIsVisible(true)}
      />
      {modalIsVisible && (
        <GoalForm
          modalIsVisible={modalIsVisible}
          closeModalHandler={() => setModalIsVisible(false)}
        />
      )}
      <ListView />
    </>
  )
}
