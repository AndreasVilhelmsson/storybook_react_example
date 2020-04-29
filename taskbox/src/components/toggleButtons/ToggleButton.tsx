/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as React from 'react';

import { ToggleButtonCss } from './ToggleButtonCss';
import { TextLabel } from '../globals/TextLabel';

interface Props extends React.InputHTMLAttributes<React.ReactNode> {
  checkedText?: string;
  uncheckedText?: string;
  checked: boolean;
  onClick: () => void;
}

export const ToggleButton = ({ checked, onClick, className, checkedText, uncheckedText, ...props }: Props) => {
  return (
    <div className={`switch ${className || ''}`} css={ToggleButtonCss} {...props}>
      <label className={`checkbox-label ${checked ? 'checked' : ''}`}>
        <TextLabel big className="checked-text">
          {checkedText || uncheckedText || ''}
        </TextLabel>
        <TextLabel big className="unchecked-text">
          {uncheckedText || checkedText || ''}
        </TextLabel>
        <input className="checkbox-input" type="checkbox" checked={checked} onClick={onClick} />
      </label>
    </div>
  );
};
