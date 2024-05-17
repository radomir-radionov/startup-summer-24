import { Combobox, Pill, PillsInput } from '@mantine/core';

type TProps = {
  values: any;
};

const PillGroup = ({ values }: TProps) => {
  return (
    <Pill.Group>
      {values}

      {/* <Combobox.EventsTarget>
        <PillsInput.Field
          onFocus={() => combobox.openDropdown()}
          onBlur={() => combobox.closeDropdown()}
          value={search}
          placeholder="Search values"
          onChange={(event) => {
            combobox.updateSelectedOptionIndex();
            setSearch(event.currentTarget.value);
          }}
          onKeyDown={(event) => {
            if (event.key === 'Backspace' && search.length === 0) {
              event.preventDefault();
              handleValueRemove(value[value.length - 1]);
            }
          }}
        /> */}
      {/* </Combobox.EventsTarget> */}
    </Pill.Group>
  );
};

export default PillGroup;
