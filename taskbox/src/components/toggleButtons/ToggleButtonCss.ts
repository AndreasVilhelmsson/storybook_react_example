import { NormalizedCss } from '../../shared/global';
import '../../shared/globalColor.css';
import { css } from '@emotion/core';
export const ToggleButtonCss = [
  NormalizedCss,
  css`
    width: fit-content;

    .checkbox-label {
      display: inline-block;
      position: relative;
      width: 100%;
      height: 32px;
      border-radius: 100px;
      background-color: var(--gray-light);
      cursor: pointer;
    }

    .checkbox-label.checked {
      background-color: var(--primary);
    }

    .checkbox-input {
      appearance: initial;
      position: absolute;
      top: 3px;
      left: calc(0% + 3px);
      height: 26px;
      width: 26px;
      border-radius: 50%;
      vertical-align: 50%;
      background-color: var(--gray);
      cursor: pointer;
      transition: ease-in-out left 0.2s;
    }

    .checkbox-input:checked {
      left: calc(100% - 29px);
      background-color: var(--white);
    }

    .unchecked-text,
    .checked-text {
      display: block;
      text-align: center;
      line-height: 32px;
    }

    .unchecked-text {
      margin-top: -32px;
      padding-left: 44px;
      padding-right: 18px;
      color: var(--text-black);
      transition: opacity 0s;
      transition-delay: 0.2s;
      opacity: 1;
    }

    .checkbox-label.checked .unchecked-text {
      color: var(--text-white);
      transition-delay: 0s;
      opacity: 0;
    }

    .checked-text {
      padding-right: 44px;
      padding-left: 18px;
      color: var(--text-white);
      transition-delay: 0s;
      opacity: 0;
    }

    .checkbox-label.checked .checked-text {
      transition: opacity 0s;
      transition-delay: 0.2s;
      opacity: 1;
    }
  `,
];
