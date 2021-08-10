import Item from '../../models/Item';

export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

export const add_to_cart = (item: Item) => {
  return {
    type: ADD_TO_CART,
    item,
  };
};

export const remove_from_cart = (item_id: string) => {
  return {
    type: REMOVE_FROM_CART,
    item_id,
  };
}
