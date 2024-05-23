'use client';

import { createTheme, rem } from '@mantine/core';

const theme = createTheme({
  colors: {
    grayScale: [
      '#FFFFFF',
      '#F5F5F6',
      '#EAEBED',
      '#D5D6DC',
      '#ACADB9',
      '#7B7C88',
      '#232134',
      '',
      '',
      '',
    ],
    purple: [
      '#F2ECFA',
      '#E5D5FA',
      '#D1B4F8',
      '#BD93F7',
      '#9854F6',
      '#541F9D',
      '',
      '',
      '',
      '',
    ],
    yellow: ['#FAB005', '', '', '', '', '', '', '', '', ''],
  },
  fontSizes: {
    xs: rem(14),
    sm: rem(16),
    md: rem(20),
    lg: rem(32),
  },
  lineHeights: {
    xs: '1.2',
    sm: '1.3',
    md: '1.4',
    lg: '1.5',
    xl: '1.6',
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.375rem',
    md: '0.5rem',
    xmd: '0.625rem',
    lg: '0.75rem',
    xlg: '1rem',
    xl: '1.25rem',
    xxl: '1.5rem',
  },
  headings: {
    sizes: {
      h2: {
        fontSize: rem(32),
        lineHeight: 'var(--mantine-line-height-md)',
      },
    },
  },
});

export default theme;
