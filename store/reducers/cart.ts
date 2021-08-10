import CartItem from '../../models/Cart_item';
import Item from '../../models/Item';
import {ADD_TO_CART, REMOVE_FROM_CART} from '../actions/cart';

const initial_state: {
  items: CartItem[];
  total: number;
} = {
  items: [],
  total: 0,
};

export default (state = initial_state, item_id: any) => {
  let item: Item? = state.items.find((item: Item) => item.id === item_id);
  switch (item_id.type) {

    case ADD_TO_CART:
      if (state.items[item_id.product.id]) {
        let item = state.items[item_id.product.id];
        item.price = item.price;
        item.title = item.title;
        item.quantity += 1;

        return {
          ...state,
          items: {
            ...state.items,
            [item_id.product.id]: item,
          },
          total: state.total + item_id.product.price,
        };
      } else {
        const cart_item = new CartItem(
          item_id.product.id,
          item_id.product.title,
          1,
          item_id.product.price,
        );

        return {
          ...state,
          items: {...state.items, [item_id.product.id]: cart_item},
        };
      }

    default:
      return state;
  }
};
