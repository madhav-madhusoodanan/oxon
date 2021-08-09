import Item from './models/Item';

export type RootStackParamList = {
  Items: undefined;
  Detail: {item: Item};
  Cart: undefined;
};
