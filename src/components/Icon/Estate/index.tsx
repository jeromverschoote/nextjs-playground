import React from 'react';

type Props = {
  color?: string;
  size?: number;
};

const EstateIcon = (props: Props): JSX.Element => {
  const { color = '#fff', size = 1 } = props;

  return (
    <svg
      width={24 * size}
      height={24 * size}
      fill={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 426.667 426.667"
    >
      <polygon
        points="213.333,32 0,224 64,224 64,394.667 170.667,394.667 170.667,266.667 256,266.667 256,394.667 362.667,394.667
			362.667,224 426.667,224 		"
      />
    </svg>
  );
};

export default EstateIcon;
