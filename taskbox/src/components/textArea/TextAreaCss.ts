import { NormalizedCss } from '../../shared/global';
import { css } from '@emotion/core';

export const TextAreaCss = [
  NormalizedCss,
  css`
    position: relative;
    min-width: 520px;
    min-height: 150px;
    line-height: 1.5em;
    background-color: var(--white);
    border: 1px solid var(--black);
    padding: 13px 16px;

    &:hover {
      border: 1px solid var(--primary);
    }

    &:focus {
      border: 1px solid var(--primary);
    }

    &:disabled {
      border: 1px solid var(--gray-dark);
      background-color: var(--gray-light);
    }
  `,
];
