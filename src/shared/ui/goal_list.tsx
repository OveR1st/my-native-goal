import { IGoal } from 'entities/goal'
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'

interface IGoalListProps {
  goalsList: IGoal[]
}

export const GoalList: React.FC<IGoalListProps> = ({ goalsList }) => {
  return (
    <View style={styles.goalsContainer}>
      <FlatList
        data={goalsList}
        renderItem={({ item }) => (
          <View style={styles.goalItem}>
            <Text style={styles.goalText}>{item.text}</Text>
          </View>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  goalsContainer: {
    flex: 5,
  },
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
