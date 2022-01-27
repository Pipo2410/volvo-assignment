import React from 'react';

// import {ReactComponent sa ArrowLogo } from '../docs/chevron-circled.svg'
import Data from '../models/apiData';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  DotGroup,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import Car from './Car';
// import Dots from './Dots';

const Carousel: React.FC<{ items: Data[] }> = (props) => {
  const { items } = props;
  const styles = {
    background: 'none',
    border: 'none',
  };

  return (
    <div>
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={100}
        totalSlides={items.length}
        visibleSlides={4}
        infinite={false}
      >
        <Slider>
          {items.map((item, index) => (
            <Slide key={item.id} index={index}>
              <Car text={item} />
            </Slide>
          ))}
        </Slider>
        <div>
          <ButtonBack style={styles}>
            <img
              style={{ transform: 'rotate(-180deg)' }}
              height={30}
              src="https://cdn-icons.flaticon.com/png/512/1549/premium/1549454.png?token=exp=1643228220~hmac=c552099d5c338694375e1e714709b015"
            ></img>
          </ButtonBack>
          <ButtonNext style={styles}>
            <img
              height={30}
              src="https://cdn-icons.flaticon.com/png/512/1549/premium/1549454.png?token=exp=1643228220~hmac=c552099d5c338694375e1e714709b015"
            ></img>
          </ButtonNext>
        </div>
        <DotGroup showAsSelectedForCurrentSlideOnly={true} />
        {/* <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Dots items={items} />
        </div> */}
      </CarouselProvider>
    </div>
  );
};

export default Carousel;
