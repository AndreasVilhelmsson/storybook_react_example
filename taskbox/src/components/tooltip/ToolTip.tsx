/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as React from 'react';
import { SVGIcon } from '../globals/SVGIcon';

import { ToolTipCss } from './ToolTipCss';

interface Props extends React.HTMLAttributes<React.ReactNode> {
  text?: string;
  display: boolean;
  closeButton?: boolean;
  onClick?: () => void;
}

export const ToolTip = ({ display, text, className, closeButton, onClick, children, ...props }: Props) => (
  <div
    className={`tooltip-container ${display ? 'is-visible' : 'is-not-visible'} ${className || ''}`}
    {...props}
    css={ToolTipCss}
  >
    <div className="tooltip">
      {closeButton && (
        <span className="tooltip-close-button" onClick={onClick}>
          <SVGIcon className="tooltip-cross-icon" width="10" height="10" name="close" />
        </span>
      )}
      {children || <p>{text}</p>}
    </div>
  </div>
);
