import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: [
    './src/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}',
    './app/**/*.{js,jsx,ts,tsx}',
  ],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: {
          white: { value: '#fff' },
          purple: {
            200: { value: '#C75AF6' },
            500: { value: '#ad1fea' },
          },
          skyBlue: {
            400: { value: '#62BCFA' },
          },
          blue: {
            200: { value: '#7C91F9' },
            500: { value: '#4661e6' },
            800: { value: '#373F68' },
          },
          grey: {
            50: { value: '#f7f8fd' },
            100: { value: '#f2f4ff' },
            300: { value: '#F7F8FD' },
          },
          blueGrey: {
            700: { value: '#647196' },
            800: { value: '#3A4374' },
          },
          peach: {
            500: { value: '#F49F85' },
          },
          red: {
            200: { value: '#E98888' },
            500: { value: '#D73737' },
          },
        },
      },
      semanticTokens: {
        colors: {
          primary: { value: { base: '{colors.purple.500}' } },
          primaryAlt: { value: { base: '{colors.purple.200}' } },
          secondary: { value: { base: '{colors.blue.200}' } },
          secondaryAlt: { value: { base: '{colors.blue.500}' } },
          planned: { value: { base: '{colors.peach.500}' } },
          inProgress: { value: { base: '{colors.purple.500}' } },
          live: { value: { base: '{colors.skyBlue.400}' } },
          danger: { value: { base: '{colors.red.500}' } },
          dangerAlt: { value: { base: '{colors.red.200}' } },
          background: {
            DEFAULT: { value: { base: '{colors.grey.300}' } },
            header: { value: { base: '{colors.blue.800}' } },
            formField: {
              value: { base: '{colors.grey.300}' },
            },
          },
          button: {
            background: {
              neutral: { value: { base: '{colors.grey.100}' } },
              neutralAlt: { value: { base: '{colors.grey.50}' } },
            },
            text: {
              DEFAULT: { value: { base: '{colors.bluegrey.800}' } },
              accent: { value: { base: '{colors.blue.500}' } },
            },
          },
          text: {
            DEFAULT: { value: { base: '{colors.bluegrey.700}' } },
            heading: { value: { base: '{colors.bluegrey.800}' } },
          },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: 'styled-system',
});
