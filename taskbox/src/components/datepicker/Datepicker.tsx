/** @jsx jsx */
import { jsx } from '@emotion/core';
import DatePicker, { registerLocale, ReactDatePickerProps } from 'react-datepicker';
import sv from 'date-fns/locale/sv';

import { SVGIcon } from '../globals/SVGIcon';
import 'react-datepicker/dist/react-datepicker.css';

import { DatepickerCss } from './DatepickerCss';

interface Props extends ReactDatePickerProps {
  // https://github.com/Hacker0x01/react-datepicker/blob/master/docs/datepicker.md
  date: Date;
  disabled?: boolean;
  onChange: (newDate: Date | null) => void;
}

export const Datepicker = ({ className, date, disabled, onChange, ...props }: Props) => {
  registerLocale('sv', sv);
  return (
    <div css={DatepickerCss}>
      <DatePicker
        className={`date-picker ${className || ''}`}
        selected={date}
        disabled={disabled}
        onChange={(date): void => onChange(date)}
        locale="sv"
        dateFormat="yyyy-MM-dd"
        fixedHeight
        {...props}
      />
      <SVGIcon className="datepicker-icon" name="date" width="28px" height="28px" fill="var(--black)" />
    </div>
  );
};
