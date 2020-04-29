/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import * as React from 'react';

import { SmallButtonCss } from './SmallButtonCss';

import '../../shared/globalColor.css';

const SecondarySmallButtonCss = [
  SmallButtonCss,
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

export const SmallSecondaryButton = ({ className, text, dark, disabled, onClick, children, ...props }: Props) => (
  <button
    className={`secondary-button ${dark ? 'dark' : ''} ${className || ''}`}
    css={SecondarySmallButtonCss}
    disabled={disabled}
    onClick={onClick}
    {...props}
  >
    {text || children}
  </button>
);
