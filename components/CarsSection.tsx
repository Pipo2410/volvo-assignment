import React, { useEffect, useState } from 'react';

import SearchBar from '../components/SearchBar';
import Data from '../models/apiData';
import Carousel from './Carousel';

const CarsSection: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<Data[]>([]);
  const [filteredData, setFilteredData] = useState<Data[]>([]);

  useEffect(() => {
    setIsLoading(true);
    fetch('/api/cars')
      .then((response) => response.json())
      .then((res) => {
        setData(res.data);
        setFilteredData(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        // handle this
      });
  }, []);

  const filterCarsHandler = (bodyType: string) => {
    if (bodyType === '') {
      setFilteredData(data);
    } else {
      setFilteredData(data.filter((car) => car.bodyType.includes(bodyType)));
    }
  };

  const divStyles = {
    maxWidth: 1200,
    margin: '0 auto',
    marginTop: 150,
  };

  return (
    <div className="content" style={divStyles}>
      <SearchBar onFilterCars={filterCarsHandler} />
      {!isLoading && <Carousel items={filteredData} />}
      {isLoading && <p>Loading</p>}
    </div>
  );
};

export default CarsSection;
