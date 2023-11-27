import { RecipeVariantProps, cva } from '@/styled-system/css';

export const container = cva({
  base: {
    px: 'box',
    maxW: '51rem',
    m: '0 auto',
  },
  variants: {
    py: {
      true: { py: 'box' },
    },
  },
});

export type containerVariants = RecipeVariantProps<typeof container>;
