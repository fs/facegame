import React from 'react';
import Link from 'next/link';
import { LogoIcon } from './styled';

const Logo = (): JSX.Element => (
  <Link href="/" passHref>
    <a>
      <LogoIcon />
    </a>
  </Link>
);

export default Logo;
