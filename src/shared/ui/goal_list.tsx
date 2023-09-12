import { StyleSheet, Text, View } from 'react-native'

interface IGoalListProps {
  goalsList: string[]
}

export const GoalList: React.FC<IGoalListProps> = ({ goalsList }) => {
  return (
    <View style={styles.goalsContainer}>
      {goalsList.map((goal, i) => {
        return (
          <View style={styles.goalItem} key={i}>
            <Text style={styles.goalText}>{goal}</Text>
          </View>
        )
      })}
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
