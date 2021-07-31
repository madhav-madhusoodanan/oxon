import React from 'react';
import {View, FlatList} from 'react-native';
import {Appbar} from 'react-native-paper';
import {style} from '../design.config';
import Item, {ItemProps} from './Item';
import {appSelector} from '../store/hooks/hooks';


const Home = () => {
  const items = appSelector(state => state.items.items);
  return (
    <View style={style('flex_row justify_around')}>
      {/* {items.map((item, key) => (
        <Items key={key} title={item.name} />
      ))} */}
      <FlatList<ItemProps> data={items} renderItem={Item} numColumns={2}/>
    </View>
  );
};

export default Home;
