import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Provider as Paper} from 'react-native-paper';
import {Provider as Redux} from 'react-redux';
import store from './store/reducers/items';
import {createStackNavigator} from '@react-navigation/stack';
import Product from './screens/shop/Product';
import Detail from './screens/shop/Detail';
import Item from './models/Item';

type RootStackParamList = {
  Products: undefined;
  Detail: {item: Item};
};

const Stack = createStackNavigator<RootStackParamList>();
const App = () => {
  return (
    <NavigationContainer>
      <Redux store={store}>
        <Paper>
          <Stack.Navigator>
            <Stack.Screen
              name={'Products'}
              component={Product}
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
          </Stack.Navigator>
        </Paper>
      </Redux>
    </NavigationContainer>
  );
};
export default App;
