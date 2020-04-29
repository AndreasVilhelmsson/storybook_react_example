/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import * as React from 'react';

import { ButtonCss } from './buttonCss';

const DeleteButtonCss = [
  ButtonCss,
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

export const DeleteButton = ({ className, text, dark, disabled, onClick, children, ...props }: Props) => (
  <button
    className={`delete-button ${dark ? 'dark' : ''} ${className || ''}`}
    disabled={disabled}
    css={DeleteButtonCss}
    onClick={onClick}
    {...props}
  >
    {text || children}
  </button>
);
