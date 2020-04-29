/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as React from 'react';

import { SVGIcon } from '../globals/SVGIcon';

import { autoCompleteCss } from './autocompleteCss';

interface Props extends React.HTMLAttributes<React.ReactNode> {
  placeholder?: string;
  userInput: string;
  noSuggestions?: string;
  suggestions: string[];
  suggestionAmount?: number;
  activeSuggestion: number;
  showSuggestions?: boolean;
  disabled?: boolean;
  onBlur?: () => void;
  onFocus?: () => void;
  onClick: (e: React.MouseEvent<HTMLLIElement>) => void;
  onKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const AutoComplete = ({
  className,
  placeholder,
  userInput,
  suggestions,
  suggestionAmount = 5,
  showSuggestions,
  activeSuggestion,
  noSuggestions,
  onKeyPress,
  onChange,
  onClick,
  onBlur,
  onFocus,
  disabled,
  children,
  ...props
}: Props) => {
  return (
    <div className={`autocomplete ${className || ''}`} css={autoCompleteCss} {...props}>
      <div className="suggestion-searchbar">
        <input
          className="suggestion-searchbar-input"
          value={userInput}
          placeholder={placeholder}
          disabled={disabled}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => onChange(event)}
          onKeyDown={onKeyPress}
          onBlur={onBlur}
          onFocus={onFocus}
        />
        <SVGIcon
          className={`suggestion-searchbar-icon ${disabled ? 'disabled' : ''}`}
          name="magnifying-glass"
          width="25"
          height="25"
        />
      </div>
      {showSuggestions && (
        <ul className="suggestion-dropdown">
          <li className="suggestion-item placeholder">{placeholder}</li>
          {children}
          {suggestions.length > 0 &&
            suggestions.slice(0, suggestionAmount).map((suggestion, index) => {
              return (
                <li
                  className={`suggestion-item ${index === activeSuggestion ? 'active' : ''}`}
                  value={suggestion}
                  key={suggestion}
                  onMouseDown={onClick}
                >
                  {suggestion}
                </li>
              );
            })}
          {suggestions.length < 1 && <li className="suggestion-item">{noSuggestions || 'Inga resultat'}</li>}
        </ul>
      )}
    </div>
  );
};
