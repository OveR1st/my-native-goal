import { HTMLInputTypeAttribute } from 'react'
import { StyleSheet, TextInput, TextInputProps } from 'react-native'

export const Input: React.FC<TextInputProps> = ({ ...props }) => {
  return <TextInput {...props} style={styles.textInput} />
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
