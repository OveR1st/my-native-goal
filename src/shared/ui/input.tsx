import { HTMLInputTypeAttribute } from 'react'
import { StyleSheet, TextInput, TextInputProps } from 'react-native'

export const Input: React.FC<TextInputProps> = ({ ...props }) => {
  return <TextInput {...props} style={styles.textInput} />
}

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    padding: 8,
  },
})
