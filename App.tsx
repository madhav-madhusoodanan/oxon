import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Provider as Paper} from 'react-native-paper';
import {Provider as Redux} from 'react-redux';
import store from './store/reducers/items';
import {createStackNavigator} from '@react-navigation/stack';
import Items from './screens/shop/Items';
import Detail from './screens/shop/Detail';
import { RootStackParamList } from './RootStackParamList';
import Cart from './screens/shop/Cart';

const Stack = createStackNavigator<RootStackParamList>();
const App = () => {
  return (
    <NavigationContainer>
      <Redux store={store}>
        <Paper>
          <Stack.Navigator>
            <Stack.Screen
              name={'Items'}
              component={Items}
              options={({route}) => ({
                headerStyle: {backgroundColor: '#7e7ec9'},
                headerTintColor: '#fff',
                headerTitleStyle: {color: '#fff'},
              })}
            />
            <Stack.Screen
              name={'Detail'}
              component={Detail}
              options={({route}) => ({
                title: route.params.item.title,
                headerStyle: {backgroundColor: '#7e7ec9'},
                headerTintColor: '#fff',
                headerTitleStyle: {color: '#fff'},
              })}
            />
            <Stack.Screen 
              name={"Cart"}
              component={Cart}
            />
          </Stack.Navigator>
        </Paper>
      </Redux>
    </NavigationContainer>
  );
};
export default App;
