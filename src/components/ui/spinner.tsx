import { Spinner as NextuiSpinner } from '@nextui-org/react';
import { type SpinnerProps } from '@nextui-org/react';
import React from 'react';

export const Spinner: React.FC<SpinnerProps> = ({ ...props }) => {
  props.color = 'primary';
  props.size = 'sm';
  return <NextuiSpinner {...props} />;
};
