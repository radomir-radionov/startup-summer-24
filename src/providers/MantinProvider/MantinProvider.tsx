'use client';

import theme from '@/styles/theme';
import { AppShell, Burger, MantineProvider as Provider } from '@mantine/core';
import { ReactNode } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { SideBar } from '@/components';

type TProps = {
  children: ReactNode;
};

const MantinProvider = ({ children }: TProps) => {
  const [opened, { toggle }] = useDisclosure();

  return (
    <Provider theme={theme}>
      <AppShell
        navbar={{
          width: 280,
          breakpoint: 'sm',
          collapsed: { mobile: !opened },
        }}
        display={'flex'}
        padding="md"
      >
        {/* <AppShell.Header>
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        </AppShell.Header> */}
        <SideBar />
        <AppShell.Main flex={1} pt={14} px={90} pb={82} bg="grayScale.2">
          {children}
        </AppShell.Main>
      </AppShell>
    </Provider>
  );
};

export default MantinProvider;
