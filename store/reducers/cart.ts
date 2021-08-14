import CartItem from '../../models/Cart_item';
import {ADD_TO_CART, REMOVE_FROM_CART} from '../actions/cart';

const initial_state: {
  items: {
    [id: string]: CartItem;
  };
} = {
  items: {},
};

export default (state = initial_state, item_id: any) => {
  switch (item_id.type) {
    case ADD_TO_CART:
      if (state.items[item_id.id]) {
        let cartItem = state.items[item_id.id];
        cartItem.quantity += 1;

        return {
          items: {
            ...state.items,
            [item_id.id]: cartItem,
          },
        };
      } else {
        const cart_item = new CartItem(
          item_id.id,
          item_id.title,
          1,
          item_id.price,
        );

        return {
          items: {...state.items, [item_id.id]: cart_item},
        };
      }

    case REMOVE_FROM_CART:
      if (state.items[item_id.id]) {
        delete state.items[item_id.id];
        return {
          items: state.items,
        };
      } else {
        return state;
      }
    default:
      return state;
  }
};
