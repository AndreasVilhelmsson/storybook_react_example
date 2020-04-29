import * as React from 'react';

import { AutoComplete } from '../../src/components/searchfield/autocomplete';
import { ChangeEvent, useState } from 'react';

export default {
  title: 'Search field/Autocomplete',
};

const data = [
  'Anders',
  'Andreas',
  'André',
  'Ali',
  'Anna',
  'Alexander',
  'Allan',
  'Algot',
  'Abraham',
  'Anton',
  'Hans',
  'Örjan',
];

export const AutocompleteStory = () => {
  const [userInput, setUserInput] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [activeSuggestion, setActiveSuggestion] = useState(0);
  const suggestionAmount = 6;
  const filteredSuggestions = data.filter(
    (suggestion) => suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1,
  );
  const handleChange = (change: ChangeEvent<HTMLInputElement>) => {
    setUserInput(change.currentTarget.value);
    if (change.currentTarget.value.length >= 2) {
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
      setActiveSuggestion(0);
    }
  };
  const handleClick = (event: React.MouseEvent<HTMLLIElement>) => {
    event.preventDefault();
    setUserInput(event.currentTarget.innerText);
    setShowSuggestions(false);
  };
  const handleBlur = () => {
    setUserInput('');
    setShowSuggestions(false);
  };
  const handleKeyPress = (key: React.KeyboardEvent<HTMLInputElement>) => {
    if (key.key === 'Enter') {
      if (filteredSuggestions.length > 0) {
        setUserInput(filteredSuggestions[activeSuggestion]);
        setShowSuggestions(false);
        setActiveSuggestion(0);
      }
    } else if (key.key === 'Escape') {
      setUserInput('');
      setShowSuggestions(false);
    } else if (key.key === 'ArrowDown') {
      if (activeSuggestion >= filteredSuggestions.length - 1 || activeSuggestion >= suggestionAmount - 1) {
        setActiveSuggestion(0);
      } else {
        setActiveSuggestion(activeSuggestion + 1);
      }
    } else if (key.key === 'ArrowUp') {
      if (activeSuggestion <= 0) {
        if (filteredSuggestions.length < suggestionAmount) {
          setActiveSuggestion(filteredSuggestions.length - 1);
        } else {
          setActiveSuggestion(suggestionAmount - 1);
        }
      } else {
        setActiveSuggestion(activeSuggestion - 1);
      }
    }
  };

  return (
    <AutoComplete
      className={'example-classname'}
      placeholder={'Try typing "Anders"'}
      userInput={userInput}
      suggestions={filteredSuggestions}
      suggestionAmount={suggestionAmount}
      showSuggestions={showSuggestions}
      activeSuggestion={activeSuggestion}
      noSuggestions={`Inga resultat hittades för ${userInput}`}
      onKeyPress={handleKeyPress}
      onChange={handleChange}
      onClick={handleClick}
      onBlur={handleBlur}
      disabled={false}
    />
  );
};

AutocompleteStory.story = {
  name: 'Autocomplete',
  parameters: {
    notes: {
      'custom variables': `
        ##Variables
        
        **placeholder(String, optional):** Display text in search field before any text is entered
        
        **userInput(String):** This is the text currently in the search field. Can and should be updated with onChange
        
        **noSuggestions(String, optional):** Replace the default message for when no suggestions can be found
        
        **suggestions(String[]):** This is the list of suggestions that is shown in the dropdown. Needs to be filtered outside component.
        
        **suggestionAmount(String, optional):**  Override default (5) amount of suggestions shown in dropdown
        
        **activeSuggestion(Number):** This is the index in suggestions of the item marked by user.
        
        **showSuggestions(Boolean, optional):** Toggles if dropdown should be visible
        
        **disabled(boolean, optional):** Disables searchfield
        
        **onBlur(function, optional):** Handles blurs of search field
        
        **onFocus(function, optional):** Handles focus gain of search field.
        
        **onClick(function):** Handles clicks on list items in the suggestion dropdown. Returns a \`\`\`React.MouseEvent<HTMLLIElement>\`\`\` 
        
        **onKeyPress(function):** Handles key presses in search field. Can be used to add functionality to modifier keys. Returns a \`\`\`React.KeyboardEvent<HTMLInputElement>\`\`\`
        
        **onChange(function):** Handles change in search field. Returns a \`\`\`React.ChangeEvent<HTMLInputElement>\`\`\`
        
      `,
      Usage: `\`\`\`
        const [userInput, setUserInput] = useState('');
        const [showSuggestions, setShowSuggestions] = useState(false);
        const [activeSuggestion, setActiveSuggestion] = useState(0);
        const suggestionAmount = 6;
        const filteredSuggestions = data.filter(
          (suggestion) => suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1,
        );
        const handleChange = (change: ChangeEvent<HTMLInputElement>) => {
          setUserInput(change.currentTarget.value);
          if (change.currentTarget.value.length >= 2) {
            setShowSuggestions(true);
          } else {
            setShowSuggestions(false);
            setActiveSuggestion(0);
          }
        };
        const handleClick = (event: React.MouseEvent<HTMLLIElement>) => {
          event.preventDefault();
          setUserInput(event.currentTarget.innerText);
          setShowSuggestions(false);
        };
        const handleBlur = () => {
          setUserInput('');
          setShowSuggestions(false);
        };
        const handleKeyPress = (key: React.KeyboardEvent<HTMLInputElement>) => {
          if (key.key === 'Enter') {
            if (filteredSuggestions.length > 0) {
              setUserInput(filteredSuggestions[activeSuggestion]);
              setShowSuggestions(false);
              setActiveSuggestion(0);
            }
          } else if (key.key === 'Escape') {
            setUserInput('');
            setShowSuggestions(false);
          } else if (key.key === 'ArrowDown') {
            if (activeSuggestion >= filteredSuggestions.length - 1 || activeSuggestion >= suggestionAmount - 1) {
              setActiveSuggestion(0);
            } else {
              setActiveSuggestion(activeSuggestion + 1);
            }
          } else if (key.key === 'ArrowUp') {
            if (activeSuggestion <= 0) {
              if (filteredSuggestions.length < suggestionAmount) {
                setActiveSuggestion(filteredSuggestions.length - 1);
              } else {
                setActiveSuggestion(suggestionAmount - 1);
              }
            } else {
              setActiveSuggestion(activeSuggestion - 1);
            }
          }
        };
  
        return (
          <AutoComplete
            className={'example-classname'}
            placeholder={'Try typing "Anders"'}
            userInput={userInput}
            suggestions={filteredSuggestions}
            suggestionAmount={suggestionAmount}
            showSuggestions={showSuggestions}
            activeSuggestion={activeSuggestion}
            noSuggestions={'Inga resultat hittades'}
            onKeyPress={handleKeyPress}
            onChange={handleChange}
            onClick={handleClick}
            onBlur={handleBlur}
            disabled={false}
          />
        );
      \`\`\``,
    },
  },
};

export const DisabledAutocompleteStory = () => {
  return (
    <AutoComplete
      placeholder={"I'm disabled!"}
      userInput={''}
      suggestions={[]}
      activeSuggestion={0}
      onChange={() => null}
      onClick={() => null}
      onKeyPress={() => null}
      disabled
    />
  );
};

AutocompleteStory.story = {
  name: 'Autocomplete',
  parameters: {
    notes: {
      'custom variables': `
        ##Variables
        
        **placeholder(String, optional):** Display text in search field before any text is entered
        
        **userInput(String):** This is the text currently in the search field. Can and should be updated with onChange
        
        **noSuggestions(String, optional):** Replace the default message for when no suggestions can be found
        
        **suggestions(String[]):** This is the list of suggestions that is shown in the dropdown. Needs to be filtered outside component.
        
        **suggestionAmount(String, optional):**  Override default (5) amount of suggestions shown in dropdown
        
        **activeSuggestion(Number):** This is the index in suggestions of the item marked by user.
        
        **showSuggestions(Boolean, optional):** Toggles if dropdown should be visible
        
        **disabled(boolean, optional):** Disables searchfield
        
        **onBlur(function, optional):** Handles blurs of search field
        
        **onFocus(function, optional):** Handles focus gain of search field.
        
        **onClick(function):** Handles clicks on list items in the suggestion dropdown. Returns a \`\`\`React.MouseEvent<HTMLLIElement>\`\`\` 
        
        **onKeyPress(function):** Handles key presses in search field. Can be used to add functionality to modifier keys. Returns a \`\`\`React.KeyboardEvent<HTMLInputElement>\`\`\`
        
        **onChange(function):** Handles change in search field. Returns a \`\`\`React.ChangeEvent<HTMLInputElement>\`\`\`
        
      `,
      Usage: `\`\`\`
        const [userInput, setUserInput] = useState('');
        const [showSuggestions, setShowSuggestions] = useState(false);
        const [activeSuggestion, setActiveSuggestion] = useState(0);
        const suggestionAmount = 6;
        const filteredSuggestions = data.filter(
          (suggestion) => suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1,
        );
        const handleChange = (change: ChangeEvent<HTMLInputElement>) => {
          setUserInput(change.currentTarget.value);
          if (change.currentTarget.value.length >= 2) {
            setShowSuggestions(true);
          } else {
            setShowSuggestions(false);
            setActiveSuggestion(0);
          }
        };
        const handleClick = (event: React.MouseEvent<HTMLLIElement>) => {
          event.preventDefault();
          setUserInput(event.currentTarget.innerText);
          setShowSuggestions(false);
        };
        const handleBlur = () => {
          setUserInput('');
          setShowSuggestions(false);
        };
        const handleKeyPress = (key: React.KeyboardEvent<HTMLInputElement>) => {
          if (key.key === 'Enter') {
            if (filteredSuggestions.length > 0) {
              setUserInput(filteredSuggestions[activeSuggestion]);
              setShowSuggestions(false);
              setActiveSuggestion(0);
            }
          } else if (key.key === 'Escape') {
            setUserInput('');
            setShowSuggestions(false);
          } else if (key.key === 'ArrowDown') {
            if (activeSuggestion >= filteredSuggestions.length - 1 || activeSuggestion >= suggestionAmount - 1) {
              setActiveSuggestion(0);
            } else {
              setActiveSuggestion(activeSuggestion + 1);
            }
          } else if (key.key === 'ArrowUp') {
            if (activeSuggestion <= 0) {
              if (filteredSuggestions.length < suggestionAmount) {
                setActiveSuggestion(filteredSuggestions.length - 1);
              } else {
                setActiveSuggestion(suggestionAmount - 1);
              }
            } else {
              setActiveSuggestion(activeSuggestion - 1);
            }
          }
        };
  
        return (
          <AutoComplete
            className={'example-classname'}
            placeholder={'Try typing "Anders"'}
            userInput={userInput}
            suggestions={filteredSuggestions}
            suggestionAmount={suggestionAmount}
            showSuggestions={showSuggestions}
            activeSuggestion={activeSuggestion}
            noSuggestions={'Inga resultat hittades'}
            onKeyPress={handleKeyPress}
            onChange={handleChange}
            onClick={handleClick}
            onBlur={handleBlur}
            disabled={true}
          />
        );
      \`\`\``,
    },
  },
};
