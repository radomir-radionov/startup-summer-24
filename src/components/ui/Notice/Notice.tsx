'use client';

import Image from '../Image/Image';
import { Center, Text } from '@mantine/core';
import variants from './data';
import classes from './Notice.module.css';
import { Button, Link } from '..';

type TProps = {
  variant: 'notFound' | 'emptyState' | 'noSearchedMovies';
};

const Notice = ({ variant }: TProps) => {
  const { icon, text, btnText } = variants[variant];

  const containerStyles = `${classes.container} ${
    variant === 'notFound' && classes.notFoundContainer
  }`;
  const iconStyles = `${classes[variant]}`;

  return (
    <Center className={containerStyles}>
      <Image src={icon} alt="Notice icon" outerStyles={iconStyles} />
      <div className={classes.messageBox}>
        <Text className={classes.message}>{text}</Text>
        {btnText && <Link href="/">{btnText}</Link>}
      </div>
    </Center>
  );
};

export default Notice;
