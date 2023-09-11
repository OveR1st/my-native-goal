import { AddGoalScreen } from 'pages/goal-add'
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native'

export const App = () => {
  return (
    <View style={styles.appContainer}>
      <AddGoalScreen />
    </View>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
})
