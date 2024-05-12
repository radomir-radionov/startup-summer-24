'use client';

import Image from '../Image/Image';
import { Logo as LogoIcon } from '@/assets/icons';
import classes from './Logo.module.css';

const Logo = () => (
  <div className={classes.logo}>
    <Image src={LogoIcon} alt="Logo" outerStyles={classes.image} />
    ArrowFlicks
  </div>
);

export default Logo;
