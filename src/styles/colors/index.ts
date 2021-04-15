import ThemeEnum from 'src/enums/Theme';

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
  getPrimaryBackgroundColor: (theme: string): string => {
    if (theme === ThemeEnum.Light) {
      return palette.white.base;
    }
    if (theme === ThemeEnum.Dark) {
      return palette.black.darker;
    }
    return palette.danger.base;
  },
  getPrimaryBackgroundHoverColor: (theme: string): string => {
    if (theme === ThemeEnum.Light) {
      return palette.white.darkest;
    }
    if (theme === ThemeEnum.Dark) {
      return palette.black.darker;
    }
    return palette.danger.base;
  },
  getSecondaryBackgroundColor: (theme: string): string => {
    if (theme === ThemeEnum.Light) {
      return palette.white.darker;
    }
    if (theme === ThemeEnum.Dark) {
      return palette.black.darkest;
    }
    return palette.danger.base;
  },
  getPrimaryTextColor: (theme: string): string => {
    if (theme === ThemeEnum.Light) {
      return palette.black.base;
    }
    if (theme === ThemeEnum.Dark) {
      return palette.white.base;
    }
    return palette.danger.base;
  },
  getSecondaryTextColor: (theme: string): string => {
    if (theme === ThemeEnum.Light) {
      return palette.white.darker;
    }
    if (theme === ThemeEnum.Dark) {
      return palette.black.darker;
    }
    return palette.danger.base;
  },
  getTertiaryTextColor: (theme: string): string => {
    if (theme === ThemeEnum.Light) {
      return palette.white.darkest;
    }
    if (theme === ThemeEnum.Dark) {
      return palette.black.base;
    }
    return palette.danger.base;
  },
  getConfirmColor: (theme: string): string => {
    if (theme === ThemeEnum.Light) {
      return palette.confirm.base;
    }
    if (theme === ThemeEnum.Dark) {
      return palette.confirm.lighter;
    }
    return palette.danger.base;
  },
  getConfirmHoverColor: (theme: string): string => {
    if (theme === ThemeEnum.Light) {
      return palette.confirm.lighter;
    }
    if (theme === ThemeEnum.Dark) {
      return palette.confirm.base;
    }
    return palette.danger.base;
  },
  getLinkColor: (theme: string): string => {
    if (theme === ThemeEnum.Light) {
      return palette.link.base;
    }
    if (theme === ThemeEnum.Dark) {
      return palette.link.lighter;
    }
    return palette.danger.base;
  },
  getPrimaryDangerColor: (theme: string): string => {
    if (theme === ThemeEnum.Light) {
      return palette.danger.base;
    }
    if (theme === ThemeEnum.Dark) {
      return palette.danger.lighter;
    }
    return palette.danger.base;
  },
  getSecondaryDangerColor: (theme: string): string => {
    if (theme === ThemeEnum.Light) {
      return palette.danger.lightest;
    }
    if (theme === ThemeEnum.Dark) {
      return palette.danger.lightest;
    }
    return palette.danger.base;
  },
  getPrimaryOpacityColor: (theme: string): string => {
    if (theme === ThemeEnum.Light) {
      return palette.opacity.light;
    }
    if (theme === ThemeEnum.Dark) {
      return palette.opacity.dark;
    }
    return palette.danger.base;
  },
  getSecondaryOpacityColor: (theme: string): string => {
    if (theme === ThemeEnum.Light) {
      return palette.opacity.lighter;
    }
    if (theme === ThemeEnum.Dark) {
      return palette.opacity.darker;
    }
    return palette.danger.base;
  },
};
