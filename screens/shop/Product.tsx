import React from 'react';
import {View, FlatList} from 'react-native';
import Item from '../../models/Item';
import {style} from '../../design.config';
import {appSelector} from '../../store/hooks/hooks';
import Item_display from '../../components/Item_display';

const Product = () => {
  const items = appSelector(state => state.items.available_items);
  return (
    <View style={style("flex_row justify_around")}>
      <FlatList<Item> data={items} renderItem={Item_display} numColumns={2} />
    </View>
  );
};
export default Product;
