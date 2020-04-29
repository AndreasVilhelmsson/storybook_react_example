/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as React from 'react';

import { TextLabel } from '../globals/TextLabel';
import { SVGIcon } from '../globals/SVGIcon';

import { DropdownCss } from './DropdownCss';

interface Row {
  key: string;
  children: React.ReactNode;
}

interface Props extends React.ButtonHTMLAttributes<React.ReactNode> {
  selected?: string;
  content: Array<Row>;
  open?: boolean;
  disabled?: boolean;
  onClick: () => void;
  onBlur: () => void;
  onChange: (children: React.ReactNode) => void;
}

export const Dropdown = ({
  className,
  content,
  open,
  onClick,
  onBlur,
  disabled,
  selected,
  onChange,
  ...props
}: Props) => {
  return (
    <button
      className={`dropdown-button ${className || ''}`}
      onClick={onClick}
      onBlur={onBlur}
      disabled={disabled}
      {...props}
      css={DropdownCss}
    >
      <TextLabel className="dropdown-label" big>
        {selected || content[0].children}
      </TextLabel>
      <SVGIcon className={`dropdown-arrow ${open ? 'open' : ''}`} name="chevron-down" width="18" height="10" />
      <ul className={`dropdown-container ${open ? 'open' : ''}`}>
        {content.map((item) => (
          <li
            key={item.key}
            className={`dropdown-content ${open ? 'open' : ''}`}
            onClick={() => onChange(item.children)}
          >
            {item.children}
          </li>
        ))}
      </ul>
    </button>
  );
};
