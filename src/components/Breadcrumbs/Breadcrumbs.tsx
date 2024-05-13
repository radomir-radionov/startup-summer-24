'use client';

import { Breadcrumbs as MantineBreadcrumbs, Anchor } from '@mantine/core';
import classes from './Breadcrumbs.module.css';

type TProps = {
  data: { id: number; title: string; href: string }[];
};

const Breadcrumbs = ({ data }: TProps) => {
  const items = data.map(({ id, title, href }) => (
    <Anchor key={id} href={href} className={classes.anchor}>
      {title}
    </Anchor>
  ));

  return (
    <MantineBreadcrumbs separator="/" separatorMargin="10">
      {items}
    </MantineBreadcrumbs>
  );
};

export default Breadcrumbs;
