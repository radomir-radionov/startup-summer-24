'use client';

import NextImage, { ImageProps } from 'next/image';
import { Box, Image as MantineImage, Text } from '@mantine/core';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import classes from './Image.module.css';
import Icons from '@/assets/icons';

type TProps = {
  outerStyles?: string;
  src?: string | StaticImport;
} & Omit<ImageProps, 'src'>;

const Image = ({ src, alt, outerStyles, ...props }: TProps) => {
  return src ? (
    <Box className={`${classes.wrapper} ${outerStyles}`}>
      <MantineImage
        component={NextImage}
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        {...props}
      />
    </Box>
  ) : (
    <Box className={`${classes.placeholder} ${outerStyles}`}>
      <Icons.noPosterIcon color="var(--mantine-color-grayScale-4)" />
      <Text>No Poster</Text>
    </Box>
  );
};

export default Image;
