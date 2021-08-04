import React from 'react';
import {Button, Card, Text} from 'react-native-paper';
import {style} from '../design.config';
import Item from '../models/Item';

const Item_display = ({item}: {item: Item}) => (
  <Card
    mode="outlined"
    style={style(
      `w_normal margin_top ${
        Number(item.id) % 2
          ? 'right_margin_odd left_margin_odd'
          : 'right_margin_even left_margin_even'
      }`,
    )}>
    <Card.Cover
      source={{uri: item.image_url || 'https://picsum.photos/700'}}
      style={style('w_full')}
    />
    <Card.Title
      title={item.title || 'A picture'}
      right={props => <Text {...props}>{`${item.price}`}</Text>}
    />
    <Card.Actions>
      <Button>Buy</Button>
    </Card.Actions>
  </Card>
);

export default Item_display;
