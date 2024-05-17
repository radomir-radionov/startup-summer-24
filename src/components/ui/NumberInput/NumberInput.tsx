import {
  NumberInput as MantineNumberInput,
  NumberInputProps,
} from '@mantine/core';
import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import classes from './NumberInput.module.css';

type TProps = NumberInputProps &
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

const NumberInput = (props: TProps) => {
  return (
    <MantineNumberInput variant="unstyled" {...props} classNames={classes} />
  );
};

export default NumberInput;
