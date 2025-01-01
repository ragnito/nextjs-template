import {
  Button as NextuiButton,
  extendVariants,
} from '@nextui-org/react';

export const Button = extendVariants(NextuiButton, {
  defaultVariants: {
    size: 'sm',
    radius: 'sm',
  },
});
