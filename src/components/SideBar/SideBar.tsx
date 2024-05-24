import { AppShell, em } from '@mantine/core';
import { Logo } from '../ui';
import { Tabs } from '..';
import classes from './SideBar.module.css';
import { useMediaQuery } from '@mantine/hooks';

type TProps = {
  opened: boolean;
};

const SideBar = ({ opened }: TProps) => {
  const isMobile = useMediaQuery('(max-width: 74em)');

  return (
    <AppShell.Navbar
      classNames={classes}
      pos="static"
      p="lg"
      style={{
        display: !isMobile ? 'flex' : opened ? 'block' : 'none',
        maxHeight: !isMobile ? 'fit-content' : opened ? '120px' : '0px',
      }}
    >
      {!isMobile && <Logo />}
      <Tabs />
    </AppShell.Navbar>
  );
};

export default SideBar;
