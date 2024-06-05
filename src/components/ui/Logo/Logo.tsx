'use client';

import Image from '../Image/Image';
import { LogoIcon } from '@/assets/icons';
import classes from './Logo.module.css';
import { Group } from '@mantine/core';
import { Poppins } from 'next/font/google';

type TProps = {
  outerStyles?: string;
};

const poppins = Poppins({
  weight: '600',
  subsets: ['latin'],
});

const Logo = ({ outerStyles }: TProps) => (
  <Group className={`${classes.logo} ${outerStyles} ${poppins.className}`}>
    <Image src={LogoIcon} alt="Logo" outerStyles={classes.image} />
    ArrowFlicks
  </Group>
);

export default Logo;
