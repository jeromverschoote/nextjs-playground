import { useEffect, useState } from 'react';
import { themes } from 'src/styles/colors';

export const useTheme = (): any => {
  const [theme, setTheme] = useState(themes.light);

  useEffect(() => {
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (isDark) {
      setTheme(themes.dark);

      // Also update body background color
      document.body.style.backgroundColor = themes.dark.background.primary;
    }
  }, []);

  return {
    theme,
    setTheme,
  };
};
