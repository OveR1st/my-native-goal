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
import { AddButton, ImageComponent, Input, useAppDispatch } from 'shared'

interface IGoalFormProps {
  modalIsVisible: boolean
  closeModalHandler: (flag: boolean) => void
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
    closeModalHandler(false)
  }

  return (
    <Modal visible={modalIsVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <ImageComponent
          style={styles.image}
          source={require('../../../../assets/goal.png')}
        />
        <View style={styles.inputWrapper}>
          <Input
            value={enteredGoalText}
            onChangeText={goalInputHandler}
            placeholder="Your course goal!"
          />
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <AddButton
              title="Add Goal"
              onPress={addGoalHandler}
              color={'#b180f0'}
            />
          </View>
          <View style={styles.button}>
            <AddButton
              title="Cencel"
              onPress={() => closeModalHandler(false)}
              color={'#f31282'}
            />
          </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#311b6b',
    paddingHorizontal: 20,
  },

  image: {
    width: 100,
    height: 100,
    margin: 20,
  },

  inputWrapper: {
    width: '100%',
  },

  buttonContainer: {
    marginTop: 16,
    flexDirection: 'row',
  },

  button: {
    width: 100,
    marginHorizontal: 8,
  },
})
