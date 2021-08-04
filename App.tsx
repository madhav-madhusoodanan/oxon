import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Provider as Paper} from 'react-native-paper';
import {Provider as Redux} from 'react-redux';
import store from './store/reducers/items';
import {createStackNavigator} from '@react-navigation/stack';
import Product from './screens/shop/Product';

const Stack = createStackNavigator();

const App = () => (
  <NavigationContainer>
    <Redux store={store}>
      <Paper>
        <Stack.Navigator>
          <Stack.Screen name={'Products'} component={Product} />
        </Stack.Navigator>
      </Paper>
    </Redux>
  </NavigationContainer>
);

export default App;
