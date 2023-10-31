import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const elevation = 3;

export const colors = {
  accent: '#F3534A',
  primary: '#DC2F2E',
  secondary: '#363636',
  tertiary: '#77858C',
  black: '#000000',
  white: '#FFFFFF',
  gray: '#B1ADAD',
};

export const sizes = {
  // global sizes
  base: 16,
  radius: 10,
  space: 20,

  // font sizes
  xl: 20,
  lg: 16,
  md: 14,
  sm: 12,
  xs: 10,

  // app dimensions
  width,
  height,
};

export const weights = {
  regular: 'normal' as const,
  bold: '700' as const,
  semibold: '600' as const,
  medium: '500' as const,
  light: '400' as const,
};

export const shadow = {
  elevation,
  shadowColor: colors.black,
  shadowOffset: { width: 0, height: elevation - 1 },
  shadowOpacity: 0.1,
  shadowRadius: elevation,
};
