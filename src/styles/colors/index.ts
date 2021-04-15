export const palette = {
  white: {
    base: '#FFFFFF',
    darker: '#FAFBFC',
    darkest: '#F3F4F6',
  },
  black: {
    lightest: '#222222',
    lighter: '#111111',
    base: '#000000',
  },
  danger: {
    lightest: '#FFE8E6',
    lighter: '#ff4040',
    base: '#CB2431',
    darker: '#A3130B',
    darkest: '#620D08',
  },
  warning: {
    lightest: '#FCF1CF',
    lighter: '#FFE78B',
    base: '#FFD834',
    darker: '#FFB63F',
    darkest: '#C78E32',
  },
  success: {
    lightest: '#B3EBBE',
    lighter: '#30b957',
    base: '#0c7b2a',
    darker: '#0C5F2A',
    darkest: '#1B432A',
  },
  info: {
    lightest: '#B9E9FC',
    lighter: '#5DA8FE',
    base: '#0366D6',
    darker: '#014694',
    darkest: '#01244D',
  },
  accent: {
    lightest: '#C9C5FC',
    lighter: '#9D99FF',
    base: '#6158FF',
    darker: '#3F3AA6',
    darkest: '#2B2770',
  },
  opacity: {
    lightest: '#FFFFFF80',
    lighter: '#FFFFFF50',
    light: '#FFFFFF20',
    dark: '#00000010',
    darker: '#00000050',
    darkest: '#00000080',
  },
};

export const themes = {
  light: {
    background: {
      primary: palette.white.base,
      secondary: palette.white.darker,
      tertiary: palette.white.darkest,
    },
    text: {
      primary: palette.black.base,
      secondary: palette.black.lighter,
      tertiary: palette.black.lightest,
    },
    danger: {
      primary: palette.danger.base,
      secondary: palette.danger.darker,
      tertiary: palette.danger.darkest,
    },
    warning: {
      primary: palette.warning.base,
      secondary: palette.warning.darker,
      tertiary: palette.warning.darkest,
    },
    success: {
      primary: palette.success.base,
      secondary: palette.success.darker,
      tertiary: palette.success.darkest,
    },
    info: {
      primary: palette.info.base,
      secondary: palette.info.darker,
      tertiary: palette.info.darkest,
    },
    accent: {
      primary: palette.accent.base,
      secondary: palette.accent.darker,
      tertiary: palette.accent.darkest,
    },
    opacity: {
      primary: palette.opacity.dark,
      secondary: palette.opacity.darker,
      tertiary: palette.opacity.darkest,
    },
  },
  dark: {
    background: {
      primary: palette.black.base,
      secondary: palette.black.lighter,
      tertiary: palette.black.lightest,
    },
    text: {
      primary: palette.white.base,
      secondary: palette.white.darker,
      tertiary: palette.white.darkest,
    },
    danger: {
      primary: palette.danger.base,
      secondary: palette.danger.lighter,
      tertiary: palette.danger.lightest,
    },
    warning: {
      primary: palette.warning.base,
      secondary: palette.warning.lighter,
      tertiary: palette.warning.lightest,
    },
    success: {
      primary: palette.success.base,
      secondary: palette.success.lighter,
      tertiary: palette.success.lightest,
    },
    info: {
      primary: palette.info.base,
      secondary: palette.info.lighter,
      tertiary: palette.info.lightest,
    },
    accent: {
      primary: palette.accent.base,
      secondary: palette.accent.lighter,
      tertiary: palette.accent.lightest,
    },
    opacity: {
      primary: palette.opacity.light,
      secondary: palette.opacity.lighter,
      tertiary: palette.opacity.lightest,
    },
  },
};
