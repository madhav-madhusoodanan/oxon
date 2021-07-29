import React from 'react';
import {View} from 'react-native';
import {Appbar} from 'react-native-paper';
import {style} from '../design.config';
import Items from './Items';
import {appSelector} from '../store/hooks/hooks';

const Home = () => {
  const items = appSelector(state => state.items.items);
  return (
    <View style={style('flex_row justify_around padding_top')}>
      {items.map((item, key) => (
        <Items key={key} title={item.name} />
      ))}
    </View>
  );
};

export default Home;
