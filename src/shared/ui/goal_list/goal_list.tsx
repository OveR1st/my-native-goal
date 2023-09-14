import { IGoal } from 'entities/goal'
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import GoalItem from './part/goal_item'

interface IGoalListProps {
  goalsList: IGoal[]
}

export const GoalList: React.FC<IGoalListProps> = ({ goalsList }) => {
  return (
    <View style={styles.goalsContainer}>
      <FlatList
        data={goalsList}
        renderItem={({ item }) => <GoalItem item={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  goalsContainer: {
    flex: 5,
  },
})
