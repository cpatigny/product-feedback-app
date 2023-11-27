import { RecipeVariantProps, cva } from '@/styled-system/css';

export const box = cva({
  base: {
    p: 'box',
  },
  variants: {
    py: {
      false: { py: '0' },
    },
    bg: {
      content: { bg: 'bg.content' },
    },
    rounded: {
      main: { rounded: 'main' },
    },
  },
});

export type BoxVariants = RecipeVariantProps<typeof box>;
