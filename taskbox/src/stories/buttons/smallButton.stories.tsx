import * as React from 'react';

import { SmallPrimaryButton } from '../../src/components/smallButtons/SmallPrimaryButton';
import { SmallSecondaryButton } from '../../src/components/smallButtons/SmallSecondaryButton';
import { SmallDeleteButton } from '../../src/components/smallButtons/SmallDeleteButton';

export default {
  title: 'Buttons/Small button',
};

export const SmallPrimaryButtonStory = () => <SmallPrimaryButton text="Click me" onClick={() => console.log('hej')} />;
SmallPrimaryButtonStory.story = {
  name: 'Small Primary button',
  parameters: {
    notes: {
      'custom variables': `
        ##Variables
        **text(string)**: Button text
        
        **dark(boolean)**: Changes the look of disabled buttons for use on gray backgrounds.
        
        **onClick(func)**: Returns a React.MouseEvent to use outside the button.
      `,
      Usage: '```<SmallPrimaryButton text="Click me" onClick={() => {console.log("example")}/>```',
    },
  },
};

export const SmallSecondaryButtonStory = () => (
  <SmallSecondaryButton text="Click me" onClick={() => console.log('hej')} />
);
SmallSecondaryButtonStory.story = {
  name: 'Secondary button',
  parameters: {
    notes: {
      'custom variables': `
        ##Variables
        **text(string)**: Button text
        
        **dark(boolean)**: Changes the look of disabled buttons for use on gray backgrounds.
        
        **onClick(func)**: Returns a React.MouseEvent to use outside the button.
      `,
      Usage: '```<SmallSecondaryButton text="Click me" onClick={() => console.log("example")} />;```',
    },
  },
};

export const SmallDeleteButtonStory = () => <SmallDeleteButton text="Click me" onClick={() => console.log('hej')} />;
SmallDeleteButtonStory.story = {
  name: 'Delete button',
  parameters: {
    notes: {
      'custom variables': `
        ##Variables
        **text(string)**: Button text
      
        **dark(boolean)**: Changes the look of disabled buttons for use on gray backgrounds.
      
        **onClick(func)**: Returns a React.MouseEvent to use outside the button.
      `,
      Usage: '```<SmallDeleteButton text="Click me" onClick={() => console.log("example")} />;```',
    },
  },
};
export const SmallDisabledButtonStory = () => (
  <div>
    <SmallPrimaryButton disabled text="Click me" onClick={() => console.log('hej')} />
    <SmallPrimaryButton disabled dark text="Click me" onClick={() => console.log('hej')} />
  </div>
);
SmallDisabledButtonStory.story = {
  name: 'Disabled Button',
  parameters: {
    notes: {
      'custom variables': `
        ##Variables
        **text(string)**: Button text
        
        **dark(boolean)**: Changes the look of disabled buttons for use on gray backgrounds.
        
        **onClick(func)**: Returns a React.MouseEvent to use outside the button.
      `,
      Usage: `\`\`\`
        <SmallPrimaryButton disabled text="Click me" onClick={() => console.log("example")} />
        <smallPrimaryButton disabled dark text="Click me" onClick={() => console.log("example")} /> 
      \`\`\``,
    },
  },
};
