import React from 'react';
import {View, FlatList} from 'react-native';
import Item from '../../models/Item';
import {style} from '../../design.config';
import {appSelector, appDispatch} from '../../store/hooks/hooks';
import Item_base from '../../components/Item_display';
import {RootStackParamList} from '../../RootStackParamList';
import {StackScreenProps} from '@react-navigation/stack';
import {FAB} from 'react-native-paper';

const Items = ({navigation}: StackScreenProps<RootStackParamList, 'Items'>) => {
  const items = appSelector(state => state.items.available_items);
  const dispatch = appDispatch();
  const Item_display = Item_base(navigation, dispatch);

  return (
    <View style={style('flex_row justify_around h_full')}>
      <FlatList<Item> data={items} renderItem={Item_display} numColumns={2} />
      <FAB
        
        icon="cart"
        style={{position: 'absolute', margin: 16, right: 0, bottom: 0}}
      />
    </View>
  );
};
export default Items;
