'use client';

import NextImage, { ImageProps } from 'next/image';
import { Image as MantineImage } from '@mantine/core';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import classes from './Image.module.css';

type TProps = {
  outerStyles?: string;
  src?: string | StaticImport;
} & Omit<ImageProps, 'src'>;

const Image = ({ src, alt, outerStyles, ...props }: TProps) => {
  return src ? (
    <div className={`${classes.wrapper} ${outerStyles}`}>
      <MantineImage component={NextImage} src={src} alt={alt} fill {...props} />
    </div>
  ) : (
    <div></div>
  );
};

export default Image;
