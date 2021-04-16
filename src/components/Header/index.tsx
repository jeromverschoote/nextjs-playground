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
              <li
                key={index}
                onClick={typeof item.to === 'string' ? item.to : null}
              >
                <Link href={typeof item.to === 'string' ? item.to : ''}>
                  {item.label}
                </Link>
              </li>
            );
          }

          if (item.isShownWhenLoggedOut && !isLoggedIn) {
            return (
              <li
                key={index}
                onClick={typeof item.to === 'string' ? item.to : null}
              >
                <Link href={typeof item.to === 'string' ? item.to : ''}>
                  {item.label}
                </Link>
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
              <li
                key={index}
                onClick={typeof item.to === 'function' ? item.to : null}
              >
                <Link href={typeof item.to === 'string' ? item.to : ''}>
                  {item.label}
                </Link>
              </li>
            );
          }

          if (item.isShownWhenLoggedOut && !isLoggedIn) {
            return (
              <li
                key={index}
                onClick={typeof item.to === 'function' ? item.to : null}
              >
                <Link href={typeof item.to === 'string' ? item.to : ''}>
                  {item.label}
                </Link>
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
              <li
                key={index}
                onClick={typeof item.to === 'function' ? item.to : null}
              >
                <Link href={typeof item.to === 'string' ? item.to : ''}>
                  {item.label}
                </Link>
              </li>
            );
          }

          if (item.isShownWhenLoggedOut && !isLoggedIn) {
            return (
              <li
                key={index}
                onClick={typeof item.to === 'function' ? item.to : null}
              >
                <Link href={typeof item.to === 'string' ? item.to : ''}>
                  {item.label}
                </Link>
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

const Menu = ({
  onClick,
  children,
}: {
  onClick: () => void;
  children: any;
}): JSX.Element => {
  return (
    <Container.Menu>
      {children}
      <li onClick={onClick}>
        <Icon.Menu />
      </li>
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
