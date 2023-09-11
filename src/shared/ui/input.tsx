import { StyleSheet, TextInput } from 'react-native'

export const Input = () => {
  return <TextInput style={styles.textInput} placeholder="Your course goal!" />
}

const styles = StyleSheet.create({
  textInput: {
    width: '70%',
    borderWidth: 1,
    borderColor: '#cccccc',
    padding: 8,
    marginRight: 8,
  },
})
