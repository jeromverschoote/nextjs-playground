import React from 'react';

type Props = {
  color?: string;
  size?: number;
};

const HomeIcon = (props: Props): JSX.Element => {
  const { color = '#fff', size = 1 } = props;

  return (
    <svg
      width={24 * size}
      height={24 * size}
      viewBox="0 0 490 490"
      fill={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M490,474.459H0L245.009,15.541L490,474.459z" />
    </svg>
  );
};

export default HomeIcon;
