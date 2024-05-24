import { ActionIcon } from '@mantine/core';
import { ReactNode } from 'react';
import classes from './ButtonIcon.module.css';

type TProps = {
  children: ReactNode;
  onClick: () => void;
  outerStyles?: string;
};

const ButtonIcon = ({ children, onClick, outerStyles }: TProps) => {
  return (
    <ActionIcon
      variant="transparent"
      size={12}
      className={`${classes.button} ${outerStyles}`}
      onClick={onClick}
    >
      {children}
    </ActionIcon>
  );
};

export default ButtonIcon;
