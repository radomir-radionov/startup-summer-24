import { default as NextLink } from 'next/link';
import { ReactNode } from 'react';
import { Button } from '@mantine/core';
import classes from './Link.module.css';

type TProps = {
  href: string;
  children: ReactNode;
};

const Link = ({ href, children }: TProps) => (
  <Button component={NextLink} href={href} className={classes.link}>
    {children}
  </Button>
);

export default Link;
