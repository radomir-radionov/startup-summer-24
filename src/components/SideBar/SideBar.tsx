'use client';

import { AppShell } from '@mantine/core';
import { Logo } from '../ui';
import { Tabs } from '..';
import classes from './SideBar.module.css';

const SideBar = () => {
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
