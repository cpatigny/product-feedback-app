import { RecipeVariantProps, cva } from '@/styled-system/css';

export const button = cva({
  base: {
    p: '0.6rem 1rem',
    rounded: 'main',
    cursor: 'pointer',
    transitionDuration: '300ms',
  },
  variants: {
    color: {
      primary: {
        bg: 'primary',
        color: 'neutral',

        _hover: {
          bg: 'primaryAlt',
        },
      },
    },
  },
  defaultVariants: {
    color: 'primary',
  },
});

export type buttonVariants = RecipeVariantProps<typeof button>;
