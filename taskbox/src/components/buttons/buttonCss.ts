import { css } from '@emotion/core';

import { NormalizedCss } from '../../shared/global';

import '../../shared/globalColor.css';

export const ButtonCss = [
  NormalizedCss,
  css`
    min-width: 168px;
    padding: 12px 35px;
    background-color: var(--primary);
    border: var(--primary) solid 1px;
    border-radius: 25px;
    color: var(--text-white);
    font-size: 16px;
    line-height: 22px;
    font-family: var(--text-font-bold);
    cursor: pointer;

    &:hover {
      border: var(--secondary) solid 1px;
      background-color: var(--secondary);
    }

    &:active {
      border: var(--primary-dark) solid 1px;
      background-color: var(--primary-dark);
    }

    &:disabled {
      border: var(--gray-light) solid 1px;
      background-color: var(--gray-light);
      color: var(--text-disabled);
      cursor: default;
    }

    &.dark:disabled {
      background-color: var(--gray);
    }
  `,
];
