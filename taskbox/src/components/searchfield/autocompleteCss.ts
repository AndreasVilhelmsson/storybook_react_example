import { NormalizedCss } from '../../shared/global';
import { css } from '@emotion/core';
import '../../shared/globalFont.css';

export const autoCompleteCss = [
  NormalizedCss,
  css`
    width: 320px;
    height: 40px;

    .suggestion-searchbar {
      width: 100%;
      height: 100%;
      display: grid;
      grid-template-columns: auto 45px;
    }

    .suggestion-searchbar-input {
      padding-left: 15px;
      grid-row: 1;
      grid-column: 1/3;
      border: 1px solid var(--black);
    }

    .suggestion-searchbar-input:hover {
      border: 1px solid var(--primary);
    }

    .suggestion-searchbar-input:focus {
      border: 1px solid var(--primary);
    }

    .suggestion-searchbar-input:disabled {
      background-color: var(--gray-light);
      color: var(--gray-dark);
    }

    .suggestion-searchbar-icon {
      grid-column: 2/3;
      grid-row: 1;
      justify-self: center;
      align-self: center;
    }

    .suggestion-searchbar-icon.disabled path {
      fill: var(--gray-dark);
    }

    .suggestion-dropdown {
      position: relative;
      z-index: 1000;
      margin-top: -1px;
      background-color: var(--white);
      border: 1px solid var(--black);
      animation: slide-up 0.2s ease;
    }

    .suggestion-item {
      z-index: 1000;
      position: relative;
      display: block;
      line-height: 40px;
      height: 40px;
      padding-left: 15px;
      list-style-type: none;
    }

    .suggestion-item.active {
      background-color: var(--gray);
    }

    .suggestion-item:hover {
      background-color: var(--gray);
    }

    .suggestion-item.placeholder {
      background-color: var(--gray-light);
      color: var(--gray-dark);
      font-family: var(--text-font-italic);
    }

    .suggestion-item-searchterm {
      font-weight: bold;
    }
    @keyframes slide-up {
      0% {
        max-height: 0;
        overflow: hidden;
      }
      100% {
        max-height: 20em;
        overflow: visible;
      }
    }
  `,
];
