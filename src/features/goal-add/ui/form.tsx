import { goalsModel } from 'entities/goal'
import { useCallback, useState } from 'react'
import {
  GestureResponderEvent,
  NativeSyntheticEvent,
  StyleSheet,
  TextInputChangeEventData,
  View,
} from 'react-native'
import { useDispatch } from 'react-redux'
import { AddButton, Input, useAppDispatch } from 'shared'

export const GoalForm = () => {
  const dispatch = useAppDispatch()
  const [enteredGoalText, setEnteredGoalText] = useState('')

  function goalInputHandler(text: string) {
    setEnteredGoalText(text)
  }

  function addGoalHandler() {
    enteredGoalText &&
      dispatch(goalsModel.actions.addGoalToList(enteredGoalText))
    setEnteredGoalText('')
  }

  return (
    <View style={styles.inputContainer}>
      <Input
        value={enteredGoalText}
        onChangeText={goalInputHandler}
        placeholder="Your course goal!"
      />
      <AddButton title="Add Goal" onPress={addGoalHandler} />
    </View>
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
