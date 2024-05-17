import Icons from '@/assets/icons';
import { Select as MantineSelect, SelectProps } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './Select.module.css';

type TProps = SelectProps;

const Select = (props: TProps) => {
  const [dropdownOpened, { toggle }] = useDisclosure();

  return (
    <MantineSelect
      {...props}
      classNames={classes}
      onDropdownOpen={toggle}
      onDropdownClose={toggle}
      rightSection={
        dropdownOpened ? (
          <Icons.chevronDown stroke="var(--mantine-color-purple-4)" />
        ) : (
          <Icons.chevronUp />
        )
      }
      withCheckIcon={false}
    />
  );
};

export default Select;
