import { css } from '@emotion/core';

import { NormalizedCss } from '../../shared/global';

export const ToolTipCss = [
  NormalizedCss,
  css`
    position: absolute;
    z-index: 100;
    transition: max-height 0.2s ease-in-out;
    overflow: hidden;

    &.is-visible {
      max-height: 10em;
    }

    &.is-not-visible {
      max-height: 0;
    }

    ::before {
      position: relative;
      display: block;
      width: 0;
      height: 0;
      margin-left: 28px;
      content: '';
      border-left: 13px solid transparent;
      border-right: 13px solid transparent;
      border-bottom: 13px solid var(--primary);
    }

    .tooltip {
      width: max-content;
      min-width: 100px;
      max-width: 500px;
      min-height: 3rem;
      border: 1px solid var(--gray);
      border-top: 2px solid var(--primary);
      background-color: var(--white);
    }

    .tooltip > *:not(.tooltip-close-button) {
      margin: 28px;
    }

    .tooltip-close-button {
      float: right;
      position: relative;
      display: block;
      margin-top: 10px;
      margin-right: 10px;
      cursor: pointer;
    }
  `,
];

export const ToolTipButtonCss = [
  NormalizedCss,
  css`
    width: fit-content;
    cursor: pointer;

    .tooltip-button-text {
      padding-left: 6px;
      height: 16px;
      vertical-align: middle;
      color: var(--primary);
    }

    .tooltip-button-icon {
      vertical-align: middle;
    }
  `,
];
