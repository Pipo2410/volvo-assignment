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
import { Spacer, Flex, View, Block } from 'vcc-ui';
import { useResizeObserver } from '@volvo-cars/react-layout-utils';

import Car from './car';

const Carousel: React.FC<{ items: Data[] }> = (props) => {
  const { items } = props;
  const [visibleItems, setVisibleItems] = useState(4);
  const [isDesktop, setIsDesktop] = useState<boolean>(window.innerWidth > 479);
  const { ref, width, height } = useResizeObserver<HTMLDivElement>();

  console.log(ref);
  // console.log(typeof ref);
  console.log(width);
  // console.log(height);

  // if (width !== undefined) {
  //   if (width < 479) setVisibleItems(1);
  //   if (width > 479) setVisibleItems(4);
  // }

  return (
    <View ref={ref} marginTop={5}>
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={100}
        totalSlides={items.length}
        // visibleSlides={visibleItems}
        // visibleSlides={width > 479 ? 4 : 1}
        visibleSlides={4}
        infinite={false}
      >
        <Slider style={{ height: '400px' }}>
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
        {isDesktop && (
          <Flex
            extend={{
              flexDirection: 'row',
              justifyContent: 'end',
            }}
          >
            {/* <Block> */}
            <ButtonBack>
              <img
                style={{ transform: 'rotate(-180deg)' }}
                height={30}
                src="https://png.pngtree.com/element_origin_min_pic/16/09/02/1157c8f053982a3.jpg"
              ></img>
            </ButtonBack>
            <ButtonNext>
              <img
                height={30}
                src="https://png.pngtree.com/element_origin_min_pic/16/09/02/1157c8f053982a3.jpg"
              ></img>
            </ButtonNext>
            {/* </Block> */}
          </Flex>
        )}
        {!isDesktop && <DotGroup showAsSelectedForCurrentSlideOnly={true} />}
      </CarouselProvider>
    </View>
  );
};

export default Carousel;
