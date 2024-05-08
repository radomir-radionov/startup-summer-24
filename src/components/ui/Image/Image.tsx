'use client';

import NextImage from 'next/image';
import { Image as MantineImage } from '@mantine/core';

type TProps = {
  src: any;
  alt: string;
};

const Image = ({ src, alt }: TProps) => {
  return <MantineImage component={NextImage} src={src} alt={alt} />;
};

export default Image;
