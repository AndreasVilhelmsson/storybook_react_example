import React, { useState } from 'react';

import { ToolTip } from '../src/components/tooltip/ToolTip';
import { ToolTipButton } from '../src/components/tooltip/ToolTipButton';

export default {
  title: 'Tooltip',
};

export const toolTipStory = () => {
  const [showPopup, setShowPopup] = useState(true);
  const onClickFunc = () => setShowPopup(false);
  return (
    <div>
      <button onClick={() => setShowPopup(!showPopup)}>Click me</button>
      <ToolTip onClick={onClickFunc} text="I'm a tooltip" display={showPopup} closeButton />
      <h1>Example text to show that tooltip is above other elements</h1>
    </div>
  );
};
toolTipStory.story = {
  name: 'Tooltip',
  parameters: {
    notes: {
      'custom variables': `
        ##Variables
        
        **text(String, optional)**: If you dont want to use HTML, pass a string to text to keep styling. Don't use together with children.
        
        **display(Boolean)**: Toggle visibility of tooltip.
        
        **closeButton(Bolean, optional)**: If you want a close button inside the tooltip.
        
        **onClick(Function, optional)**?: Handles clicks on closeButton, not the tooltip itself.
      `,
      Usage: `\`\`\`
        const [showPopup, setShowPopup] = useState(true);
        const onClickFunc = () => setShowPopup(false);
        return (
          <div>
            <button onClick={() => setShowPopup(!showPopup)}>Click me</button> //This is just for storybook example!
            <ToolTip onClick={onClickFunc} text="I'm a tooltip" display={showPopup} closeButton />
            <h1>Example text to show that tooltip is above other elements</h1>
          </div>
        );
      \`\`\``,
    },
  },
};

export const toolTipHTMLStory = () => {
  const [showPopup, setShowPopup] = useState(false);
  const onClickFunc = () => setShowPopup(!showPopup);
  return (
    <div>
      <button onClick={onClickFunc}>Click me to show tooltip</button>
      <ToolTip onClick={onClickFunc} display={showPopup}>
        <div>
          <h2>Header</h2>
          <p>This is a HTML element inside of the tooltip!</p>
        </div>
      </ToolTip>
      <h1>Example text to show that tooltip is above other elements</h1>
    </div>
  );
};
toolTipHTMLStory.story = {
  name: 'Tooltip html child',
  parameters: {
    notes: {
      'custom variables': `
        ##Variables
        
        **text(String, optional)**: If you dont want to use HTML, pass a string to text to keep styling. Don't use together with children.
        
        **display(Boolean)**: Toggle visibility of tooltip.
        
        **closeButton(Bolean, optional)**: If you want a close button inside the tooltip.
        
        **onClick(Function, optional)**?: Handles clicks on closeButton, not the tooltip itself.
      `,
      Usage: `\`\`\`
        const [showPopup, setShowPopup] = useState(false);
        const onClickFunc = () => setShowPopup(!showPopup);
        return (
          <div>
            <button onClick={onClickFunc}>Click me to show tooltip</button>
            <ToolTip onClick={onClickFunc} display={showPopup}>
              <div>
                <h2>Header</h2>
                <p>This is a HTML element inside of the tooltip!</p>
              </div>
            </ToolTip>
            <h1>Example text to show that tooltip is above other elements</h1>
          </div>
        );
      \`\`\``,
    },
  },
};
export const tooltipButtonStory = () => {
  const [display, setDisplay] = useState(false);
  const onClickFunc = () => setDisplay(!display);
  return (
    <div>
      <ToolTipButton
        buttonText={'This is a button'}
        tooltipText={"I'm a infobox"}
        onClick={onClickFunc}
        display={display}
      />
    </div>
  );
};

tooltipButtonStory.story = {
  name: 'Tooltip Button',
  parameters: {
    notes: {
      'custom variables': `
        ##Variables

        **buttonText(String)**: What to display on the "button"
        
        **tooltipText(String, optional)**: Passes text to the tooltip. Don't use together with children.
        
        **display(Boolean)**: Toggles visibility of tooltip.
        
        **onClick(Function)**: Handles clicks on button. Use with "display" to toggle visibility of tooltip.
      `,
      Usage: `\`\`\`
        const [display, setDisplay] = useState(false);
        const onClickFunc = () => setDisplay(!display);
        return (
          <div>
            <ToolTipButton
              buttonText={'This is a button'}
              tooltipText={"I'm a infobox"}
              onClick={onClickFunc}
              display={display}
            />
          </div>
        );
      \`\`\``,
    },
  },
};

export const tooltipButtonHtmlStory = () => {
  const [display, setDisplay] = useState(false);
  const onClickFunc = () => setDisplay(!display);
  return (
    <div>
      <ToolTipButton buttonText={'This is a button'} onClick={onClickFunc} display={display}>
        <div>
          <h3>Title</h3>
          <p>I am a tooltip filled with HTML</p>
        </div>
      </ToolTipButton>
    </div>
  );
};

tooltipButtonHtmlStory.story = {
  name: 'Tooltip Button with HTML',
  parameters: {
    notes: {
      'custom variables': `
        ##Variables

        **buttonText(String)**: What to display on the "button"
        
        **tooltipText(String, optional)**: Passes text to the tooltip. Don't use together with children.
        
        **display(Boolean)**: Toggles visibility of tooltip.
        
        **onClick(Function)**: Handles clicks on button. Use with "display" to toggle visibility of tooltip.
      `,
      Usage: `\`\`\`
        const [display, setDisplay] = useState(false);
        const onClickFunc = () => setDisplay(!display);
        return (
          <div>
            <ToolTipButton buttonText={'This is a button'} onClick={onClickFunc} display={display}>
              <div>
                <h3>Title</h3>
                <p>I am a tooltip filled with HTML</p>
              </div>
            </ToolTipButton>
          </div>
        );
      \`\`\``,
    },
  },
};
