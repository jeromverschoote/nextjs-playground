import ColorSchemeEnum from 'src/enums/ColorScheme';

export const palette = {
  white: {
    base: '#FFFFFF',
    darker: '#FAFBFC',
    darkest: '#F3F4F6',
  },
  black: {
    lightest: '',
    lighter: '',
    base: '#161b21',
    darker: '#0e1117',
    darkest: '#06090e',
  },
  confirm: {
    lightest: '',
    lighter: '#30b957',
    base: '#0c7b2a',
    darker: '',
    darkest: '',
  },
  link: {
    lightest: '',
    lighter: '#0078ff',
    base: '#0366D6',
    darker: '',
    darkest: '',
  },
  danger: {
    lightest: '#FFE8E6',
    lighter: '#ff4040',
    base: '#CB2431',
    darker: '',
    darkest: '',
  },
  opacity: {
    lighter: '#F0F2F7',
    light: '#e2e4e8',
    dark: '#21262c',
    darker: '#171A1F',
  },
};

export default {
  black: palette.black,
  white: palette.white,
  opacity: palette.opacity,
  link: palette.link,
  getPrimaryBackgroundColor: (colorScheme: string): string => {
    if (colorScheme === ColorSchemeEnum.Light) {
      return palette.white.base;
    }
    if (colorScheme === ColorSchemeEnum.Dark) {
      return palette.black.darker;
    }
    return palette.danger.base;
  },
  getPrimaryBackgroundHoverColor: (colorScheme: string): string => {
    if (colorScheme === ColorSchemeEnum.Light) {
      return palette.white.darkest;
    }
    if (colorScheme === ColorSchemeEnum.Dark) {
      return palette.black.darker;
    }
    return palette.danger.base;
  },
  getSecondaryBackgroundColor: (colorScheme: string): string => {
    if (colorScheme === ColorSchemeEnum.Light) {
      return palette.white.darker;
    }
    if (colorScheme === ColorSchemeEnum.Dark) {
      return palette.black.darkest;
    }
    return palette.danger.base;
  },
  getPrimaryTextColor: (colorScheme: string): string => {
    if (colorScheme === ColorSchemeEnum.Light) {
      return palette.black.base;
    }
    if (colorScheme === ColorSchemeEnum.Dark) {
      return palette.white.base;
    }
    return palette.danger.base;
  },
  getSecondaryTextColor: (colorScheme: string): string => {
    if (colorScheme === ColorSchemeEnum.Light) {
      return palette.white.darker;
    }
    if (colorScheme === ColorSchemeEnum.Dark) {
      return palette.black.darker;
    }
    return palette.danger.base;
  },
  getTertiaryTextColor: (colorScheme: string): string => {
    if (colorScheme === ColorSchemeEnum.Light) {
      return palette.white.darkest;
    }
    if (colorScheme === ColorSchemeEnum.Dark) {
      return palette.black.base;
    }
    return palette.danger.base;
  },
  getConfirmColor: (colorScheme: string): string => {
    if (colorScheme === ColorSchemeEnum.Light) {
      return palette.confirm.base;
    }
    if (colorScheme === ColorSchemeEnum.Dark) {
      return palette.confirm.lighter;
    }
    return palette.danger.base;
  },
  getConfirmHoverColor: (colorScheme: string): string => {
    if (colorScheme === ColorSchemeEnum.Light) {
      return palette.confirm.lighter;
    }
    if (colorScheme === ColorSchemeEnum.Dark) {
      return palette.confirm.base;
    }
    return palette.danger.base;
  },
  getLinkColor: (colorScheme: string): string => {
    if (colorScheme === ColorSchemeEnum.Light) {
      return palette.link.base;
    }
    if (colorScheme === ColorSchemeEnum.Dark) {
      return palette.link.lighter;
    }
    return palette.danger.base;
  },
  getPrimaryDangerColor: (colorScheme: string): string => {
    if (colorScheme === ColorSchemeEnum.Light) {
      return palette.danger.base;
    }
    if (colorScheme === ColorSchemeEnum.Dark) {
      return palette.danger.lighter;
    }
    return palette.danger.base;
  },
  getSecondaryDangerColor: (colorScheme: string): string => {
    if (colorScheme === ColorSchemeEnum.Light) {
      return palette.danger.lightest;
    }
    if (colorScheme === ColorSchemeEnum.Dark) {
      return palette.danger.lightest;
    }
    return palette.danger.base;
  },
  getPrimaryOpacityColor: (colorScheme: string): string => {
    if (colorScheme === ColorSchemeEnum.Light) {
      return palette.opacity.light;
    }
    if (colorScheme === ColorSchemeEnum.Dark) {
      return palette.opacity.dark;
    }
    return palette.danger.base;
  },
  getSecondaryOpacityColor: (colorScheme: string): string => {
    if (colorScheme === ColorSchemeEnum.Light) {
      return palette.opacity.lighter;
    }
    if (colorScheme === ColorSchemeEnum.Dark) {
      return palette.opacity.darker;
    }
    return palette.danger.base;
  },
};
