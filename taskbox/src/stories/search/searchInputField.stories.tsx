import React, { useState } from 'react';

import { SearchField } from '../../src/components/searchfield/searchField';

export default {
  title: 'Search field/Search field',
};

export const SearchFieldStory = () => {
  const [text, setText] = useState('');
  const handleInputChange = (text: string): void => setText(text);
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      console.log('Search: ', text);
    }
  };
  return (
    <SearchField
      onChangeText={(text) => handleInputChange(text)}
      onKeyPress={handleKeyPress}
      placeholder={'search value'}
      value={text}
    />
  );
};

SearchFieldStory.story = {
  name: 'Searchfield',
  parameters: {
    notes: {
      'custom variables': `
        ##Variables
        
        **placeholder(String, optional)**: Add a placeholder text for search field.
        
        **value(String, optional)**: Value of search field.
        
        **onChangeText(Function)**: Handle change of search field. Returns a string with updated value. Use together with value.
        
        **onKeyPress(Function)**: Handle keypress while search field is in focus. Use to add functionality to Modifier keys. Returns a \`\`\`React.KeyboardEvent<HTMLInputElement>\`\`\`.
      `,
      Usage: `\`\`\`
        const [text, setText] = useState('');
        const handleInputChange = (text: string): void => setText(text);
        const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
          if (e.key === 'Enter') {
            console.log('Search: ', text);
          }
        };
        return (
          <SearchField
            onChangeText={(text) => handleInputChange(text)}
            onKeyPress={handleKeyPress}
            placeholder={'search value'}
            value={text}
          />
        );
      \`\`\``,
    },
  },
};
