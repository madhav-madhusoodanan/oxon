import {createStore, combineReducers, applyMiddleware} from 'redux';
import Thunk from 'redux-thunk';

const initialState = {
  items: [
    {id: '0', title: 'name0', pic: ''},
    {id: '1', title: 'name1', pic: ''},
    {id: '2', title: 'name2', pic: ''},
    {id: '3', title: 'name3', pic: ''},
    {id: '4', title: 'name4', pic: ''},
    {id: '5', title: 'name5', pic: ''},
    {id: '6', title: 'name6', pic: ''},
    {id: '7', title: 'name7', pic: ''},
    {id: '8', title: 'name8', pic: ''},
    {id: '9', title: 'name9', pic: ''},
    {id: '10', title: 'name10', pic: ''},
    {id: '11', title: 'name11', pic: ''},
    {id: '12', title: 'name12', pic: ''},
    {id: '13', title: 'name13', pic: ''},
    {id: '14', title: 'name14', pic: ''},
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
