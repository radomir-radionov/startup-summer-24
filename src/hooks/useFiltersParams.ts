'use client';

import { useCustomSearchParams } from '.';

const useFiltersParams = () => {
  const { replace, pathname, params } = useCustomSearchParams();

  const handleChange = (value: string | null, key: string) => {
    if (value && key) {
      params.set(key, value);
    } else {
      params.delete(key);
    }

    replace(`${pathname}?${params}`, { scroll: false });
  };

  const handleReset = () => replace(pathname, { scroll: false });

  return {
    onFilterParamChange: handleChange,
    onFiltersParamsReset: handleReset,
  };
};

export default useFiltersParams;
