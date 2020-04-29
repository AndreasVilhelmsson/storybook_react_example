import { css } from '@emotion/core';

import { NormalizedCss } from '../../shared/global';

export const SearchFieldCss = [
  NormalizedCss,
  css`
    width: 350px;
    height: 40px;
    display: grid;
    grid-template-columns: 50px auto;
    border: 1px solid var(--black);
    border-radius: 20px;
    background-color: var(--white);

    .searchfield-icon {
      grid-row: 1;
      grid-column: 1/2;
      align-self: center;
      justify-self: center;
    }

    .searchfield-input {
      width: 100%;
      height: 100%;
      line-height: 1.5;
      grid-row: 1;
      grid-column: 2/3;
      color: var(--black);
      cursor: text;

      &:active {
        color: var(--black) solid 1px;
      }
    }
  `,
];
