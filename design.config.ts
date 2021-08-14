import {StyleSheet, useColorScheme} from 'react-native';

export const name = 'Oxon';
export const style_properties: {
  [key: string]: {};
} = StyleSheet.create({
  primary_dark: {
    color: '#121212',
  },
  accent_dark: {
    color: '#eeeeee',
  },
  primary_light: {},
  accent_light: {},
  bg_white: {
    backgroundColor: 'white',
  },
  bg_black: {
    backgroundColor: 'black',
  },
  bg_gray: {
    backgroundColor: '#121212',
  },
  border: {
    borderWidth: 2
  },
  border_gray: {
    borderColor: '#121212',
  },
  rounded: {
    borderRadius: 5
  },
  elevation: {
    elevation: 2
  },
  text_black: {
    color: '#000000',
  },
  text_blue: {
    color: '#5e7ce2',
  },
  text_gray: {
    color: '#999999',
  },
  text_green: {
    color: '#4FDC7C',
  },
  text_small: {
    fontSize: 24,
  },
  text_medium: {
    fontSize: 36,
  },
  text_center: {
    textAlign: 'center',
  },
  h_full: {
    height: '100%',
  },
  h_image: {
    height: 400
  },
  h_total:{
    height: '90%',
  },
  h_mid: {
    height: 90,
  },
  absolute: {
    position: 'absolute',
  },
  bottom: {
    bottom: 0
  },
  right: {
    right: 0
  },
  flex_row: {
    flexDirection: 'row',
  },
  flex_col: {
    flexDirection: 'column',
  },
  wrap: {
    flexWrap: 'wrap',
  },
  w_small: {
    width: '40%',
  },
  max_w_normal: {
    maxWidth: 700,
  },
  margin_normal: {
    margin: 16,
  },
  w_full: {
    width: '100%',
  },
  margin_top: {
    marginTop: "6.66%",
  },
  grow_1: {
    flexGrow: 1,
  },
  align_center: {
    alignItems: 'center',
  },
  justify_around: {
    justifyContent: 'space-around',
  },
  justify_center: {
    justifyContent: 'center',
  },
  left_margin_even: {
    marginLeft: "6.66%",
  },
  left_margin_odd: {
    marginLeft: "3.33%",
  },
  right_margin_even: {
    marginRight: "3.33%",
  },
  right_margin_odd: {
    marginRight: "6.66%",
  },
  overflow_hidden: {
    overflow: 'hidden',
  },
  padding_normal: {

  }
});

export const style = (styles: string) =>
  styles
    .trim()
    .split(' ')
    .map((style: string) => style_properties[style] || false)
    .filter((prop: {} | false) => prop) as {}[];

export const isDarkMode = () => useColorScheme() === 'dark';

export const TabBarOptions = {
  showLabel: false,
  activeTintColor: '#ffffff',
  style: {
    height: '10%',
  },
};
