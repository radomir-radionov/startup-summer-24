'use client';

import { Inter } from 'next/font/google';
import { createTheme, rem } from '@mantine/core';

const inter = Inter({ subsets: ['latin'] });

const theme = createTheme({
  fontFamily: inter.style.fontFamily,
  breakpoints: {
    xs: '36em',
    sm: '48em',
    md: '64em',
    lg: '74em',
    xl: '90em',
  },
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
      '#F2EBF9',
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
    s: rem(12),
    xs: rem(14),
    sm: rem(16),
    md: rem(20),
    xmd: rem(24),
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
    s: rem(8),
    xs: rem(10),
    sm: rem(12),
    md: rem(16),
    xmd: rem(20),
    lg: rem(24),
    xlg: rem(40),
  },
  radius: {
    s: rem(4),
    xs: rem(8),
    sm: rem(12),
    md: rem(16),
    lg: rem(20),
    xl: rem(40),
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
