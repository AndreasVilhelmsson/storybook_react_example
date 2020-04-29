import * as React from 'react';

import { PrimaryButton } from '../../src/components/buttons/PrimaryButton';
import { SecondaryButton } from '../../src/components/buttons/SecondaryButton';
import { DeleteButton } from '../../src/components/buttons/DeleteButton';

export default {
  title: 'Buttons/Button',
};

export const PrimaryButtonStory = () => <PrimaryButton text="Click me" onClick={() => console.log('hej')} />;
PrimaryButtonStory.story = {
  name: 'Primary button',
  parameters: {
    notes: {
      'custom variables': `
        ##Variables
        **text(string)**: Button text
        
        **dark(boolean)**: Changes the look of disabled buttons for use on gray backgrounds.
        
        **onClick(func)**: Returns a React.MouseEvent to use outside the button.
      `,
      Usage: '```<PrimaryButton text="Click me" onClick={() => {console.log("example")}/>```',
    },
  },
};
export const SecondaryButtonStory = () => <SecondaryButton text="Click me" onClick={() => console.log('hej')} />;
SecondaryButtonStory.story = {
  name: 'Secondary button',
  parameters: {
    notes: {
      'custom variables': `
        ##Variables
        **text(string)**: Button text
        
        **dark(boolean)**: Changes the look of disabled buttons for use on gray backgrounds.
        
        **onClick(func)**: Returns a React.MouseEvent to use outside the button.
      `,
      Usage: '```<SecondaryButton text="Click me" onClick={() => console.log("example")} />```',
    },
  },
};
export const DeleteButtonStory = () => <DeleteButton text="Click me" onClick={() => console.log('hej')} />;
DeleteButtonStory.story = {
  name: 'Delete button',
  parameters: {
    notes: {
      'custom variables': `
        ##Variables
        **text(string)**: Button text
        
        **dark(boolean)**: Changes the look of disabled buttons for use on gray backgrounds.
        
        **onClick(func)**: Returns a React.MouseEvent to use outside the button.
      `,
      Usage: '```<DeleteButton text="Click me" onClick={() => console.log("example")} />```',
    },
  },
};
export const DisabledButtonStory = () => (
  <div>
    <PrimaryButton disabled text="I'm disabled!" onClick={() => console.log('hej')} />
    <PrimaryButton disabled dark text="I'm dark!" onClick={() => console.log('hej')} />
  </div>
);

DisabledButtonStory.story = {
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
        <PrimaryButton disabled text="Click me" onClick={() => console.log("example")} />
        <PrimaryButton disabled dark text="Click me" onClick={() => console.log("example")} /> 
        \`\`\``,
    },
  },
};
