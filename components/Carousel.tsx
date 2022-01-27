import React, { useState } from 'react';

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
import { Spacer, Flex } from 'vcc-ui';
import { useResizeObserver } from '@volvo-cars/react-layout-utils';

import Car from './Car';

const Carousel: React.FC<{ items: Data[] }> = (props) => {
  const { items } = props;
  const styles = {
    background: 'none',
    border: 'none',
  };

  const { ref, width, height } = useResizeObserver<HTMLDivElement>();

  console.log(ref);
  console.log(typeof ref);
  console.log(width);
  console.log(height);

  const [visibleItems, setVisibleItems] = useState(4);

  // if (width !== undefined) {
  //   if (width < 479) setVisibleItems(1);
  //   if (width > 479) setVisibleItems(4);
  // }

  return (
    <div ref={ref}>
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={100}
        totalSlides={items.length}
        // visibleSlides={visibleItems}
        visibleSlides={width > 479 ? 4 : 1}
        infinite={false}
      >
        <Slider
        // style={{ display: 'flex' }}
        >
          {items.map((item, index) => (
            <Slide
              // style={{ float: 'none' }}
              key={item.id}
              index={index}
            >
              {/* refactor */}
              <Flex
                extend={{
                  flexDirection: 'row',
                }}
              >
                <Car text={item} />
                <Spacer />
              </Flex>
            </Slide>
          ))}
        </Slider>
        <div>
          <ButtonBack style={styles}>
            <img
              style={{ transform: 'rotate(-180deg)' }}
              height={30}
              src="https://png.pngtree.com/element_origin_min_pic/16/09/02/1157c8f053982a3.jpg"
            ></img>
          </ButtonBack>
          <ButtonNext style={styles}>
            <img
              height={30}
              src="https://png.pngtree.com/element_origin_min_pic/16/09/02/1157c8f053982a3.jpg"
            ></img>
          </ButtonNext>
        </div>
        <DotGroup showAsSelectedForCurrentSlideOnly={true} />
      </CarouselProvider>
    </div>
  );
};

export default Carousel;
