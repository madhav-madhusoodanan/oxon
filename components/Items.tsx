import React from 'react';
import {Button, Card} from 'react-native-paper';
import { style } from '../design.config';

const Items = () => (
  <Card mode='outlined' style={style("w_normal wrap flex-row")}>
    <Card.Cover source={{uri: 'https://picsum.photos/700'}} />
    <Card.Title title="A picture" />
    <Card.Actions>
        <Button>Buy</Button>
    </Card.Actions>
  </Card>
);

export default Items;
