import React from 'react';
import Link from 'next/link';

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

          return <li key={index}></li>;
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

          return <li key={index}></li>;
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

          return <li key={index}></li>;
        })}
      </Container.Foot>
    );
  }

  return <div />;
};

export default {
  Container: Container.Root,
  Head,
  Body,
  Foot,
};
