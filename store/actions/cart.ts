export const ADD_TO_CART = 'ADD_TO_CART';

export const add_to_cart = product => {
  console.log('added to cart soo damn well!');
  return {
    type: ADD_TO_CART,
    product,
  };
};
