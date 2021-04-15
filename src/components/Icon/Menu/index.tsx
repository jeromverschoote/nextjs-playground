import React from 'react';

type Props = {
  color?: string;
  size?: number;
};

const MenuIcon = (props: Props): JSX.Element => {
  const { color = '#fff', size = 1 } = props;

  return (
    <svg
      width={24 * size}
      height={24 * size}
      viewBox="0 0 24 24"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="3" y1="12" x2="21" y2="12"></line>
      <line x1="3" y1="6" x2="21" y2="6"></line>
      <line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
  );
};

export default MenuIcon;
