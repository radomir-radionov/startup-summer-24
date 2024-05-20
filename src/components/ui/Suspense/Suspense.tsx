'use client';

import { ReactNode, Suspense as ReactSuspense } from 'react';
import { Center, Loader } from '@mantine/core';

type TProps = {
  keyProp?: string;
  children: ReactNode;
};

const Suspense = ({ keyProp, children }: TProps) => {
  return (
    <ReactSuspense
      key={keyProp}
      fallback={
        <Center h="100%">
          <Loader />
        </Center>
      }
    >
      {children}
    </ReactSuspense>
  );
};

export default Suspense;
