/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as React from 'react';

import { ButtonCss } from './buttonCss';

interface Props extends React.ButtonHTMLAttributes<React.ReactNode> {
  text?: string;
  dark?: boolean;
  disabled?: boolean;
  onClick: () => void;
}

export const PrimaryButton = ({ className, text, dark, disabled, onClick, children, ...props }: Props) => (
  <button
    className={`primary-button ${dark ? 'dark' : ''} ${className || ''}`}
    disabled={disabled}
    css={ButtonCss}
    onClick={onClick}
    {...props}
  >
    {text || children}
  </button>
);
