import * as React from 'react';
import { Datepicker } from '../src/components/datepicker/Datepicker';

export default {
  title: 'Datepicker',
};

export const datepickerStory = (): React.ReactElement => {
  const today = new Date();
  const [date, setDate] = React.useState(today);
  const onChangeFunc = (date: Date): void => setDate(date);
  return <Datepicker date={date} onChange={onChangeFunc} />;
};
datepickerStory.story = {
  name: 'Basic date picker',
  parameters: {
    notes: {
      'custom variables': `
        ##Variables
        
        **date(Date)**: Sets the date displayed in the date field;
        
        **disabled(Boolean, optional)**: Disables component
        
        **onChange(Function)**: Handles changes in datepicker. Returns a new Date or null. Use with date to update component.
      `,
      Usage: `\`\`\`
        const today = new Date();
        const [date, setDate] = React.useState(today);
        const onChangeFunc = (date: Date): void => setDate(date);
        return (
          <Datepicker 
            date={date} 
            onChange={onChangeFunc} 
          />
        );
      \`\`\``,
    },
  },
};

export const datepickerStoryNotEarlierThanToday = (): React.ReactElement => {
  const today = new Date();
  const [date, setDate] = React.useState(today);
  const onChangeFunc = (date: Date): void => setDate(date);
  return <Datepicker date={date} onChange={onChangeFunc} minDate={new Date()} />;
};
datepickerStoryNotEarlierThanToday.story = {
  name: 'Date picker Not earlier than today',
  parameters: {
    notes: {
      'custom variables': `
        ##Variables
        
        **date(Date)**: Sets the date displayed in the date field;
        
        **disabled(Boolean, optional)**: Disables component
        
        **onChange(Function)**: Handles changes in datepicker. Returns a new Date or null. Use with date to update component.
      `,
      Usage: `\`\`\`
        const today = new Date();
        const [date, setDate] = React.useState(today);
        const onChangeFunc = (date: Date): void => setDate(date);
        return (
          <Datepicker 
            date={date} 
            onChange={onChangeFunc}
            minDate={new Date()} //This is a datepicker prop.
          />
        );
      \`\`\``,
    },
  },
};

export const datepickerStoryDisabled = (): React.ReactElement => {
  const today = new Date();
  const [date, setDate] = React.useState(today);
  const onChangeFunc = (date: Date): void => setDate(date);
  return <Datepicker date={date} onChange={onChangeFunc} disabled />;
};
datepickerStoryDisabled.story = {
  name: 'Date picker Disabled',
  parameters: {
    info: '# Disabled datepicker \n\n ',
    notes: {
      'custom variables': `
        ##Variables
        
        **date(Date)**: Sets the date displayed in the date field;
        
        **disabled(Boolean, optional)**: Disables component
        
        **onChange(Function)**: Handles changes in datepicker. Returns a new Date or null. Use with date to update component.
      `,
      Usage: `\`\`\`
        const today = new Date();
        const [date, setDate] = React.useState(today);
        const onChangeFunc = (date: Date): void => setDate(date);
        return (
          <Datepicker 
            date={date} 
            onChange={onChangeFunc} 
            disabled
          />
        );
      \`\`\``,
    },
  },
};
