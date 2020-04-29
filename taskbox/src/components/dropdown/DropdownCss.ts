import { css } from '@emotion/core';

import { NormalizedCss } from '../../shared/global';

import '../../shared/globalColor.css';

export const DropdownCss = [
  NormalizedCss,
  css`
    z-index: 1000;
    min-width: 320px;
    height: 40px;
    display: inline-block;
    border: 1px solid var(--black);
    background-color: var(--white);
    color: var(--text-black);
    text-align: left;
    cursor: pointer;

    &:hover {
      border: 1px solid var(--primary);
    }

    &:disabled {
      background-color: var(--gray-light);
      cursor: not-allowed;
    }

    .dropdown-label {
      line-height: 40px;
      margin-left: 16px;
      cursor: pointer;
    }

    .dropdown-button:disabled .dropdown-label {
      color: var(--gray-dark);
      cursor: not-allowed;
    }

    .dropdown-arrow {
      height: 100%;
      margin-right: 11px;
      float: right;
    }

    .dropdown-arrow.open {
      transform: rotate(180deg);
    }

    .dropdown-container {
      margin-top: -1px;
      max-height: 0;
      width: fit-content;
      overflow: hidden;
      border-left: 1px solid var(--gray-medium);
      border-right: 1px solid var(--gray-medium);
      border-bottom: 1px solid var(--gray-medium);
      transition-property: max-height, opacity;
      transition-duration: 0.2s;
      transition-timing-function: ease-in-out;
    }

    .dropdown-container.open {
      max-height: 500px;
    }

    .dropdown-content {
      position: relative;
      display: block;
      min-width: 320px;
      z-index: 1000;
      line-height: 36px;
      padding-left: 16px;
      padding-right: 16px;
      background-color: var(--white);
      color: var(--text-black);
      text-decoration: none;
      transition-property: line-height;
      transition-timing-function: linear;
      transition-duration: 0s;
      transition-delay: 0s;
    }

    .dropdown-content.open {
      line-height: 36px;
      transition-delay: 0.2s;
    }

    .dropdown-content:hover {
      background-color: var(--gray);
    }
  `,
];
