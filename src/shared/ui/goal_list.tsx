import { StyleSheet, Text, View } from 'react-native'

export const GoalList = () => {
  return (
    <View style={styles.goalsContainer}>
      <Text>List of goal</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  goalsContainer: {
    flex: 5,
  },
})
