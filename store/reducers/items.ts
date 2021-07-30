import {createStore, combineReducers, applyMiddleware} from 'redux';
import Thunk from 'redux-thunk';

const initialState = {
  items: [
    {id: '1', name: 'name1'},
    {id: '2', name: 'name2'},
  ],
  filteredItems: [],
  favoriteItems: [],
};

const itemsReducer = (state = initialState, action: any) => {
  return state;
};

const rootReducer = combineReducers({
  items: itemsReducer,
});

const store = createStore(rootReducer, applyMiddleware(Thunk));

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
