import React from 'react';

type Props = {
  color?: string;
  size?: number;
};

const DeleteIcon = (props: Props): JSX.Element => {
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
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  );
};

export default DeleteIcon;
