/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import * as React from 'react';

import { ButtonCss } from './buttonCss';

const SecondaryButtonCss = [
  ButtonCss,
  css`
    color: var(--text-black);
    background-color: var(--secondary-bg);
    border: var(--primary) solid 1px;

    &:hover {
      border: var(--secondary) solid 1px;
      background-color: var(--secondary);
      color: var(--text-white);
    }

    &:active {
      border: var(--primary-dark) solid 1px;
      background-color: var(--primary-dark);
      color: var(--text-white);
    }
  `,
];

interface Props extends React.ButtonHTMLAttributes<React.ReactNode> {
  text?: string;
  dark?: boolean;
  disabled?: boolean;
  onClick: () => void;
}

export const SecondaryButton = ({ className, text, dark, disabled, onClick, children, ...props }: Props) => (
  <button
    className={`secondary-button ${dark ? 'dark' : ''} ${className || ''}`}
    css={SecondaryButtonCss}
    disabled={disabled}
    onClick={onClick}
    {...props}
  >
    {text || children}
  </button>
);
