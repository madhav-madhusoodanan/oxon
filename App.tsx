import React from 'react';
import {View} from 'react-native';
import {style} from './design.config';
import {Provider as Paper} from 'react-native-paper';
import {Provider as Redux} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import itemsReducer from './store/reducers/items';

const rootReducer = combineReducers({
  items: itemsReducer,
});
const store = createStore(rootReducer);
const App = () => (
  <Redux store={store}>
    <Paper>
      <View
        style={style(
          'bg_white h_full align_center flex_1 justify_center',
        )}></View>
    </Paper>
  </Redux>
);

export default App;
