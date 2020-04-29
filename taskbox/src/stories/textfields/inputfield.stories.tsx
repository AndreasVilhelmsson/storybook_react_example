import React, { useState } from 'react';

import { InputField } from '../../src/components/inputfield/InputField';

export default {
  title: 'Input/Input field',
};

export const BasicInputFieldStory = () => {
  const [text, setText] = useState('');
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => setText(event.currentTarget.value);
  return <InputField onChange={handleInputChange} value={text} />;
};

BasicInputFieldStory.story = {
  name: 'Basic Inputfield',
  parameters: {
    notes: {
      'custom variables': `
        ##Variables
           
        **inputType(String, optional)**: Passes type value to input field. for example: text, number, password.

        **placeholder(String, optional)**: Add a placeholder to input field.
        
        **labelText(String, optional)**: Add a label to the text field.
        
        **alertBoxText(String, optional)**: Text inside alertbox.
         
        **value(String or Number, optional)**: Sets input value. Use with onChange.
        
        **showAlertBox(Boolean, optional)**: Toggles visibility of alert box.
        
        **info(Boolean, optional)**: Changes the field to a "info field" that can't be edited, but still permits users to copy text.
        
        **required(Boolean, optional)**: makes field required.
        
        **isFieldValid(Boolean, optional)**: This toggles validity of field. Use together with "shouldValidate".
        
        **shouldValidate(Boolean, optional)**: If input needs to be validated (outside component). Use together with isFieldValid.
        
        **onChange(Function)**: Handle change of input value. Use with value variable. Returns \`\`\`React.ChangeEvent<HTMLInputElement>)\`\`\`        
      `,
      Usage: `\`\`\`
        const [text, setText] = useState('');
        const handleInputChange = 
        (event: React.ChangeEvent<HTMLInputElement>) => setText(event.currentTarget.value);
        
        return <InputField onChange={handleInputChange} value={text} />;
      \`\`\``,
    },
  },
};

export const ValidatedInputFieldStory = () => {
  const [text, setText] = useState('');
  const validateEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(text);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => setText(event.currentTarget.value);
  return (
    <InputField
      onChange={handleInputChange}
      value={text}
      labelText="e-mail"
      shouldValidate
      isFieldValid={text.length === 0 || validateEmail}
      placeholder={'e-mail'}
    />
  );
};

ValidatedInputFieldStory.story = {
  name: 'Validated Inputfield',
  parameters: {
    notes: {
      'custom variables': `
        ##Variables
           
        **inputType(String, optional)**: Passes type value to input field. for example: text, number, password.

        **placeholder(String, optional)**: Add a placeholder to input field.
        
        **labelText(String, optional)**: Add a label to the text field.
        
        **alertBoxText(String, optional)**: Text inside alertbox.
         
        **value(String or Number, optional)**: Sets input value. Use with onChange.
        
        **showAlertBox(Boolean, optional)**: Toggles visibility of alert box.
        
        **info(Boolean, optional)**: Changes the field to a "info field" that can't be edited, but still permits users to copy text.
        
        **required(Boolean, optional)**: makes field required.
        
        **isFieldValid(Boolean, optional)**: This toggles validity of field. Use together with "shouldValidate".
        
        **shouldValidate(Boolean, optional)**: If input needs to be validated (outside component). Use together with isFieldValid.
        
        **onChange(Function)**: Handle change of input value. Use with value variable. Returns \`\`\`React.ChangeEvent<HTMLInputElement>)\`\`\`        
      `,
      Usage: `\`\`\`
        const [text, setText] = useState('');
        const validateEmail = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(text);  
        //This regex is no good, just a simple example.

        const handleInputChange = 
        (event: React.ChangeEvent<HTMLInputElement>) => setText(event.currentTarget.value);
        return (
          <InputField
            onChange={handleInputChange}
            value={text}
            labelText="e-mail"
            shouldValidate
            isFieldValid={text.length === 0 || validateEmail}
            placeholder={'e-mail'}
          />
        );
      \`\`\``,
    },
  },
};

export const TooltipInputFieldStory = () => {
  const [text, setText] = useState('');
  const validateEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(text);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => setText(event.currentTarget.value);
  return (
    <InputField
      onChange={handleInputChange}
      value={text}
      labelText="e-mail"
      shouldValidate
      isFieldValid={text.length === 0 || validateEmail}
      showAlertBox={text.length > 1 && !validateEmail}
      alertBoxText={`${text} is not a valid email address`}
    />
  );
};

TooltipInputFieldStory.story = {
  name: 'Validated Inputfield with tooltip',
  parameters: {
    notes: {
      'custom variables': `
        ##Variables
           
        **inputType(String, optional)**: Passes type value to input field. for example: text, number, password.

        **placeholder(String, optional)**: Add a placeholder to input field.
        
        **labelText(String, optional)**: Add a label to the text field.
        
        **alertBoxText(String, optional)**: Text inside alertbox.
         
        **value(String or Number, optional)**: Sets input value. Use with onChange.
        
        **showAlertBox(Boolean, optional)**: Toggles visibility of alert box.
        
        **info(Boolean, optional)**: Changes the field to a "info field" that can't be edited, but still permits users to copy text.
        
        **required(Boolean, optional)**: makes field required.
        
        **isFieldValid(Boolean, optional)**: This toggles validity of field. Use together with "shouldValidate".
        
        **shouldValidate(Boolean, optional)**: If input needs to be validated (outside component). Use together with isFieldValid.
        
        **onChange(Function)**: Handle change of input value. Use with value variable. Returns \`\`\`React.ChangeEvent<HTMLInputElement>)\`\`\`        
      `,
      Usage: `\`\`\`
        const [text, setText] = useState('');
        const validateEmail = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(text);
        //This regex is no good, just a simple example.
        //It might be nice to wait a second from last input before validating, 
        //so that the user has a better chance to not get errors
      
        const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => setText(event.currentTarget.value);
        return (
          <InputField
            onChange={handleInputChange}
            value={text}
            labelText="e-mail"
            shouldValidate
            isFieldValid={text.length === 0 || validateEmail}
            showAlertBox={text.length > 1 && !validateEmail}
            alertBoxText={'\${text} is not a valid email address'}
          />
        );
      \`\`\``,
    },
  },
};

export const InfoInputFieldStory = () => {
  return <InputField onChange={() => null} value={"I'm displaying locked in values!"} info />;
};

InfoInputFieldStory.story = {
  name: 'Info Inputfield',
  parameters: {
    notes: {
      'custom variables': `
        ##Variables
           
        **inputType(String, optional)**: Passes type value to input field. for example: text, number, password.

        **placeholder(String, optional)**: Add a placeholder to input field.
        
        **labelText(String, optional)**: Add a label to the text field.
        
        **alertBoxText(String, optional)**: Text inside alertbox.
         
        **value(String or Number, optional)**: Sets input value. Use with onChange.
        
        **showAlertBox(Boolean, optional)**: Toggles visibility of alert box.
        
        **info(Boolean, optional)**: Changes the field to a "info field" that can't be edited, but still permits users to copy text.
        
        **required(Boolean, optional)**: makes field required.
        
        **isFieldValid(Boolean, optional)**: This toggles validity of field. Use together with "shouldValidate".
        
        **shouldValidate(Boolean, optional)**: If input needs to be validated (outside component). Use together with isFieldValid.
        
        **onChange(Function)**: Handle change of input value. Use with value variable. Returns \`\`\`React.ChangeEvent<HTMLInputElement>)\`\`\`        
      `,
      Usage: `\`\`\`
        <InputField 
          onChange={() => null} 
          value={"I'm displaying locked in values!"} 
          info 
        />;
      \`\`\``,
    },
  },
};

export const DisabledInputFieldStory = () => {
  const [text, setText] = useState("I'm Disabled!");
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => setText(event.currentTarget.value);
  return <InputField onChange={handleInputChange} value={text} disabled />;
};

DisabledInputFieldStory.story = {
  name: 'Disabled Inputfield',
  parameters: {
    notes: {
      'custom variables': `
        ##Variables
           
        **inputType(String, optional)**: Passes type value to input field. for example: text, number, password.

        **placeholder(String, optional)**: Add a placeholder to input field.
        
        **labelText(String, optional)**: Add a label to the text field.
        
        **alertBoxText(String, optional)**: Text inside alertbox.
         
        **value(String or Number, optional)**: Sets input value. Use with onChange.
        
        **showAlertBox(Boolean, optional)**: Toggles visibility of alert box.
        
        **info(Boolean, optional)**: Changes the field to a "info field" that can't be edited, but still permits users to copy text.
        
        **required(Boolean, optional)**: makes field required.
        
        **isFieldValid(Boolean, optional)**: This toggles validity of field. Use together with "shouldValidate".
        
        **shouldValidate(Boolean, optional)**: If input needs to be validated (outside component). Use together with isFieldValid.
        
        **onChange(Function)**: Handle change of input value. Use with value variable. Returns \`\`\`React.ChangeEvent<HTMLInputElement>)\`\`\`        
      `,
      Usage: `\`\`\`
        <InputField 
          onChange={() => null} 
          value={"I'm disabled"} 
          disabled 
        />;
      \`\`\``,
    },
  },
};
