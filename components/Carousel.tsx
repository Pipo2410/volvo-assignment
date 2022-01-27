import React, { useState, useEffect } from 'react';
import Image from 'next/image';

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
import { Spacer, Flex, View, Block } from 'vcc-ui';
import { useResizeObserver } from '@volvo-cars/react-layout-utils';

import Car from './car';
import ArrowIcon from '../docs/chevron-circled.svg';

const Carousel: React.FC<{ items: Data[] }> = (props) => {
  const { items } = props;
  const [visibleItems, setVisibleItems] = useState(4);
  const [isDesktop, setIsDesktop] = useState<boolean>(window.innerWidth > 479);
  const { ref, width, height } = useResizeObserver<HTMLDivElement>();

  // console.log(ref);
  // console.log(typeof ref);
  // console.log(width);
  // console.log(height);

  useEffect(() => {
    if (width !== undefined) {
      if (width < 479) {
        setVisibleItems(1);
        setIsDesktop(false);
      }
      if (width > 479) {
        setVisibleItems(4);
        setIsDesktop(true);
      }
    }
  }, [width]);

  return (
    <View ref={ref} marginTop={5}>
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={100}
        totalSlides={items.length}
        visibleSlides={visibleItems}
        infinite={false}
      >
        <Slider style={{ height: '400px' }}>
          {items.map((item, index) => (
            <Slide key={item.id} index={index}>
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
        {isDesktop && (
          <Flex
            extend={{
              flexDirection: 'row',
              justifyContent: 'end',
            }}
          >
            <ButtonBack
              style={{
                background: 'none',
                border: 'none',
                width: '40px',
                height: '40px',
                transform: 'translate(-180deg)',
              }}
            >
              <ArrowIcon style={{ transform: 'translate(-180deg)' }} />
            </ButtonBack>
            <ButtonNext
              style={{
                background: 'none',
                border: 'none',
                width: '40px',
                height: '40px',
                transform: '',
              }}
            >
              <ArrowIcon />
            </ButtonNext>
          </Flex>
        )}
        {!isDesktop && <DotGroup showAsSelectedForCurrentSlideOnly={true} />}
      </CarouselProvider>
    </View>
  );
};

export default Carousel;
