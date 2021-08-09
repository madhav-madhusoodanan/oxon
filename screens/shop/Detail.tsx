import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {View, Image, ScrollView} from 'react-native';
import {Button, Subheading} from 'react-native-paper';
import {style} from '../../design.config';
import Item from '../../models/Item';
import {RootStackParamList} from '../../RootStackParamList';
import {add_to_cart} from '../../store/actions/cart';

const Detail = ({
  route: {
    params: {item},
  },
  navigation,
}: StackScreenProps<RootStackParamList, 'Detail'>) => (
  <ScrollView contentContainerStyle={style('flex_col justify_around')}>
    <View style={style('max_w_normal h_image overflow_hidden')}>
      <Image source={{uri: item.image_url}} style={style('w_full h_image')} />
    </View>
    <View style={style('flex_row justify_around margin_top')}>
      <Button
        labelStyle={style('text_small')}
        icon="plus-circle"
        mode="contained"
        compact={true}
        onPress={
          () => null /* () => {
          dispatch(add_to_cart(item));
        } */
        }>
        Cart
      </Button>
      <Button labelStyle={style('text_small')} icon="currency-inr" mode="text">
        {item.price}
      </Button>
    </View>
    <View style={style('max_w_normal justify_center')}>
      <Subheading style={style('text_black text_small text_center margin_top')}>
        {item.description}
      </Subheading>
    </View>
  </ScrollView>
);

export default Detail;
