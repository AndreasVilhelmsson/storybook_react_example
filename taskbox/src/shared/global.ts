import { css } from '@emotion/core';
import './globalColor.css';
import './globalFont.css';

export const NormalizedCss = css`
  border: none;
  background: none;
  outline: none;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  vertical-align: baseline;
  font-family: var(--text-font);
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  font-variant: normal;
  line-height: 20px;

  * {
    border: none;
    background: none;
    outline: none;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    vertical-align: baseline;
    font-family: var(--text-font);
    font-size: 16px;
    font-weight: 400;
    font-weight: normal;
    font-style: normal;
    font-variant: normal;
    line-height: 1.2em;
  }

  blockquote {
    font-family: var(--text-font);
    font-size: 21px;
    font-style: normal;
    font-variant: normal;
    font-weight: 400;
    line-height: 30px;
  }

  pre {
    font-family: var(--text-font);
    font-size: 13px;
    font-style: normal;
    font-variant: normal;
    font-weight: 400;
    line-height: 18.5714px;
  }

  *:not(h1, h2, h3, h4, h5, h6) {
    font-size: 16px;
  }

  h1 {
    font-family: var(--big-header-font);
    font-size: 24px;
    font-style: normal;
    font-variant: normal;
    font-weight: 700;
    line-height: 26.4px;
  }

  h2 {
    font-family: var(--big-header-font);
    font-size: 20px;
    font-weight: 700;
    line-height: 30px;
    color: var(--primary);
  }

  h3 {
    font-family: var(--small-header-font);
    font-size: 16px;
    font-style: normal;
    font-variant: normal;
    font-weight: 700;
    line-height: 20px;
  }

  h4,
  h5,
  h6 {
    font-family: var(--small-header-font);
  }

  &:active {
    outline: none;
  }
`;
