import { Logo, Notice } from '@/components/ui';
import { Center } from '@mantine/core';
import classes from './not-found.module.css';

const NotFound = () => (
  <Center h="100%" bg="grayScale.2">
    <Logo outerStyles={classes.logo} />
    <Notice variant="notFound" />
  </Center>
);

export default NotFound;
