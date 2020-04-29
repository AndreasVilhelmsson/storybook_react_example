import * as React from 'react';

import { Dropdown } from '../src/components/dropdown/Dropdown';
import { useState } from 'react';
import { TextLabel } from '../src/components/globals/TextLabel';

export default {
  title: 'Dropdown',
};

const data = [
  { key: '0', children: 'I can be a placeholder!' },
  { key: '1', children: 'option 1' },
  { key: '2', children: 'option 2' },
  { key: '3', children: 'option 3' },
];
export const DropdownStory = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState('');
  const onClickfunction = () => setOpen(!open);
  const onBlurFunction = () => setOpen(false);
  const handleChangefunction = (children: string) => setSelected(children);
  return (
    <Dropdown
      className={'classname'}
      content={data}
      open={open}
      onClick={onClickfunction}
      onBlur={onBlurFunction}
      selected={selected}
      onChange={handleChangefunction}
    />
  );
};

DropdownStory.story = {
  name: 'Dropdown',
  parameters: {
    notes: {
      'custom variables': `
      ##Variables
      
      **selected(String, optional)**: This sets the chosen item from dropdown menu.

      **content(Row[])**: List of objects to be displayed in dropdown, must contain key. See example of row object in usage tab
      
      **open(Boolean, optional)**: This can be used to set state of dropdown, if you want dropdown to be open by default (please dont do this, it's dumb).
      
      **disabled(Boolean, optional)**: Grays out dropdown and makes it unusable.
      
      **onClick(Function)**: What happens when you click the dropdown menu.
      
      **onBlur(Function)**: What happens when dropdown lose focus.
      
      **onChange(Function)**: What happens when you click a option from the dropdown menu.
      `,
      usage: `\`\`\`
        const data = [
          { key: '0', children: 'I can be a placeholder!' },  //This is a Row object.
          { key: '1', children: 'option 1' },
          { key: '2', children: 'option 2' },
          { key: '3', children: 'option 3' },
        ];
        const [open, setOpen] = useState(false);
        const [selected, setSelected] = useState('');
        const onClickfunction = () => setOpen(!open);
        const onBlurFunction = () => setOpen(false);
        const handleChangefunction = (children: string) => setSelected(children);
        return (
          <Dropdown
            className={'classname'}
            content={data}
            open={open}
            onClick={onClickfunction}
            onBlur={onBlurFunction}
            selected={selected}
            onChange={handleChangefunction}
          />
        );
      \`\`\``,
    },
  },
};

const htmlData = [
  { key: '1', children: <TextLabel big>I'm a TextLabel!</TextLabel> },
  { key: '2', children: <TextLabel big>Me Too!</TextLabel> },
  { key: '3', children: <TextLabel big>Me Three!</TextLabel> },
];

export const HtmlDropdownStory = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState('');
  const onClickfunction = () => setOpen(!open);
  const onBlurFunction = () => setOpen(false);
  const handleChangefunction = (children: string) => setSelected(children);
  return (
    <Dropdown
      content={htmlData}
      open={open}
      onClick={onClickfunction}
      onBlur={onBlurFunction}
      selected={selected}
      onChange={handleChangefunction}
    />
  );
};

HtmlDropdownStory.story = {
  name: 'HTML Dropdown',
  parameters: {
    notes: {
      'custom variables': `
      ##Variables
      
      **selected(String, optional)**: This sets the chosen item from dropdown menu.

      **content(Row[])**: List of objects to be displayed in dropdown, must contain key. See example of row object in usage tab
      
      **open(Boolean, optional)**: This can be used to set state of dropdown, if you want dropdown to be open by default (please dont do this, it's dumb).
      
      **disabled(Boolean, optional)**: Grays out dropdown and makes it unusable.
      
      **onClick(Function)**: What happens when you click the dropdown menu.
      
      **onBlur(Function)**: What happens when dropdown lose focus.
      
      **onChange(Function)**: What happens when you click a option from the dropdown menu.
      `,
      usage: `\`\`\`
        const htmlData = [
          { key: '1', children: <TextLabel big>I'm a TextLabel!</TextLabel> },
          { key: '2', children: <TextLabel big>Me Too!</TextLabel> },
          { key: '3', children: <TextLabel big>Me Three!</TextLabel> },
        ];
        const [open, setOpen] = useState(false);
        const [selected, setSelected] = useState('');
        const onClickfunction = () => setOpen(!open);
        const onBlurFunction = () => setOpen(false);
        const handleChangefunction = (children: string) => setSelected(children);
        return (
          <Dropdown
            className={'classname'}
            content={htmlData}
            open={open}
            onClick={onClickfunction}
            onBlur={onBlurFunction}
            selected={selected}
            onChange={handleChangefunction}
          />
        );
      \`\`\``,
    },
  },
};

export const DisabledDropdownStory = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState('');
  const onClickfunction = () => setOpen(!open);
  const onBlurFunction = () => setOpen(false);
  const handleChangefunction = (children: string) => setSelected(children);
  return (
    <Dropdown
      content={data}
      open={open}
      onClick={onClickfunction}
      onBlur={onBlurFunction}
      selected={selected}
      onChange={handleChangefunction}
      disabled
    />
  );
};

DisabledDropdownStory.story = {
  name: 'Disabled Dropdown',
  parameters: {
    info: '# Disabled Basic dropdown with 3 items in dropdown \n\n ',
    notes: {
      'custom variables': `
      ##Variables
      
      **selected(String, optional)**: This sets the chosen item from dropdown menu.

      **content(Row[])**: List of objects to be displayed in dropdown, must contain key. See example of row object in usage tab
      
      **open(Boolean, optional)**: This can be used to set state of dropdown, if you want dropdown to be open by default (please dont do this, it's dumb).
      
      **disabled(Boolean, optional)**: Grays out dropdown and makes it unusable.
      
      **onClick(Function)**: What happens when you click the dropdown menu.
      
      **onBlur(Function)**: What happens when dropdown lose focus.
      
      **onChange(Function)**: What happens when you click a option from the dropdown menu.
      `,
      usage: `\`\`\`
        const data = [
          { key: '0', children: 'I can be a placeholder!' },  //This is a Row object.
          { key: '1', children: 'option 1' },
          { key: '2', children: 'option 2' },
          { key: '3', children: 'option 3' },
        ];
        const [open, setOpen] = useState(false);
        const [selected, setSelected] = useState('');
        const onClickfunction = () => setOpen(!open);
        const onBlurFunction = () => setOpen(false);
        const handleChangefunction = (children: string) => setSelected(children);
        return (
          <Dropdown
            className={'classname'}
            content={data}
            open={open}
            onClick={onClickfunction}
            onBlur={onBlurFunction}
            selected={selected}
            onChange={handleChangefunction}
            disabled
          />
        );
      \`\`\``,
    },
  },
};
