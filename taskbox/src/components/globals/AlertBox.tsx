/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as React from 'react';

import { AlertBoxCss } from './AlertBoxCss';
import { SVGIcon } from '../globals/SVGIcon';

interface Props extends React.HTMLAttributes<React.ReactNode> {
  text?: string;
  show?: boolean;
}

export const AlertBox = ({ className, text, children, show, ...props }: Props) => (
  <React.Fragment>
    {show && (
      <div css={AlertBoxCss} {...props}>
        <div className={`alertbox ${className || ''}`}>
          <SVGIcon name="warning" width="17.5px" height="17.5px" fill="var(--red)" className="alertbox-icon" />
          {children || <p>{text}</p>}
        </div>
      </div>
    )}
  </React.Fragment>
);
