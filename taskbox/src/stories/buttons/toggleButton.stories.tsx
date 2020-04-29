import React, { useState } from 'react';

import { ToggleButton } from '../../src/components/toggleButtons/ToggleButton';

export default {
  title: 'Buttons/Toggle button',
};

export const ToggleButtonStory = () => {
  const [toggled, setToggled] = useState(false);
  const onClickfunction = () => setToggled(!toggled);

  return <ToggleButton onClick={onClickfunction} checked={toggled} />;
};
ToggleButtonStory.story = {
  name: 'ToggleButton',
  parameters: {
    notes: {
      'custom variables': `
        ##Variables
                
        **checkedText(String, optional)**: Use either together with "uncheckedText" to show text on the button while it's checked, or on its own to show the same text on checked and unchecked state.
        
        **uncheckedText(String, optional)**: Use either together with "checkedText" to show text on the button while it's unchecked, or on its own to show the same text on checked and unchecked state.
        
        **checked(Boolean)**: Toggle button state. Use with onClick.
        
        **onClick(Function)**: handle clicks on button.
      `,
      Usage: `\`\`\`
        const [toggled, setToggled] = useState(false);
        const onClickfunction = () => setToggled(!toggled);
      
        return <ToggleButton 
                 onClick={onClickfunction} 
                 checked={toggled}
               />;
      \`\`\``,
    },
  },
};

export const ToggleButtonStoryWithText = () => {
  const [toggled, setToggled] = useState(false);
  const onClickfunction = () => setToggled(!toggled);

  return <ToggleButton onClick={onClickfunction} checked={toggled} checkedText="checked" uncheckedText="unchecked" />;
};
ToggleButtonStoryWithText.story = {
  name: 'ToggleButton With text',
  parameters: {
    notes: {
      'custom variables': `
        ##Variables
                
        **checkedText(String, optional)**: Use either together with "uncheckedText" to show text on the button while it's checked, or on its own to show the same text on checked and unchecked state.
        
        **uncheckedText(String, optional)**: Use either together with "checkedText" to show text on the button while it's unchecked, or on its own to show the same text on checked and unchecked state.
        
        **checked(Boolean)**: Toggle button state. Use with onClick.
        
        **onClick(Function)**: handle clicks on button.
      `,
      Usage: `\`\`\`
        const [toggled, setToggled] = useState(false);
        const onClickfunction = () => setToggled(!toggled);
      
        return <ToggleButton 
                 onClick={onClickfunction}
                 checked={toggled}
                 checkedText="checked"
                 uncheckedText="unchecked"
               />;
      \`\`\``,
    },
  },
};

export const ToggleButtonStoryWithSameText = () => {
  const [toggled, setToggled] = useState(false);
  const onClickfunction = () => setToggled(!toggled);

  return <ToggleButton onClick={onClickfunction} checked={toggled} checkedText="text" />;
};
ToggleButtonStoryWithSameText.story = {
  name: 'ToggleButton With same text',
  parameters: {
    notes: {
      'custom variables': `
        ##Variables
                
        **checkedText(String, optional)**: Use either together with "uncheckedText" to show text on the button while it's checked, or on its own to show the same text on checked and unchecked state.
        
        **uncheckedText(String, optional)**: Use either together with "checkedText" to show text on the button while it's unchecked, or on its own to show the same text on checked and unchecked state.
        
        **checked(Boolean)**: Toggle button state. Use with onClick.
        
        **onClick(Function)**: handle clicks on button.
      `,
      Usage: `\`\`\`
        const [toggled, setToggled] = useState(false);
        const onClickfunction = () => setToggled(!toggled);
      
        return <ToggleButton 
                 onClick={onClickfunction} 
                 checked={toggled} 
                 checkedText="text" //This could be uncheckedText and still produce same results.
               />;
      \`\`\``,
    },
  },
};
