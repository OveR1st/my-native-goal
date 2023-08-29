import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native'

export const App = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.dummyText}>Hello World!</Text>
        <Button title="Tap me!" color="#841584" />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },

  dummyText: {
    margin: 16,
    padding: 16,
    borderWidth: 2,
    borderColor: 'red',
  },
})
