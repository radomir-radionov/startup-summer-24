'use client';

import { Button as MantineButton } from '@mantine/core';
import { ReactNode } from 'react';
import classes from './Button.module.css';

type TProps = {
  children: ReactNode;
  type?: 'submit';
  variant?: 'subtle' | 'filled';
  onClick?: () => void;
  disabled?: boolean;
};

const Button = ({ children, type, variant, onClick, disabled }: TProps) => {
  return (
    <MantineButton
      type={type}
      variant={variant}
      className={classes.button}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </MantineButton>
  );
};

export default Button;
