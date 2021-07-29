import {createStore, combineReducers} from 'redux';
const initialState = {
  items: [{name: 'name1'}, {name: 'name2'}],
  filteredItems: [],
  favoriteItems: [],
};

const itemsReducer = (state = initialState, action: any) => {
  return state;
};

const rootReducer = combineReducers({
  items: itemsReducer,
});

const store = createStore(rootReducer);

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
