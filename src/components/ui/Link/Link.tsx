import { default as NextLink } from 'next/link';
import { ReactNode } from 'react';
import { Button } from '@mantine/core';

type TProps = {
  href: string;
  children: ReactNode;
};

const Link = ({ href, children }: TProps) => {
  return (
    <Button component={NextLink} href={href}>
      {children}
    </Button>
  );
};

export default Link;
