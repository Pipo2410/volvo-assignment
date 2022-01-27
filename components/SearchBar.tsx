import React, { useState } from 'react';

import { View, TextInput } from 'vcc-ui';

import { useKeyPress } from '@volvo-cars/react-utils';

const SearchBar: React.FC<{ onFilterCars: (text: string) => void }> = (
  props
) => {
  const [inputValue, setInputValue] = useState<string>('');

  // can be used to prevent submit on enter
  useKeyPress('Enter', () => console.log('Enter Clicked'));

  const searchCarHandler = (event: any) => {
    // event.preventDefault();
    setInputValue(event.target.value);
    props.onFilterCars(event.target.value);
  };

  const submitSearch = (event: any) => {
    console.log(event);
    console.log('halo');
    event.preventDefault();
  };

  return (
    <View as="form">
      <TextInput
        value={inputValue}
        label={'Filter cars by type'}
        placeholder="estate"
        type="search"
        onChange={searchCarHandler}
        onSubmit={submitSearch}
      />
    </View>
  );
};

export default SearchBar;
