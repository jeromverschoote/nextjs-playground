import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import nlBE from 'src/translations/nl-NL/index.json';
import { useAuth } from 'src/hooks/useAuth';
import { useTheme } from 'src/hooks/useTheme';
import AuthContext from 'src/context/Auth';
import ThemeContext from 'src/context/Theme';

const queryClient = new QueryClient();

i18n.use(initReactI18next).init({
  resources: {
    ['nl-BE']: {
      translation: nlBE,
    },
  },
  lng: 'nl-BE',
  fallbackLng: 'nl-BE',
  interpolation: {
    escapeValue: false,
  },
});

interface Props {
  Component: React.FC;
  pageProps: any;
}

const App = (props: Props): JSX.Element => {
  const { Component, pageProps } = props;

  const { user, handleLogin, handleLogout } = useAuth();
  const { theme } = useTheme();

  console.log(theme);

  return (
    <QueryClientProvider client={queryClient}>
      <AuthContext.Provider value={{ user, handleLogin, handleLogout }}>
        <ThemeContext.Provider value={{ theme }}>
          <Component {...pageProps} />
        </ThemeContext.Provider>
      </AuthContext.Provider>
    </QueryClientProvider>
  );
};

export default App;
