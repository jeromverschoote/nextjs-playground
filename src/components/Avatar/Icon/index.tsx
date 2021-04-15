import Image from 'next/image';
import React from 'react';

import { Container } from './styles';

interface Props {
  source: string;
  onClick?: () => void;
  size: number;
}

const AvatarIcon = React.forwardRef((props: Props, ref: any) => {
  const { source, onClick, size = 1 } = props;

  if (!source) {
    return <p>[Icon]</p>;
  }

  return (
    <Container ref={ref}>
      <Image
        src={source}
        alt="avatar-icon"
        width={38 * size}
        height={38 * size}
        onClick={onClick}
      />
    </Container>
  );
});

AvatarIcon.displayName = 'AvatarIcon';
export default AvatarIcon;
