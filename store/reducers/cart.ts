import {ADD_TO_CART} from '../actions/cart';

const initial_state = {
  items: {},
  total: 0,
};

export default (state = initial_state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      if (state.items[action.product.id]) {
        let item = state.items[action.product.id];
        item.price = action.product.price;
        item.title = action.product.title;
        item.quantity += 1;

        return {
          ...state,
          items: {
            ...state.items,
            [action.product.id]: item,
          },
          total: state.total + action.product.price,
        };
      } else {
        const cart_item = new CartItem(
          action.product.id,
          action.product.title,
          1,
          action.product.price,
        );

        return {
          ...state,
          items: {...state.items, [action.product.id]: cart_item},
        };
      }

    default:
      return state;
  }
};
