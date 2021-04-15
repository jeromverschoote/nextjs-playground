import Theme from 'src/enums/Theme';

export const useTheme = (): any => {
  const isDark = true;

  if (isDark) {
    return {
      theme: Theme.Dark,
    };
  }

  return {
    theme: Theme.Light,
  };
};
