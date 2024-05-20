import { TextInput as MantineTextInput } from '@mantine/core';
import classes from './TextInput.module.css';

type TProps = {
  // value: string;
  placeholder: string;
  rightSection: any;
  leftSection: any;
};

const TextInput = ({
  placeholder,
  rightSection,
  leftSection,
  ...props
}: TProps) => {
  return (
    <MantineTextInput
      placeholder={placeholder}
      rightSection={rightSection}
      leftSection={leftSection}
      classNames={classes}
      {...props}
    />
  );
};

export default TextInput;
