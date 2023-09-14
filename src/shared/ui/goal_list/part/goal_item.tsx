import { IGoal } from 'entities/goal'
import { View, Text, StyleSheet, Pressable } from 'react-native'

interface IGoalItemProps {
  item: IGoal
  onDeleteItem: (id: string) => void
}

const GoalItem: React.FC<IGoalItemProps> = ({ item, onDeleteItem }) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: '#2dd2df' }}
        onPress={() => onDeleteItem(item.id)}
        style={({ pressed }) => pressed && styles.goalPressed}
      >
        <Text style={styles.goalText}>{item.text}</Text>
      </Pressable>
    </View>
  )
}

export default GoalItem

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },

  goalPressed: {
    opacity: 0.5,
  },

  goalText: {
    padding: 8,
    color: 'white',
  },
})
