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

    if (params.has('page')) params.set('page', '1');

    replace(`${pathname}?${params}`, { scroll: false });
  };

  const handleReset = (preserveKey?: string) => {
    const newParams = new URLSearchParams();

    if (preserveKey && params.has(preserveKey)) {
      newParams.set(preserveKey, params.get(preserveKey) as string);
    }

    newParams.set('page', '1');

    replace(`${pathname}?${newParams}`, { scroll: false });
  };

  return {
    onFilterParamChange: handleChange,
    onFiltersParamsReset: handleReset,
  };
};

export default useFiltersParams;
