import React from 'react';
import {View, FlatList} from 'react-native';
import {Snackbar} from 'react-native-paper';
import {StackScreenProps} from '@react-navigation/stack';
import {style} from '../../design.config';
import {appSelector, appDispatch} from '../../store/hooks/hooks';
import {RootStackParamList} from '../../RootStackParamList';
import Cart_display_base from '../../components/Cart_display';
import CartItem from '../../models/Cart_item';

const Cart = ({navigation}: StackScreenProps<RootStackParamList, 'Cart'>) => {
  const items = appSelector(state => state.items.cart_items);
  const dispatch = appDispatch();
  const Cart_display = Cart_display_base(navigation, dispatch);

  return (
    <View style={style('flex_row justify_around h_full')}>
      <FlatList<CartItem>
        data={items}
        renderItem={Cart_display}
      />
      <Snackbar
        visible={true}
        action={{label: 'Order', onPress: () => {}}}
        onDismiss={() => {}}>
        {`Total: Rs. ${items
          .map(item => item.quantity * item.price)
          .reduce((total: number, current) => total + current)}`}
      </Snackbar>
    </View>
  );
};
export default Cart;
