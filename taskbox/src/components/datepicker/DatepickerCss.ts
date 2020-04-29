import { NormalizedCss } from '../../shared/global';
import { css } from '@emotion/core';

export const DatepickerCss = [
  NormalizedCss,
  css`
    display: grid;
    width: 320px;
    grid-template-columns: auto 48px;

    .datepicker-icon {
      display: inline;
      grid-column: 2/3;
      grid-row: 1;
      align-self: center;
      justify-self: center;
      z-index: 1;
    }

    .react-datepicker-wrapper {
      grid-column: 1/3;
      grid-row: 1;
    }

    .date-picker {
      width: 100%;
      height: 40px;
      padding-left: 15px;
      border: 1px solid var(--black);

      ::first-line {
        vertical-align: middle;
      }
    }

    .date-picker:hover {
      border: 1px solid var(--primary);
    }

    .date-picker:disabled {
      border: 1px solid var(--gray-dark);
      background: var(--gray-light);
    }

    .react-datepicker__triangle {
      left: auto;
      right: 10px;
    }

    .react-datepicker__navigation--previous,
    .react-datepicker__navigation--next {
      border: none;
      top: 25px;
      border-top: 3px solid;
      border-color: var(--black);
    }

    .react-datepicker__navigation--next {
      right: 35px;
      transform: rotate(45deg);
      border-right: 3px solid;
    }

    .react-datepicker__navigation--previous {
      left: 35px;
      transform: rotate(-45deg);
      border-left: 3px solid;
    }

    .react-datepicker {
      width: 320px;
      padding-bottom: 25px;
      border-radius: 0;
      background-color: var(--white);
      box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2);
      /* overflow: hidden; */
      animation: slide-up 0.2s ease;
    }

    .react-datepicker-popper[data-placement^='bottom'] .react-datepicker {
      border-top: 2px solid var(--primary);
    }

    .react-datepicker-popper[data-placement^='top'] .react-datepicker {
      border-bottom: 2px solid var(--primary);
    }

    .react-datepicker-popper[data-placement^='top'] .react-datepicker__triangle {
      border-top-color: var(--primary);
    }

    .react-datepicker-popper[data-placement^='bottom'] .react-datepicker__triangle {
      border-bottom-color: var(--primary);
    }

    .react-datepicker__month-container {
      width: 100%;
    }

    .react-datepicker__current-month,
    .react-datepicker-time__header,
    .react-datepicker-year-header {
      width: 100%;
      line-height: 62px;
      font-weight: normal;
      font-family: var(--text-font-bold);
    }

    .react-datepicker__header {
      width: 100%;
      background-color: var(--white);
      border-bottom: none;
    }

    .react-datepicker__day-name {
      width: 28px;
      height: 28px;
      margin: 2px 5px;
      color: var(--gray-dark);
    }

    .react-datepicker__day {
      width: 28px;
      height: 28px;
      margin: 2px 5px;
      border: 2px solid transparent;
      line-height: 24px;
      border-radius: 50%;
    }

    .react-datepicker__day.react-datepicker__day--disabled {
      cursor: not-allowed;
      /* TODO: remove padding when font is fixed  */
      padding-top: 2px;
    }

    .react-datepicker__day:not(.react-datepicker__day--disabled) {
      font-family: var(--text-font-bold);
    }

    .react-datepicker__day:hover,
    .react-datepicker__month-text:hover,
    .react-datepicker__quarter-text:hover {
      border: 2px solid var(--primary);
      border-radius: 50%;
      background-color: var(--white);
      color: var(--text-black);
    }

    .react-datepicker__day.react-datepicker__day--disabled:hover {
      border: 2px solid transparent;
      color: var(--gray);
    }

    .react-datepicker__day--selected {
      background-color: var(--primary);
    }

    .react-datepicker__day--outside-month,
    .react-datepicker__day--weekend {
      color: var(--gray);
    }
    @keyframes slide-up {
      0% {
        max-height: 0;
        overflow: hidden;
      }
      99% {
        overflow: hidden;
      }
      100% {
        max-height: 20em;
        overflow: visible;
      }
    }
  `,
];
