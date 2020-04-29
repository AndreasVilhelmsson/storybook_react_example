/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import { TextAreaCss } from './TextAreaCss';

interface Props extends React.TextareaHTMLAttributes<React.ReactNode> {
  placeholder?: string;
  value?: string;
  disabled?: boolean;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const TextArea = ({ className, value, onChange, placeholder, disabled, ...props }: Props) => {
  return (
    <textarea
      value={value}
      className={`text-area ${className ? className : ''}`}
      placeholder={placeholder}
      css={TextAreaCss}
      onChange={onChange}
      disabled={disabled}
      {...props}
    />
  );
};
