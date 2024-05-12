'use client';

import Image from '../Image/Image';
import { LogoIcon } from '@/assets/icons';
import classes from './Logo.module.css';
import { Group } from '@mantine/core';

type TProps = {
  outerStyles?: string;
};

const Logo = ({ outerStyles }: TProps) => (
  <Group className={`${classes.logo} ${outerStyles}`}>
    <Image src={LogoIcon} alt="Logo" outerStyles={classes.image} />
    ArrowFlicks
  </Group>
);

export default Logo;
