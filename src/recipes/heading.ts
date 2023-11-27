import { RecipeVariantProps, cva } from '@/styled-system/css';

export const heading = cva({
  base: {
    fontSize: 'heading',
    color: 'text.heading',
    fontWeight: 'bold',
  },
  variants: {
    subheading: {
      true: {
        fontSize: 'heading.sub',
      },
    },
  },
});

export type headingVariants = RecipeVariantProps<typeof heading>;
