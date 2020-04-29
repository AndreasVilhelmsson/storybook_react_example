import { css } from '@emotion/core';

import { NormalizedCss } from '../../shared/global';

export const InputFieldCss = [
  NormalizedCss,
  css`
    input {
      display: block;
      height: 40px;
      width: 320px;
      padding: 8px 12px;
      margin-top: 3px;
      border: var(--black) solid 1px;
      background-color: var(--white);
      color: var(--black);
      cursor: text;

      &:hover {
        border: var(--secondary) solid 1px;
      }
      &:active {
        border: var(--secondary) solid 1px;
      }
      &:disabled {
        border-color: var(--gray-dark);
        background-color: var(--gray-light);
        color: var(--text-disabled);
        cursor: default;
      }
      &:disabled:hover {
        border-color: var(--gray-dark);
      }
      &.input-info {
        color: var(--black);
        background-color: var(--gray-light);
        border-color: var(--gray-dark);
      }
      &.input-info:hover {
        border-color: var(--gray-dark);
      }
      &.input-invalid {
        border-color: var(--red);
        background-color: var(--white);
      }
      &.input-invalid:hover {
        border-color: var(--red);
        background-color: var(--white);
      }
    }
  `,
];
