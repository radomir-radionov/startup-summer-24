'use client';

import { ReactNode } from 'react';
import { SideBar } from '@/components';
import { AppShell } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

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
        breakpoint: 'sm',
        // collapsed: { mobile: !opened },
      }}
      display={'flex'}
      padding="md"
    >
      <SideBar />
      <AppShell.Main flex={1} pt={40} px={90} pb={82} bg="grayScale.2">
        {children}
      </AppShell.Main>
    </AppShell>
  );
}
