'use client';

import {
  Input,
  InputBase,
  Combobox,
  useCombobox,
  Text,
  Pill,
} from '@mantine/core';
import Icons from '@/assets/icons';
import { useDisclosure } from '@mantine/hooks';
import classes from './Dropdown.module.css';
import Option from '../Option/Option';

type TProps = {
  label: string;
  placeholder: string;
  data: TCustomGenre[];
  value: string[];
  onChange: any;
  defaultValue?: string;
};

type TCustomGenre = {
  id: number;
  value: string;
  label: string;
};

const Dropdown = ({
  label,
  placeholder,
  data,
  value,
  onChange,
  defaultValue,
}: TProps) => {
  const [dropdownOpened, { toggle }] = useDisclosure();
  const combobox = useCombobox({
    onDropdownClose: () => {
      toggle();
      combobox.resetSelectedOption();
    },
    onDropdownOpen: () => toggle(),
  });

  const existingGenres = data.filter((item) => value.includes(item.value));

  const handleValueSelect = (val: string) => {
    onChange((current: string[]) =>
      current.includes(val)
        ? current.filter((v) => v !== val)
        : [...current, val]
    );

    combobox.updateSelectedOptionIndex('active');
  };

  const handleValueRemove = (id: number) => {
    onChange((current: string[]) => current.filter((item) => item !== `${id}`));
  };

  return (
    <Combobox store={combobox} onOptionSubmit={handleValueSelect}>
      <Combobox.Target>
        <InputBase
          component="div"
          multiline
          label={label}
          pointer
          rightSection={
            dropdownOpened ? (
              <Icons.chevronDown stroke="var(--mantine-color-purple-4)" />
            ) : (
              <Icons.chevronUp />
            )
          }
          rightSectionPointerEvents="none"
          onClick={() => combobox.toggleDropdown()}
          classNames={classes}
          defaultValue={defaultValue}
        >
          {existingGenres.length ? (
            <Pill.Group classNames={classes}>
              {existingGenres.map((genre) => {
                const currentGenreIndex = existingGenres.findIndex(
                  (existingGenre) => existingGenre.id === genre.id
                );
                const isLast = currentGenreIndex === existingGenres.length - 1;

                return (
                  <Pill key={genre.id} className={classes.pill}>
                    <Text
                      component="span"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleValueRemove(genre.id);
                      }}
                    >
                      {genre.label}
                      {isLast ? '' : ','}
                    </Text>
                  </Pill>
                );
              })}
            </Pill.Group>
          ) : (
            <Input.Placeholder>{placeholder}</Input.Placeholder>
          )}
        </InputBase>
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Options h={224} style={{ overflowY: 'auto' }}>
          {data?.map(({ id, value, label }) => {
            const isActive = existingGenres.some((item) => item.id === id);
            return (
              <Option
                key={id}
                id={id}
                value={value}
                isActive={isActive}
                label={label}
              />
            );
          })}
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
};

export default Dropdown;