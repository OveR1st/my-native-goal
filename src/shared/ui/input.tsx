import { HTMLInputTypeAttribute } from 'react'
import { StyleSheet, TextInput, TextInputProps } from 'react-native'

export const Input: React.FC<TextInputProps> = ({ ...props }) => {
  return <TextInput {...props} style={styles.textInput} />
}

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    color: '#120438',
    borderRadius: 6,
    padding: 16,
  },
})
