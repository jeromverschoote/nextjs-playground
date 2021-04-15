import React from 'react';

import { Shape } from './styles';

interface Props {
  size: number;
}

const AvatarSkeleton = (props: Props): JSX.Element => {
  const { size } = props;

  return <Shape size={size} />;
};

export default AvatarSkeleton;
