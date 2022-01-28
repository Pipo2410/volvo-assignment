import React, { useState } from 'react';

import { View, TextInput } from 'vcc-ui';

const SearchBar: React.FC<{ onFilterCars: (text: string) => void }> = (
  props
) => {
  const [inputValue, setInputValue] = useState<string>('');

  const searchCarHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    props.onFilterCars(event.target.value);
  };

  return (
    <View as="form">
      <TextInput
        tabIndex={1}
        aria-label="Search cars by type"
        label={'Filter cars by type'}
        value={inputValue}
        placeholder="estate"
        type="search"
        onChange={searchCarHandler}
      />
    </View>
  );
};

export default SearchBar;
