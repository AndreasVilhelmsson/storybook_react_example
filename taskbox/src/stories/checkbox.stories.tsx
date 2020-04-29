import React, { useState } from 'react';

import { Checkbox } from '../src/components/checkbox/Checkbox';

export default {
  title: 'Checkbox',
};
export const BasicCheckboxStory = () => {
  const [checked, setChecked] = useState(false);
  const onClickfunction = () => setChecked(!checked);
  return <Checkbox onClick={onClickfunction} checked={checked} labelText="Click me!" />;
};
BasicCheckboxStory.story = {
  name: 'Basic Checkbox',
  parameters: {
    notes: {
      'custom variables': `
        ##Variables
        
        **labelText(String, optional)**: Display text next to checkbox.
        
        **checked(Boolean, optional)**: Toggles the state of checkbox.
        
        **disabled(Boolean, optional)**: Disables checkbox.
        
        **required(Boolean, optional)**: Marks checkbox as required.
        
        **onClick(Function)**: () => Handles clicks on checkbox.
      `,
      Usage: `\`\`\`
        const [checked, setChecked] = useState(false);
        const onClickfunction = () => setChecked(!checked);
        return (
          <Checkbox 
            onClick={onClickfunction} 
            checked={checked} 
            labelText="Click me!" 
          />
        );
      \`\`\``,
    },
  },
};

export const RequiredCheckboxStory = () => {
  const [checked, setChecked] = useState(false);
  const [valid, setValid] = useState(true);
  const onClickfunction = () => setChecked(!checked);
  const required = true; //This is redundant obviously.
  const validateForm = () => setValid(checked && required);
  return (
    <div>
      <Checkbox onClick={onClickfunction} checked={checked} labelText="Click me!" required={!valid} />
      <button onClick={validateForm}>Check if form is valid</button>
    </div>
  );
};
RequiredCheckboxStory.story = {
  name: 'Required Checkbox',
  parameters: {
    info: '## Base Checkbox, but better \n\n ',
    notes: {
      'custom variables': `
        ##Variables
        
        **labelText(String, optional)**: Display text next to checkbox.
        
        **checked(Boolean, optional)**: Toggles the state of checkbox.
        
        **disabled(Boolean, optional)**: Disables checkbox.
        
        **required(Boolean, optional)**: Marks checkbox as required.
        
        **onClick(Function)**: () => Handles clicks on checkbox.
      `,
      Usage: `\`\`\`
        const [checked, setChecked] = useState(false);
        const [valid, setValid] = useState(true);
        const onClickfunction = () => setChecked(!checked);
        const required = true; //This is redundant obviously.
        const validateForm = () => setValid(checked && required);
        return (
          <div>
            <Checkbox onClick={onClickfunction} checked={checked} labelText="Click me!" required={!valid} />
            <button onClick={validateForm}>Check if form is valid</button>
          </div>
        );
      \`\`\``,
    },
  },
};
export const DisabledCheckboxStory = () => {
  return (
    <div>
      <Checkbox onClick={() => null} checked={false} labelText="You can't click me!" disabled />
      <Checkbox onClick={() => null} checked={true} labelText="You can't click me!" disabled />
    </div>
  );
};
DisabledCheckboxStory.story = {
  name: 'Disabled Checkbox',
  parameters: {
    info: '## Base Checkbox, but better \n\n ',
    notes: {
      'custom variables': `
        ##Variables
        
        **labelText(String, optional)**: Display text next to checkbox.
        
        **checked(Boolean, optional)**: Toggles the state of checkbox.
        
        **disabled(Boolean, optional)**: Disables checkbox.
        
        **required(Boolean, optional)**: Marks checkbox as required.
        
        **onClick(Function)**: () => Handles clicks on checkbox.
      `,
      Usage: `\`\`\`
        const [checked, setChecked] = useState(false);
        const onClickfunction = () => setChecked(!checked);
        return (
          <Checkbox 
            onClick={onClickfunction} 
            checked={checked} 
            labelText="You can't click me!"
            disabled 
          />
        );
      \`\`\``,
    },
  },
};
