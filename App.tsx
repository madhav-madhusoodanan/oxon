import React from 'react';
import {View} from 'react-native';
import Map from './components/Map';
import {style, name} from './design.config';

const App = () => (
  <View style={style('bg_white h_full align_center flex_1 justify_center')}>
    <Map />
  </View>
);

export default App;
