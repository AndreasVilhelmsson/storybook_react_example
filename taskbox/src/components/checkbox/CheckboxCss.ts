import { css } from '@emotion/core';

import { NormalizedCss } from '../../shared/global';

export const CheckboxCss = [
  NormalizedCss,
  css`
    height: 20px;
    width: fit-content;
    display: grid;
    grid-template-columns: 20px fit-content(200px);
    grid-column-gap: 10px;

    .checkbox-input {
      width: 100%;
      height: 100%;
      border: 1px solid var(--black);
      grid-column: 1/1;
      grid-row: 1/1;
      cursor: pointer;
      -webkit-appearance: none;
    }

    .checkbox-input:hover,
    .checkbox-input:checked {
      border-color: var(--primary);
    }

    .checkbox-input:required {
      border-color: var(--red);
    }

    .checkbox-input:disabled {
      background-color: var(--gray-light);
      border-color: var(--gray-dark);
      cursor: not-allowed;
    }

    .checkbox-input:required:hover,
    .checkbox-input:required:checked {
      border-color: var(--primary);
    }

    .checkbox-checkmark {
      width: 100%;
      height: 100%;
      grid-column: 1/1;
      grid-row: 1;
      align-self: center;
      justify-self: center;
      pointer-events: none;
    }

    .checkbox-checkmark.disabled {
      path {
        fill: var(--gray-dark);
      }
    }

    .checkbox-label {
      align-self: center;
      justify-self: center;
      grid-column: 2/2;
      grid-row: 1;
      cursor: pointer;
    }

    .checkbox-label.disabled {
      cursor: not-allowed;
    }
  `,
];
