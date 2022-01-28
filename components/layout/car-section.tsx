import React, { useEffect, useState } from 'react';

import SearchBar from '../input/searchbar';
import Data from '../../models/apiData';
import Carousel from '../UI/carousel';

import { Grid, Row, Col, View, Spinner } from 'vcc-ui';

const CarSection: React.FC = () => {
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
      const searchedPhrase = bodyType.toLowerCase();
      setFilteredData(
        data.filter((car) => car.bodyType.includes(searchedPhrase))
      );
    }
  };

  return (
    <Grid>
      <Row align="center">
        <Col>
          <SearchBar onFilterCars={filterCarsHandler} />
        </Col>
      </Row>
      <Row>
        <Col>{!isLoading && <Carousel items={filteredData} />}</Col>
      </Row>
      <Row>
        <Col>
          {isLoading && (
            <View
              extend={{
                margin: 'auto',
                marginTop: '25px',
              }}
            >
              <Spinner size={48} />
            </View>
          )}
        </Col>
      </Row>
    </Grid>
  );
};

export default CarSection;
