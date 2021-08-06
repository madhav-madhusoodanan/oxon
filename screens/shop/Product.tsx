import React from 'react';
import {View, FlatList} from 'react-native';
import Item from '../../models/Item';
import {style} from '../../design.config';
import {appSelector, appDispatch} from '../../store/hooks/hooks';
import Item_base from '../../components/Item_display';

const Product = ({navigation}) => {
  const items = appSelector(state => state.items.available_items);
  const dispatch = appDispatch();
  const Item_display = Item_base(navigation, dispatch);

  return (
    <View style={style('flex_row justify_around')}>
      <FlatList<Item> data={items} renderItem={Item_display} numColumns={2} />
    </View>
  );
};
export default Product;
