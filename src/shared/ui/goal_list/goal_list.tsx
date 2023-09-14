import { IGoal } from 'entities/goal'
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import GoalItem from './part/goal_item'

interface IGoalListProps {
  goalsList: IGoal[]
  onDeleteItem: (id: string) => void
}

export const GoalList: React.FC<IGoalListProps> = ({
  goalsList,
  onDeleteItem,
}) => {
  return (
    <View style={styles.goalsContainer}>
      <FlatList
        data={goalsList}
        renderItem={({ item }) => (
          <GoalItem item={item} onDeleteItem={onDeleteItem} />
        )}
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
