module.exports = {
  plugins: {
    'postcss-mixins': {
      mixins: {
        textStyling: {
          'font-size': 'var(--mantine-font-size-sm)',
          'font-weight': 700,
          'line-height': '140%',
        },
      },
    },
    'postcss-preset-mantine': {},
    'postcss-simple-vars': {
      variables: {
        'mantine-breakpoint-xs': '36em',
        'mantine-breakpoint-sm': '48em',
        'mantine-breakpoint-md': '62em',
        'mantine-breakpoint-lg': '75em',
        'mantine-breakpoint-xl': '88em',
      },
    },
  },
};
