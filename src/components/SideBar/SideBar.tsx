'use client';

import { AppShell } from '@mantine/core';
import { Logo } from '../ui';
import { Tabs } from '..';
import classes from './SideBar.module.css';
import { usePathname } from 'next/navigation';

const SideBar = () => {
  const a = usePathname();
  console.log(a);

  return (
    <AppShell.Navbar
      className={classes.sidebar}
      pos={'static'}
      h={'auto'}
      p={24}
    >
      <Logo />
      <Tabs />
    </AppShell.Navbar>
  );
};

export default SideBar;
