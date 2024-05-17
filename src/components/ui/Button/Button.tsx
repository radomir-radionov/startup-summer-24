import { Button as MantineButton } from '@mantine/core';
import { ReactNode } from 'react';
import classes from './Button.module.css';

type TProps = {
  href?: string;
  children: ReactNode;
  variant?: 'subtle';
};

const Button = ({ children, variant }: TProps) => {
  return (
    <MantineButton variant={variant} className={classes.button}>
      {children}
    </MantineButton>
  );
};

export default Button;
