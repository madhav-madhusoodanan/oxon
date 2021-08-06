import {createStore, combineReducers, applyMiddleware} from 'redux';
import Thunk from 'redux-thunk';
import Item from '../../models/Item';
import cart from "./cart"
const initialState = {
  available_items: [
    new Item(
      '0',
      'u1',
      'Red Shirt',
      'http://www.google.com/images/srpr/logo4w.png',
      'obviously, a red shirt but in my opinion it is not something worht following',
      23.0,
    ),
    new Item(
      '1',
      'u2',
      'Blue Shirt',
      'http://www.google.com/images/srpr/logo4w.png',
      'obviously, a blue shirt',
      23.0,
    ),
  ],
  user_items: [
    new Item(
      'p1',
      'u1',
      'Red Shirt',
      'http://www.google.com/images/srpr/logo4w.png',
      'obviously, a red shirt',
      23.0,
    ),
  ],
  favorite_items: [],
};

const items = (state = initialState, action: any) => {
  return state;
};

const rootReducer = combineReducers({
  items,
  cart
});

const store = createStore(rootReducer, applyMiddleware(Thunk));

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
