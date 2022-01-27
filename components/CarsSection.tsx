import React, { useEffect, useState } from 'react';

import SearchBar from '../components/SearchBar';
import Data from '../models/apiData';
import Carousel from './Carousel';

import { Grid, Row, Col, View, Spinner } from 'vcc-ui';

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
    // <Flex extend={{ justifyContent: 'center' }}>
    //   <Flex>
    //     <Block>
    //       <SearchBar onFilterCars={filterCarsHandler} />
    //     </Block>
    //     {!isLoading && <Carousel items={filteredData} />}
    //     {isLoading && (
    //       <View>
    //         <Spinner size={48} />
    //       </View>
    //     )}
    //   </Flex>
    // </Flex>
  );
};

export default CarsSection;
