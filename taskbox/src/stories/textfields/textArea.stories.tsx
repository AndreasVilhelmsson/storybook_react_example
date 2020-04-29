import * as React from 'react';

import { TextArea } from '../../src/components/textArea/TextArea';
import { useState } from 'react';

export default {
  title: 'Input/Text area',
};

export const TextAreaStory = () => {
  const [value, setValue] = useState('');
  const onValueChangeFunc = (text: string) => setValue(text);
  return (
    <TextArea
      value={value}
      placeholder={"I'm a placeholder, I get removed when the user types!"}
      onChange={(event) => onValueChangeFunc(event.currentTarget.value)}
    />
  );
};
TextAreaStory.story = {
  name: 'Basic Text area',
  parameters: {
    notes: {
      'custom variables': `
        ##Variables
        
        **placeholder(String, optional)**: Add a placeholder to the text area.
        
        **value(String, optional)**: Set the value of the text area. Use together with onChange.
        
        **disabled(Boolean, optional)**: Disable text area.
        
        **onChange(Function)**: Handle change of text area value. Gives a \`\`\`React.ChangeEvent<HTMLTextAreaElement>\`\`\`.
      `,
      Usage: `\`\`\`
        const [value, setValue] = useState('');
        const onValueChangeFunc = (text: string) => setValue(text);
        return (
          <TextArea 
            value={value}
            placeholder={"I'm a placeholder, I get removed when the user types!"} 
            onChange={(e)=>onValueChangeFunc(e.currentTarget.value)}
          />
        );
      \`\`\``,
    },
  },
};

export const DisabledTextAreaStory = () => {
  const [value, setValue] = useState("I'm disabled, the user can't interact with me!");
  const onValueChangeFunc = (text: string) => setValue(text);
  return <TextArea value={value} onChange={(event) => onValueChangeFunc(event.currentTarget.value)} disabled />;
};
DisabledTextAreaStory.story = {
  name: 'Disabled TextArea',
  parameters: {
    notes: {
      'custom variables': `
        ##Variables
        
        **placeholder(String, optional)**: Add a placeholder to the text area.
        
        **value(String, optional)**: Set the value of the text area. Use together with onChange.
        
        **disabled(Boolean, optional)**: Disable text area.
        
        **onChange(Function)**: Handle change of text area value. Gives a \`\`\`React.ChangeEvent<HTMLTextAreaElement>\`\`\`.
      `,
      Usage: `\`\`\`
        const [value, setValue] = useState("I'm disabled, the user can't interact with me!");
        const onValueChangeFunc = (text: string) => setValue(text);
        return (
          <TextArea 
            value={value} 
            onChange={(e)=>onValueChangeFunc(e.currentTarget.value)}
            disabled
          />
        );
      \`\`\``,
    },
  },
};
