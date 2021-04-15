import React from 'react';

type Props = {
  color?: string;
  size?: number;
};

const PriceIcon = (props: Props): JSX.Element => {
  const { color = '#fff', size = 1 } = props;

  return (
    <svg
      width={24 * size}
      height={24 * size}
      fill={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 477.88 477.88"
    >
      <path
        d="M460.809,0H273.076c-4.526,0.001-8.866,1.8-12.066,5.001l-256,256c-6.669,6.661-6.675,17.467-0.013,24.136
			c0.004,0.004,0.009,0.009,0.013,0.013l187.733,187.733c6.665,6.662,17.468,6.662,24.132,0l256-256
			c3.205-3.204,5.004-7.551,5.001-12.083V17.067C477.876,7.641,470.235,0,460.809,0z M358.409,153.6
			c-18.851,0-34.133-15.282-34.133-34.133s15.282-34.133,34.133-34.133s34.133,15.282,34.133,34.133S377.26,153.6,358.409,153.6z"
      />
    </svg>
  );
};

export default PriceIcon;
