/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as React from 'react';

interface Props extends React.LabelHTMLAttributes<React.ReactNode> {
  disabled?: boolean;
  required?: boolean;
  big?: boolean;
  dark?: boolean;
}

export const TextLabel = ({ className, disabled, required, big, dark, children, ...props }: Props) => {
  let currentColor = 'var(--black)';
  if (required) {
    currentColor = 'var(--red)';
  } else if (disabled && dark) {
    currentColor = 'var(--gray-dark)';
  } else if (disabled) {
    currentColor = 'var(--gray-medium)';
  }
  return (
    <label
      className={`text-label ${disabled ? 'disabled' : ''} ${className || ''} `}
      css={[
        `color: ${currentColor}; 
        font-size: ${big ? '16px' : '12px'};`,
      ]}
      {...props}
    >
      {children}
    </label>
  );
};
