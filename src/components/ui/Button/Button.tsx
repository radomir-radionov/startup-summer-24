import { Button as MantineButton } from '@mantine/core';
import { ReactNode } from 'react';
import classes from './Button.module.css';

type TProps = {
  children: ReactNode;
  type?: 'submit';
  variant?: 'subtle' | 'filled';
  onClick?: () => void;
};

const Button = ({ children, type, variant, onClick }: TProps) => {
  return (
    <MantineButton
      type={type}
      variant={variant}
      className={classes.button}
      onClick={onClick}
    >
      {children}
    </MantineButton>
  );
};

export default Button;
