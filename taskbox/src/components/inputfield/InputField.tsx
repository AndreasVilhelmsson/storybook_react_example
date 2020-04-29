/** / @jsx jsx */
import { jsx } from '@emotion/core';
import * as React from 'react';

import { TextLabel } from '../globals/TextLabel';
import { AlertBox } from '../globals/AlertBox';
import { InputFieldCss } from './InputFieldCss';

interface Props extends React.InputHTMLAttributes<React.ReactNode> {
  inputType?: string;
  placeholder?: string;
  labelText?: string;
  alertBoxText?: string;
  value?: string | number;
  showAlertBox?: boolean;
  info?: boolean;
  required?: boolean;
  isFieldValid?: boolean;
  shouldValidate?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputField = ({
  className,
  inputType = 'text',
  placeholder,
  labelText,
  alertBoxText,
  value,
  showAlertBox,
  info,
  required,
  isFieldValid,
  shouldValidate,
  disabled,
  onChange,
  children,
  ...props
}: Props) => {
  const invalid = shouldValidate && !isFieldValid;
  return (
    <div className="textfield-wrapper" css={InputFieldCss}>
      {labelText && labelText.length > 0 && (
        <TextLabel disabled={false} required={false}>
          {labelText}
        </TextLabel>
      )}
      <input
        type={inputType}
        className={`normal-textfield ${info ? 'input-info' : ''} ${invalid ? 'input-invalid' : ''} ${className || ''}`}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        onChange={onChange}
        value={value}
        {...props}
      />
      <AlertBox text={alertBoxText} show={showAlertBox}>
        {children}
      </AlertBox>
    </div>
  );
};
