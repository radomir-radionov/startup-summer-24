'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const useCustomSearchParams = () => {
  const { replace } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const params = new URLSearchParams(searchParams);

  return {
    replace,
    pathname,
    params,
  };
};

export default useCustomSearchParams;
