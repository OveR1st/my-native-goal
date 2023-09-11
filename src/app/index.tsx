import { StyleSheet, View } from 'react-native'
import { Provider } from 'react-redux'

import { store } from './store'

import { AddGoalScreen } from 'pages/goal-add'

export const App = () => {
  return (
    <Provider store={store}>
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
