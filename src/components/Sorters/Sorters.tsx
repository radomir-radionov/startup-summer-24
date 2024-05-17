'use client';

import { Select } from '../ui';
import sorters from './data.ts/data';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Flex } from '@mantine/core';

const Sorters = () => {
  const { replace } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleSortingChange = (value: string | null) => {
    const params = new URLSearchParams(searchParams);

    if (value) {
      params.set('sort_by', value);
    } else {
      params.delete('sort_by');
    }

    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <Flex justify="flex-end">
      <Select
        onChange={handleSortingChange}
        label="Sort by"
        placeholder="Select sorting"
        data={sorters}
        defaultValue={searchParams.get('sort_by')?.toString()}
      />
    </Flex>
  );
};

export default Sorters;
