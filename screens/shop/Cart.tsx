import React from 'react';
import {View, FlatList} from 'react-native';
import Item from '../../models/Item';
import {style} from '../../design.config';
import {appSelector, appDispatch} from '../../store/hooks/hooks';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList} from '../../RootStackParamList';
import Cart_display from '../../components/Cart_display';

const Cart = ({navigation}: StackScreenProps<RootStackParamList, 'Cart'>) => {
  const items = appSelector(state => state.items.available_items);
  const dispatch = appDispatch();
  const Item_display = Cart_display(navigation, dispatch);

  return (
    <View style={style('flex_row justify_around')}>
      <FlatList<Item> data={items} renderItem={Item_display} numColumns={2} />
    </View>
  );
};
export default Cart;
