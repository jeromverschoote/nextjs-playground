import React from 'react';

import { QueryClient, QueryClientProvider } from 'react-query';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import nlBE from 'src/translations/nl-NL/index.json';

const queryClient = new QueryClient();

interface Props {
  Component: React.FC;
  pageProps: any;
}

const App = (props: Props): JSX.Element => {
  const { Component, pageProps } = props;

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

  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
};

export default App;
