import React, { useState } from 'react';

import { View, TextInput } from 'vcc-ui';

const SearchBar: React.FC<{ onFilterCars: (text: string) => void }> = (
  props
) => {
  const [inputValue, setInputValue] = useState<string>('');

  const searchCarHandler = (event: any) => {
    // event.preventDefault();
    setInputValue(event.target.value);
    props.onFilterCars(event.target.value);
  };

  return (
    <View as="form">
      <TextInput
        value={inputValue}
        label={'Filter cars by type'}
        placeholder="estate"
        type="search"
        onChange={searchCarHandler}
      />
      {/* <input type="search" onChange={searchCarHandler} value={inputValue} /> */}
    </View>
  );
};

export default SearchBar;
