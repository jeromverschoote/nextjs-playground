import { themes } from 'src/styles/colors';

export const useTheme = (): any => {
  const isDark = false;

  if (isDark) {
    return {
      theme: themes.dark,
    };
  }

  return {
    theme: themes.light,
  };
};
