import { css } from '@emotion/core';
import { NormalizedCss } from '../../shared/global';

export const SmallButtonCss = [
  NormalizedCss,
  css`
    min-width: 108px;
    padding: 5px 18px;
    background-color: var(--primary);
    border: var(--primary) solid 1px;
    border-radius: 25px;
    color: var(--text-white);
    line-height: 20px;
    font-family: var(--text-font-bold);
    font-size: 14px;
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
      cursor: not-allowed;
    }

    &.dark:disabled {
      background-color: var(--gray);
    }
  `,
];
