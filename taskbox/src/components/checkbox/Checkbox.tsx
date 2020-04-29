/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as React from 'react';

import { CheckboxCss } from './CheckboxCss';
import { TextLabel } from '../globals/TextLabel';
import { SVGIcon } from '../globals/SVGIcon';

interface Props extends React.InputHTMLAttributes<React.ReactNode> {
  labelText?: string;
  checked?: boolean;
  disabled?: boolean;
  required?: boolean;
  onClick: () => void;
}

export const Checkbox = ({ className, labelText, checked, disabled, required, onClick, children, ...props }: Props) => {
  return (
    <div className={`checkbox-wrapper ${className || ''}`} onClick={disabled ? () => null : onClick} css={CheckboxCss}>
      <input
        className="checkbox-input"
        type="checkbox"
        onClick={onClick}
        checked={checked}
        required={!checked && required}
        disabled={disabled}
        {...props}
      />
      {checked && (
        <SVGIcon
          className={`checkbox-checkmark ${disabled ? 'disabled' : ''}`}
          name="check-mark"
          width="12"
          height="9"
        />
      )}
      <TextLabel className="checkbox-label" disabled={disabled} required={!checked && required} big>
        {labelText || children}
      </TextLabel>
    </div>
  );
};
