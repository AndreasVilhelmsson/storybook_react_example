import { css } from '@emotion/core';

import { NormalizedCss } from '../../shared/global';

export const RadioButtonCss = [
  NormalizedCss,
  css`
    display: inline-block;

    .radio-text {
      margin-left: 10px;
      display: inherit;
      cursor: pointer;
    }

    .radio-text.disabled {
      cursor: not-allowed;
    }

    .radio-input {
      visibility: hidden;
      width: 20px;
      height: 20px;
      vertical-align: sub;
      margin: 0;
    }

    .radio-input:disabled {
      cursor: not-allowed;
    }

    .radio-input::before {
      width: 20px;
      height: 20px;
      border: 1px solid var(--black);
      border-radius: 50%;
      visibility: visible;
      content: '';
      cursor: pointer;
      display: block;
      background-color: var(--white);
      box-sizing: border-box;
      transition: border 0.1s;
    }

    .radio-input:hover::before {
      border: 1px solid var(--primary);
    }

    .radio-input:checked::before {
      border: 6px solid var(--primary);
    }

    .radio-input:required::before {
      border: 1px solid var(--red);
      background-color: var(--white);
    }

    .radio-input:disabled::before {
      border: 1px solid var(--gray-dark);
      background-color: var(--gray-light);
      cursor: not-allowed;
    }

    .radio-input:checked:disabled::before {
      border: 6px solid var(--gray-dark);
    }
  `,
];
