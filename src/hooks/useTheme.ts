import { themes } from 'src/styles/colors';

export const useTheme = (): any => {
  const isDark = true;

  if (isDark) {
    document.body.style.backgroundColor = themes.dark.background.primary;

    return {
      theme: themes.dark,
    };
  }

  document.body.style.backgroundColor = themes.light.background.primary;

  return {
    theme: themes.light,
  };
};
