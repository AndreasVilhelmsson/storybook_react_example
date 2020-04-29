/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import * as React from 'react';

import { SmallButtonCss } from './SmallButtonCss';

const SmallDeleteButtonCss = [
  SmallButtonCss,
  css`
    border: var(--red) solid 1px;
    color: var(--text-black);
    background-color: var(--white);

    &:hover {
      border: var(--red) solid 1px;
      background-color: var(--red);
      color: var(--text-white);
    }

    &:active {
      border: var(--red-dark solid 1px);
      background-color: var(--red-dark);
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

export const SmallDeleteButton = ({ className, text, dark, disabled, onClick, children, ...props }: Props) => (
  <button
    className={`delete-button ${dark ? 'dark' : ''} ${className || ''}`}
    css={SmallDeleteButtonCss}
    disabled={disabled}
    onClick={onClick}
    {...props}
  >
    {text || children}
  </button>
);
