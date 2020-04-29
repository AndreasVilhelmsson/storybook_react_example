/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as React from 'react';
import { HTMLAttributes } from 'react';
import { ToolTipButtonCss } from './ToolTipCss';
import { SVGIcon } from '../globals/SVGIcon';
import { ToolTip } from './ToolTip';

interface Props extends HTMLAttributes<React.ReactNode> {
  buttonText: string;
  tooltipText?: string;
  display: boolean;
  onClick: () => void;
}

export const ToolTipButton = ({ className, buttonText, tooltipText, children, display, onClick, ...props }: Props) => (
  <div css={ToolTipButtonCss} className={className} onClick={onClick} {...props}>
    <SVGIcon className="tooltip-button-icon" width="16" height="16" name="circle-information" fill="var(--primary)" />
    <span className="tooltip-button-text">{buttonText}</span>
    <ToolTip display={display} text={tooltipText}>
      {children}
    </ToolTip>
  </div>
);
