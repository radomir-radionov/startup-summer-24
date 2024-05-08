'use client';

import { Tabs as MantineTabs } from '@mantine/core';
import { usePathname, useRouter } from 'next/navigation';
import Tab from './Tab';
import tabs from './data';
import classes from './Tabs.module.css';

const Tabs = () => {
  const router = useRouter();
  const pathname = usePathname();

  const getActiveTab = () => {
    if (pathname === '/') return '/';
    if (pathname === '/ratedMovies') return '/ratedMovies';
    return '/';
  };

  return (
    <MantineTabs
      defaultValue="/"
      value={getActiveTab()}
      onChange={(value) => router.push(`${value}`)}
    >
      <MantineTabs.List className={classes.list}>
        {tabs.map(({ id, value, text }) => (
          <Tab key={id} value={value} text={text} />
        ))}
      </MantineTabs.List>
    </MantineTabs>
  );
};

export default Tabs;
