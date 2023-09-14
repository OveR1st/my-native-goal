import { IGoal } from 'entities/goal'
import { View, Text, StyleSheet, Pressable } from 'react-native'

interface IGoalItemProps {
  item: IGoal
  onDeleteItem: (id: string) => void
}

const GoalItem: React.FC<IGoalItemProps> = ({ item, onDeleteItem }) => {
  return (
    <Pressable onPress={() => onDeleteItem(item.id)}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{item.text}</Text>
      </View>
    </Pressable>
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
