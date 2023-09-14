import { goalsModel } from 'entities/goal'
import { useCallback, useState } from 'react'
import {
  GestureResponderEvent,
  Modal,
  NativeSyntheticEvent,
  StyleSheet,
  TextInputChangeEventData,
  View,
} from 'react-native'
import { useDispatch } from 'react-redux'
import { AddButton, Input, useAppDispatch } from 'shared'

interface IGoalFormProps {
  modalIsVisible: boolean
  closeModalHandler: () => void
}

export const GoalForm: React.FC<IGoalFormProps> = ({
  modalIsVisible,
  closeModalHandler,
}) => {
  const dispatch = useAppDispatch()
  const [enteredGoalText, setEnteredGoalText] = useState('')

  function goalInputHandler(text: string) {
    setEnteredGoalText(text)
  }

  function addGoalHandler() {
    enteredGoalText &&
      dispatch(
        goalsModel.actions.addGoalToList({
          text: enteredGoalText,
          id: Math.random().toString(),
        })
      )
    setEnteredGoalText('')
    closeModalHandler()
  }

  return (
    <Modal visible={modalIsVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <Input
          value={enteredGoalText}
          onChangeText={goalInputHandler}
          placeholder="Your course goal!"
        />
        <AddButton title="Add Goal" onPress={addGoalHandler} />
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
})
