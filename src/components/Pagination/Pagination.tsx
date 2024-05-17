'use client';

import { Button, Group, Pagination as MantinePagination } from '@mantine/core';
import classes from './Pagination.module.css';
import { usePagination } from '@mantine/hooks';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import getVisiblePages from './helpers/getVisiblePages';

type TProps = {
  totalPages: number;
  contentPosition?: 'center' | 'flex-end';
};

const Pagination = ({ totalPages, contentPosition = 'center' }: TProps) => {
  const { replace } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const genreParam = searchParams.get('page');
  const initialPage = genreParam !== null ? +genreParam : 1;

  const { active, setPage } = usePagination({
    total: totalPages,
    initialPage,
  });

  const pageRange = getVisiblePages(active, totalPages);

  return (
    <MantinePagination.Root total={10}>
      <Group justify={contentPosition}>
        <MantinePagination.Previous
          onClick={() => {
            setPage(active - 1);
          }}
          disabled={active === 1}
        />

        {pageRange.map((page) => (
          <Button
            key={page}
            onClick={() => {
              const params = new URLSearchParams(searchParams);

              page ? params.set('page', `${page}`) : params.delete('page');

              setPage(page);
              replace(`${pathname}?${params.toString()}`);
            }}
            variant={active === page ? 'filled' : 'outline'}
            data-active={active === page}
            className={classes.button}
          >
            {page}
          </Button>
        ))}

        <MantinePagination.Next
          onClick={() => {
            const params = new URLSearchParams(searchParams);
            const page = active + 1;

            page ? params.set('page', `${page}`) : params.delete('page');
            setPage(active + 1);
            replace(`${pathname}?${params.toString()}`);
          }}
          disabled={active === totalPages}
        />
      </Group>
    </MantinePagination.Root>
  );
};

export default Pagination;
