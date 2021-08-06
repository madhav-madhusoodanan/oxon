import React from 'react';
import {Button, Card} from 'react-native-paper';
import {style} from '../design.config';
import Item from '../models/Item';
import {add_to_cart} from '../store/actions/cart';

// this a 2nd order function
const Item_display =
  (navigation, dispatch) =>
  ({item}: {item: Item}) =>
    (
      <Card
        mode="outlined"
        style={style(
          `w_small margin_top ${
            Number(item.id) % 2
              ? 'right_margin_odd left_margin_odd'
              : 'right_margin_even left_margin_even'
          }`,
        )}>
        <Card.Cover
          source={{uri: 'https://picsum.photos/700'}}
          style={style('w_full')}
        />
        <Card.Title title={item.title} />
        <Card.Actions>
          <Button
            onPress={() =>
              dispatch(add_to_cart(item))
            }>{`Buy (Rs.${item.price.toFixed(2)})`}</Button>
          <Button
            onPress={() => {
              navigation.push('Detail', {item});
            }}>
            Details
          </Button>
        </Card.Actions>
      </Card>
    );

export default Item_display;
