import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Provider as Paper} from 'react-native-paper';
import {Provider as Redux} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import itemsReducer from './store/reducers/items';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/Home';

const rootReducer = combineReducers({
  items: itemsReducer,
});
const store = createStore(rootReducer);
const Stack = createStackNavigator();
const App = () => (
  <NavigationContainer>
    <Redux store={store}>
      <Paper>
        <Stack.Navigator>
          <Stack.Screen name={"Home"} component={Home}/>
        </Stack.Navigator>
      </Paper>
    </Redux>
  </NavigationContainer>
);

export default App;
