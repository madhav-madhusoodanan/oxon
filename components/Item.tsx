import React from 'react';
import {Button, Card} from 'react-native-paper';
import {style} from '../design.config';

export interface ItemProps {
  id: string;
  title?: string;
  pic?: string;
}

const Item = ({item: {id, pic, title}}: {item: ItemProps}) => (
  <Card mode="outlined" style={style(`w_normal margin_top ${Number(id) % 2 ? "right_margin_odd left_margin_odd": "right_margin_even left_margin_even"}`)}>
    <Card.Cover
      source={{uri: pic || 'https://picsum.photos/700'}}
      style={style('w_full')}
    />
    <Card.Title title={title || 'A picture'} />
    <Card.Actions>
      <Button>Buy</Button>
    </Card.Actions>
  </Card>
);

export default Item;
