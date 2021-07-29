import React from 'react';
import {Button, Card} from 'react-native-paper';
import {style} from '../design.config';

const Items = ({pic, title}: {pic?: string; title?: string}) => (
  <Card mode="outlined" style={style('w_normal')}>
    <Card.Cover
      source={{uri: pic || 'https://picsum.photos/700'}}
      style={style('w_full')}
    />
    <Card.Title title={title || "A picture"} />
    <Card.Actions>
      <Button>Buy</Button>
    </Card.Actions>
  </Card>
);

export default Items;
