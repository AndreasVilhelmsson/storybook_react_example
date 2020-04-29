/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as React from 'react';

import { RadioButtonCss } from './RadioButtonCss';
import { TextLabel } from '../globals/TextLabel';

interface Props extends React.InputHTMLAttributes<React.ReactNode> {
  text?: string;
  checked: boolean;
  disabled?: boolean;
  required?: boolean;
  onClick: () => void;
}

export const RadioButton = ({
  name,
  disabled,
  required,
  onClick,
  checked,
  className,
  id,
  children,
  text,
  ...props
}: Props) => {
  const isRequired = checked ? false : required;
  return (
    <div
      className={`radio-button-wrapper ${className || ''}`}
      onClick={!disabled ? onClick : () => null}
      css={RadioButtonCss}
    >
      <input
        className="radio-input"
        type="radio"
        value={name}
        checked={checked}
        id={id}
        disabled={disabled}
        required={isRequired}
        {...props}
      />
      <TextLabel className={`radio-text ${disabled ? 'disabled' : ''}`} disabled={disabled} required={isRequired} big>
        {text || children}
      </TextLabel>
    </div>
  );
};
