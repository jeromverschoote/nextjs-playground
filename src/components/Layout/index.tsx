import Head from 'next/head';
import React, { useContext, useState } from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

import { meta } from 'src/config';
import AuthContext from 'src/context/Auth';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import { externals } from 'src/config';

import { Container, Content } from './styles';
import Icon from '../Icon';

import { palette } from 'src/styles/colors';
import { useRouter } from 'next/router';

const USER = {
  firstName: 'Jerom',
  lastName: 'Verschoote',
  emailAddress: 'jeromverschoote@gmail.com',
};
interface Props {
  children: any;
}

const Layout = (props: Props): JSX.Element => {
  const { children } = props;

  const { t } = useTranslation();
  const { isLoggedIn, handleLogin, handleLogout } = useContext(AuthContext);
  const router = useRouter();

  const [isCollapsed, setIsCollapsed] = useState(true);

  const navigation = {
    body: [
      {
        label: t('components.header.labels.profile'),
        to: `/user/:id`,
        isShownWhenLoggedIn: true,
        isShownWhenLoggedOut: false,
      },
      {
        label: t('components.header.labels.create'),
        to: '/create',
        isShownWhenLoggedIn: true,
        isShownWhenLoggedOut: false,
      },
    ],
    foot: [
      {
        label: t('components.header.labels.login'),
        to: () => handleLogin(USER),
        isShownWhenLoggedIn: false,
        isShownWhenLoggedOut: true,
      },
      {
        label: t('components.header.labels.register'),
        to: '/register',
        isShownWhenLoggedIn: false,
        isShownWhenLoggedOut: true,
      },
      {
        label: t('components.header.labels.logout'),
        to: () => handleLogout(),
        isShownWhenLoggedIn: true,
        isShownWhenLoggedOut: false,
      },
    ],
  };

  return (
    <React.Fragment>
      <Head>
        {/* Device */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Primary Meta Tags */}
        <link rel="icon" href="/favicon.ico" />
        <title>{t('meta.title')}</title>
        <meta name="title" content={meta.title} />
        <meta name="description" content={meta.description} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:url" content={meta.domain} />
        <meta property="og:image" content={meta.image} />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={meta.title} />
        <meta property="twitter:description" content={meta.description} />
        <meta property="twitter:url" content={meta.domain} />
        <meta property="twitter:image" content={meta.image} />

        {/* Progressive Web App */}
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <meta name="theme-color" content={meta.colors.theme} />
        <meta
          name="apple-mobile-web-app-status-bar"
          content={meta.colors.status}
        />
        <meta
          name="msapplication-navbutton-color"
          content={meta.colors.theme}
        />

        {/* Bots */}
        <meta key="robots" name="robots" content="index, follow" />

        {/* Native App */}
        <meta name="apple-itunes-app" content={meta.app.id} />
      </Head>
      <Container>
        {/* Header */}
        <Header.Container isCollapsed={isCollapsed}>
          <Header.Head>
            <li onClick={() => router.push('/')}>
              <Icon.Home color={palette.white.base} />
            </li>
          </Header.Head>
          <Header.Body navigation={navigation.body} isLoggedIn={isLoggedIn} />
          <Header.Foot navigation={navigation.foot} isLoggedIn={isLoggedIn} />
        </Header.Container>
        <Header.Menu onClick={() => setIsCollapsed(!isCollapsed)}>
          <li onClick={() => router.push('/')}>
            <Icon.Home color={palette.white.base} />
          </li>
        </Header.Menu>

        {/* Content */}
        <Content>{children}</Content>

        {/* Footer */}
        <Footer.Container>
          <Footer.Head>
            <li>
              <Link href={externals.portfolio}>
                <p>{t('components.footer.label.credits')}</p>
              </Link>
            </li>
          </Footer.Head>
        </Footer.Container>
      </Container>
    </React.Fragment>
  );
};

export default Layout;
