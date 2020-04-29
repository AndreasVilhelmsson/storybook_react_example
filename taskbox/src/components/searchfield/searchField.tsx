/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as React from 'react';

import { SVGIcon } from '../globals/SVGIcon';
import { SearchFieldCss } from './SearchFieldCss';

const searchFieldCss = [SearchFieldCss];

interface Props extends React.InputHTMLAttributes<React.ReactNode> {
  placeholder?: string;
  value?: string;
  onChangeText: (text: string) => void;
  onKeyPress: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

export const SearchField = ({ className, placeholder, value, onKeyPress, onChangeText, children, ...props }: Props) => {
  return (
    <div className={`searchfield ${className || ''}`} css={searchFieldCss}>
      <input
        type="text"
        className="searchfield-input"
        placeholder={placeholder}
        onChange={(e): void => onChangeText(e.target.value)}
        onKeyDown={onKeyPress}
        value={value}
        {...props}
      />
      <SVGIcon className="searchfield-icon" name="magnifying-glass" width="25px" height="25px" />
    </div>
  );
};
