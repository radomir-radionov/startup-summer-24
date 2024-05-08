import { Button as MantineButton } from '@mantine/core';
import { ReactNode } from 'react';

type TProps = {
  children: ReactNode;
};

const Button = ({ children }: TProps) => {
  return <MantineButton fullWidth></MantineButton>;
};

export default Button;
