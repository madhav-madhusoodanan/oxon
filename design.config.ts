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
  h_full: {
    height: '100%',
  },
  h_total:{
    height: '90%',
  },
  h_mid: {
    height: 90,
  },
  flex_row: {
    flexDirection: 'row',
  },
  w_normal: {
    width: '83.33%',
  },
  grow_1: {
    flexGrow: 1,
  },
  align_center: {
    alignItems: 'center',
  },
  justify_between: {
    justifyContent: 'space-between',
  },
  justify_center: {
    justifyContent: 'center',
  },
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
