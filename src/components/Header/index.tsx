import React from 'react';
import Link from 'next/link';

import Icon from 'src/components/Icon';

import { Container } from './styles';

interface Props {
  children?: JSX.Element | JSX.Element[];
  navigation?: any;
  isLoggedIn?: boolean;
}

const Head = (props: Props): JSX.Element => {
  const { children, navigation, isLoggedIn = false } = props;

  if (children) {
    return <Container.Head>{children}</Container.Head>;
  }

  if (navigation) {
    return (
      <Container.Head>
        {navigation.map((item: any, index: number) => {
          if (item.isShownWhenLoggedIn && isLoggedIn) {
            return (
              <li key={index}>
                <Link href={item.to}>{item.label}</Link>
              </li>
            );
          }

          if (item.isShownWhenLoggedOut && !isLoggedIn) {
            return (
              <li key={index}>
                <Link href={item.to}>{item.label}</Link>
              </li>
            );
          }

          return <React.Fragment key={index} />;
        })}
      </Container.Head>
    );
  }

  return <div />;
};

const Body = (props: Props): JSX.Element => {
  const { children, navigation, isLoggedIn = false } = props;

  if (children) {
    return <Container.Body>{children}</Container.Body>;
  }

  if (navigation) {
    return (
      <Container.Body>
        {navigation.map((item: any, index: number) => {
          if (item.isShownWhenLoggedIn && isLoggedIn) {
            return (
              <li key={index}>
                <Link href={item.to}>{item.label}</Link>
              </li>
            );
          }

          if (item.isShownWhenLoggedOut && !isLoggedIn) {
            return (
              <li key={index}>
                <Link href={item.to}>{item.label}</Link>
              </li>
            );
          }

          return <React.Fragment key={index} />;
        })}
      </Container.Body>
    );
  }

  return <div />;
};

const Foot = (props: Props): JSX.Element => {
  const { children, navigation, isLoggedIn = false } = props;

  if (children) {
    return <Container.Foot>{children}</Container.Foot>;
  }

  if (navigation) {
    return (
      <Container.Foot>
        {navigation.map((item: any, index: number) => {
          if (item.isShownWhenLoggedIn && isLoggedIn) {
            return (
              <li key={index}>
                <Link href={item.to}>{item.label}</Link>
              </li>
            );
          }

          if (item.isShownWhenLoggedOut && !isLoggedIn) {
            return (
              <li key={index}>
                <Link href={item.to}>{item.label}</Link>
              </li>
            );
          }

          return <React.Fragment key={index} />;
        })}
      </Container.Foot>
    );
  }

  return <div />;
};

const Menu = ({ onClick }: { onClick: () => void }): JSX.Element => {
  return (
    <Container.Menu onClick={onClick}>
      <Icon.Menu />
    </Container.Menu>
  );
};

export default {
  Container: Container.Root,
  Head,
  Body,
  Foot,
  Menu,
};
