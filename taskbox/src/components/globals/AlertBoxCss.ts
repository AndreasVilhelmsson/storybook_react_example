import { css } from '@emotion/core';

import { NormalizedCss } from '../../shared/global';

export const AlertBoxCss = [
  NormalizedCss,
  css`
    ::before {
      position: relative;
      display: block;
      margin-left: 150px;
      width: 0;
      height: 0;
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
      border-bottom: 10px solid var(--gray-light);
      content: '';
    }

    .alertbox {
      display: flex;
      min-width: 316px;
      min-height: 35px;
      width: max-content;
      border: 1px solid var(--gray-light);
      border-top: 2px solid var(--gray-light);
      background-color: var(--gray-light);
      transition-property: opacity;
      transition-duration: 2s;
    }

    p {
      padding-top: 6px;
      text-align: center;
    }

    .alertbox-icon {
      margin: 5px;
    }
  `,
];
