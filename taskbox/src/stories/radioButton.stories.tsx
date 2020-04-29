import React, { useState } from 'react';

import { RadioButton } from '../src/components/radiobuttons/RadioButton';

export default {
  title: 'Radio button',
};
export const BasicRadiobuttonStory = () => {
  const [checked, setChecked] = useState(false);
  const onClickFunction = () => setChecked(!checked);

  return <RadioButton onClick={onClickFunction} checked={checked} text="Click me!" />;
};
BasicRadiobuttonStory.story = {
  name: 'Normal Radio button',
  parameters: {
    notes: {
      'custom variables': `
        ##Variables

        **text(String, optional)**: Add a text label to the side of radio button.
        
        **checked(Boolean)**: Toggles state of radio button.
        
        **disabled(Boolean, optional)**: Disable radio button.
        
        **required(Boolean, optional)**: Make radio button required. 
        
        **onClick(Function)**: Handle clicks on radio button. Use to toggle checked.
      `,
      Usage: `\`\`\`
        const [checked, setChecked] = useState(false);
        const onClickFunction = () => setChecked(!checked);
      
        return (
          <RadioButton 
            onClick={onClickFunction} 
            checked={checked} 
            text="Click me!" 
          />
        );
      \`\`\``,
    },
  },
};

export const DisableRadioButtonStory = () => (
  <div>
    <RadioButton onClick={() => null} disabled text="You can't click me!" checked={false} />
    <RadioButton onClick={() => null} disabled text="You can't click me!" checked={true} />
  </div>
);
DisableRadioButtonStory.story = {
  name: 'Disabled Radio button',
  parameters: {
    notes: {
      'custom variables': `
        ##Variables

        **text(String, optional)**: Add a text label to the side of radio button.
        
        **checked(Boolean)**: Toggles state of radio button.
        
        **disabled(Boolean, optional)**: Disable radio button.
        
        **required(Boolean, optional)**: Make radio button required. 
        
        **onClick(Function)**: Handle clicks on radio button. Use to toggle checked.
      `,
      Usage: `\`\`\`
        <RadioButton onClick={()=> null} checked={false} text="You can't click me!" disabled />
        <RadioButton onClick={()=> null} checked={true} text="You can't click me!" disabled />
      \`\`\``,
    },
  },
};

export const RequiredRadioButtonStory = () => {
  const [checked, setChecked] = useState(false);
  const [valid, setValid] = useState(true);
  const onClickFunction = () => setChecked(!checked);
  const required = true;
  const validate = () => setValid(checked && required);

  return (
    <div>
      <RadioButton onClick={onClickFunction} checked={checked} required={!valid} text="Click me!" />
      <button onClick={validate}>Check if valid</button>
    </div>
  );
};
RequiredRadioButtonStory.story = {
  name: 'Reqiured Radio button',
  parameters: {
    notes: {
      'custom variables': `
        ##Variables

        **text(String, optional)**: Add a text label to the side of radio button.
        
        **checked(Boolean)**: Toggles state of radio button.
        
        **disabled(Boolean, optional)**: Disable radio button.
        
        **required(Boolean, optional)**: Make radio button required. 
        
        **onClick(Function)**: Handle clicks on radio button. Use to toggle checked.
      `,
      Usage: `\`\`\`
        const [checked, setChecked] = useState(false);
        const [valid, setValid] = useState(true);
        const onClickFunction = () => setChecked(!checked);
        const required = true;
        const validate = () => setValid(checked && required);
      
        return (
          <div>
            <RadioButton 
              onClick={onClickFunction} 
              checked={checked} 
              required={!valid} 
              text="Click me!" />
            <button onClick={validate}>Check if valid</button>
          </div>
        );
      \`\`\``,
    },
  },
};
