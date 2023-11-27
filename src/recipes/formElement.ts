import { RecipeVariantProps, cva } from '@/styled-system/css';

export const formElement = cva({
  base: {
    display: 'block',
    p: '0.7rem 1rem',
    w: '100%',
    bg: 'neutralAlt',
    rounded: 'formElement',
    color: 'text.formField',
    outline: 'none',
    border: '1px solid transparent',
    _focus: {
      borderColor: 'secondary',
    },
  },
});

export type formElementVariants = RecipeVariantProps<typeof formElement>;
