import { StyleSheet, View } from 'react-native'
import { AddButton, Input } from 'shared'

export const GoalForm = () => {
  return (
    <View style={styles.inputContainer}>
      <Input />
      <AddButton />
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
