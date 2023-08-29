import { Button, StyleSheet, Text, TextInput, View } from 'react-native'

export const App = () => {
  return (
    <View style={styles.container}>
      <View>
        <TextInput placeholder="Your course goal!" />
        <Button title="Add goal!" color="#841584" />
      </View>
      <View>
        <Text>List of goal</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
  },
})
