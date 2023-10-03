import { StyleSheet, View } from 'react-native'
import { Provider } from 'react-redux'

import { store } from './store'

import { AddGoalScreen } from 'pages/goal-add'
import { StatusBar } from 'expo-status-bar'

export const App = () => {
  return (
    <Provider store={store}>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <AddGoalScreen />
      </View>
    </Provider>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
})
