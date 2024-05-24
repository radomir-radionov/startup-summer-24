'use client';

import { Button } from '@/components/ui';
import { Box, Group, Text, Title } from '@mantine/core';
import { useRouter } from 'next/navigation';

type TProps = { error: Error & { digest?: string }; reset: () => void };

const ErrorComponent = ({ error, reset }: TProps) => {
  const router = useRouter();

  const handleReturnHome = () => {
    router.back();
  };

  return (
    <Box>
      <Title order={2}>Something went wrong!</Title>
      <Text>
        Please try again later or contact support. If the problem persists, use
        the following error information:
      </Text>
      <Text style={{ color: 'red' }}>Error: {error.message}</Text>
      {error.digest && (
        <Text style={{ color: 'gray' }}>Details: {error.digest}</Text>
      )}
      <Group mt={10} gap={20}>
        <Button onClick={reset}>Try again</Button>
        <Button onClick={handleReturnHome}>Back</Button>
      </Group>
    </Box>
  );
};

export default ErrorComponent;
