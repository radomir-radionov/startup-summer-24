'use client';

import NextImage, { ImageProps } from 'next/image';
import { Image as MantineImage } from '@mantine/core';

type TProps = Omit<ImageProps, 'alt'> & Required<Pick<ImageProps, 'alt'>>;

const Image = ({ src, alt, ...rest }: TProps) => {
  return <MantineImage component={NextImage} src={src} alt={alt} {...rest} />;
};

export default Image;
