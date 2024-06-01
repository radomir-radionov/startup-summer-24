'use client';

import { ReactNode } from 'react';
import { SideBar } from '@/components';
import { AppShell, Burger, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Logo } from '@/components/ui';

export default function MoviesLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      navbar={{
        width: 280,
        breakpoint: 'lg',
        collapsed: { mobile: !opened },
      }}
      display={{ base: 'flex-column', lg: 'flex' }}
      padding="md"
    >
      <AppShell.Header bg="purple.0" pos="static">
        <Group
          display={{ base: 'flex', lg: 'none' }}
          justify="space-between"
          p="md"
        >
          <Logo />
          <Burger opened={opened} onClick={toggle} hiddenFrom="lg" size="sm" />
        </Group>
        <SideBar opened={opened} />
      </AppShell.Header>
      <AppShell.Main
        flex={1}
        pt={40}
        px={{ base: 'md', lg: '90' }}
        pb={82}
        bg="grayScale.1"
      >
        {children}
      </AppShell.Main>
    </AppShell>
  );
}
