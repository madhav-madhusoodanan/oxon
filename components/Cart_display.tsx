import React from 'react';
import {List, Colors} from 'react-native-paper';
import {StackNavigationProp} from '@react-navigation/stack';
import {style} from '../design.config';
import CartItem from '../models/Cart_item';
import {RootStackParamList} from '../RootStackParamList';
import {AppDispatch} from '../store/reducers/items';

// this a 2nd order function
const Cart_display =
  (
    navigation: StackNavigationProp<RootStackParamList, 'Cart'>,
    dispatch: AppDispatch,
  ) =>
  ({item}: {item: CartItem}) =>
    (
      <List.Item
        style={style('margin_normal border border_gray rounded')}
        titleStyle={style('text_small')}
        title={`${item.quantity} ${item.title} = ${item.price * item.quantity}`}
        left={(props) => <List.Icon {...props} color={Colors.green500} icon="cart" />}
        right={(props) => (
          <List.Icon {...props} color={Colors.red500} icon="trash-can-outline" />
        )}
      />
    );

export default Cart_display;
