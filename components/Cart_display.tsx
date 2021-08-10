import React from 'react';
import {View, Text} from 'react-native';
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
        title={item.title}
        left={() => <Text>{item.quantity}</Text>}
        right={() => (
          <View>
            <Text>{item.quantity * item.price}</Text>
            <View>
              <List.Icon color={Colors.red500} icon="trash-can-outline" />
            </View>
          </View>
        )}
      />
    );

export default Cart_display;
