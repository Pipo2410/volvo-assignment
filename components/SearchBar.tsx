import React, { useState } from 'react';

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
    <form>
      <input type="search" onChange={searchCarHandler} value={inputValue} />
    </form>
  );
};

export default SearchBar;
