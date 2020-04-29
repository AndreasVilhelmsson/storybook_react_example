/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as React from 'react';

import { SmallButtonCss } from './SmallButtonCss';

import '../../shared/globalColor.css';

const SmallPrimaryButtonCss = [SmallButtonCss];

interface Props extends React.ButtonHTMLAttributes<React.ReactNode> {
  text?: string;
  dark?: boolean;
  disabled?: boolean;
  onClick: () => void;
}

export const SmallPrimaryButton = ({ className, text, dark, disabled, onClick, children, ...props }: Props) => (
  <button
    className={`primary-button ${dark ? 'dark' : ''} ${className || ''}`}
    css={SmallPrimaryButtonCss}
    disabled={disabled}
    onClick={onClick}
    {...props}
  >
    {text || children}
  </button>
);
