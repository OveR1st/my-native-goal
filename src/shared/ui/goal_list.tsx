import { StyleSheet, Text, View } from 'react-native'

interface IGoalListProps {
  goalsList: string[]
}

export const GoalList: React.FC<IGoalListProps> = ({ goalsList }) => {
  return (
    <View style={styles.goalsContainer}>
      {goalsList.map((goal, i) => {
        return <Text key={i}>{goal}</Text>
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  goalsContainer: {
    flex: 5,
  },
})
