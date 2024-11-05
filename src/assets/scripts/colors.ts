/*
  Toge Design System v3.0 - Color Scheme
  (https://www.figma.com/design/tlGkN8uKvxVIHB1FgYRIaF/%F0%9F%8C%B1-Toge-Styles-3.0?node-id=2281-4697&node-type=section&m=dev)
*/

type ColorShadesTypes = {
  [key: number]: string;
};

type ColorPaletteTypes = {
  [colorName: string]: ColorShadesTypes;
};

const colorScheme: ColorPaletteTypes = {
  white: {
    50: '#FFFFFF',
    100: '#F1F2F3',
    200: '#DBDBDD',
    300: '#BABCC0',
    400: '#989898',
    500: '#7C7C7C',
    600: '#656565',
    700: '#525252',
    800: '#464646',
    900: '#3D3D3D',
    950: '#292929',
  },
  mushroom: {
    50: '#EFF1F1',
    100: '#F1F2F3',
    200: '#D9DEDE',
    300: '#B8C1C0',
    400: '#919F9D',
    500: '#738482',
    600: '#5D6C6B',
    700: '#4C5857',
    800: '#414B4B',
    900: '#394141',
    950: '#262B2B',
  },
  tomato: {
    50: '#FEF2F3',
    100: '#FEE2E3',
    200: '#FDCBCE',
    300: '#FBA6AA',
    400: '#F6737A',
    500: '#EC4750',
    600: '#DA2F38',
    700: '#B61F27',
    800: '#971D23',
    900: '#7D1F24',
    950: '#440B0E',
  },
  carrot: {
    50: '#FFFAEC',
    100: '#FFF4D3',
    200: '#FFE5A5',
    300: '#FFD16D',
    400: '#FFB132',
    500: '#FF970A',
    600: '#FF7F00',
    700: '#CC5C02',
    800: '#A1470B',
    900: '#823C0C',
    950: '#461C04',
  },
  mango: {
    50: '#FFFFEA',
    100: '#FFFBC5',
    200: '#FFF885',
    300: '#FFED46',
    400: '#FFDF1B',
    500: '#FFBF00',
    600: '#E29300',
    700: '#BB6802',
    800: '#985008',
    900: '#7C420B',
    950: '#482200',
  },
  kangkong: {
    50: '#F0FDF4',
    100: '#DCFCE6',
    200: '#BBF7CE',
    300: '#86EFA8',
    400: '#4ADE7B',
    500: '#22C558',
    600: '#17AD49',
    700: '#158039',
    800: '#166531',
    900: '#14532B',
    950: '#052E15',
  },
  wintermelon: {
    50: '#ECFEFF',
    100: '#CEFBFF',
    200: '#A3F3FE',
    300: '#64E9FC',
    400: '#1ED5F2',
    500: '#02AFCE',
    600: '#0592B5',
    700: '#0C7492',
    800: '#135E77',
    900: '#154E64',
    950: '#073345',
  },
  blueberry: {
    50: '#EEF9FF',
    100: '#D8EBFF',
    200: '#BADCFF',
    300: '#8BBDFF',
    400: '#549EFF',
    500: '#2D88FF',
    600: '#1679FA',
    700: '#0F6EEB',
    800: '#1356BA',
    900: '#164B92',
    950: '#122E59',
  },
  ubas: {
    50: '#F5F3FF',
    100: '#EEE9FE',
    200: '#DED6FE',
    300: '#C6B5FD',
    400: '#AA8BFA',
    500: '#8952F6',
    600: '#8139EE',
    700: '#7227DA',
    800: '#5F21B6',
    900: '#501D95',
    950: '#311065',
  },
};
export type { ColorShadesTypes, ColorPaletteTypes };
export default colorScheme;
