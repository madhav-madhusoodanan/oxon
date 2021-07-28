import React from 'react';
import { View } from 'react-native';
import {Appbar} from 'react-native-paper';
import { style } from '../design.config';
import Items from './Items';

const Home = () => (
  <View style={style("flex_row justify_around padding_top")}>
    <Items />
    <Items />
  </View>
);

export default Home;
