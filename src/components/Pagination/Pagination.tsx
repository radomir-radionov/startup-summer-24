'use client';

import { Button, Group, Pagination as MantinePagination } from '@mantine/core';
import classes from './Pagination.module.css';
import { usePagination } from '@mantine/hooks';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import getVisiblePages from './helpers/getVisiblePages';
import { useEffect } from 'react';

type TProps = {
  totalItems: number;
  itemsPerPage: number;
  contentPosition?: 'center' | 'flex-end';
};

// TODO: do smth with the same logic

const Pagination = ({
  totalItems,
  itemsPerPage,
  contentPosition = 'center',
}: TProps) => {
  const { replace } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const genreParam = searchParams.get('page');
  const initialPage = genreParam !== null ? +genreParam : 1;

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const { active, setPage } = usePagination({
    total: totalPages,
    initialPage,
  });

  const pageRange = getVisiblePages(active, totalPages);

  const handlePagination = (direction: 'next' | 'previous') => {
    const params = new URLSearchParams(searchParams);
    const newPage = direction === 'next' ? active + 1 : active - 1;

    newPage ? params.set('page', `${newPage}`) : params.delete('page');

    setPage(newPage);
    replace(`${pathname}?${params.toString()}`);
  };

  const handleButtonPageClick = (page: number) => {
    const params = new URLSearchParams(searchParams);

    page ? params.set('page', `${page}`) : params.delete('page');

    setPage(page);
    replace(`${pathname}?${params.toString()}`);
  };

  useEffect(() => {
    if (pageRange.length === 1) {
      setPage(pageRange[0]);

      const params = new URLSearchParams(searchParams);

      params.set('page', '1');
      replace(`${pathname}?${params.toString()}`);
    }
  }, [pageRange]);

  return (
    pageRange.length > 1 && (
      <MantinePagination.Root total={totalPages}>
        <Group justify={contentPosition}>
          <MantinePagination.Previous
            className={classes.button}
            onClick={() => handlePagination('previous')}
            disabled={active === 1}
          />

          {pageRange.map((page) => (
            <Button
              key={page}
              variant={active === page ? 'filled' : 'outline'}
              data-active={active === page}
              className={classes.button}
              onClick={() => handleButtonPageClick(page)}
            >
              {page}
            </Button>
          ))}

          <MantinePagination.Next
            className={classes.button}
            onClick={() => handlePagination('next')}
            disabled={active === totalPages}
          />
        </Group>
      </MantinePagination.Root>
    )
  );
};

export default Pagination;
