import { Combobox } from '@mantine/core';
import classes from './Option.module.css';

type TProps = {
  id: number;
  value: string;
  isActive: boolean;
  label: string;
};

const Option = ({ id, value, isActive, label }: TProps) => {
  return (
    <Combobox.Option
      key={id}
      value={value}
      active={isActive}
      className={classes.option}
    >
      {label}
    </Combobox.Option>
  );
};

export default Option;
