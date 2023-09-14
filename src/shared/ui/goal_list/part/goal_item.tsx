import { IGoal } from 'entities/goal'
import { View, Text, StyleSheet } from 'react-native'

interface IGoalItemProps {
  item: IGoal
}

const GoalItem: React.FC<IGoalItemProps> = ({ item }) => {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{item.text}</Text>
    </View>
  )
}

export default GoalItem

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },

  goalText: {
    color: 'white',
  },
})
