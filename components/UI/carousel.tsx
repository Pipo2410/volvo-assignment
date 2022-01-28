import React, { useState, useEffect } from 'react';
import { Spacer, Flex, View, Text } from 'vcc-ui';
import { useResizeObserver } from '@volvo-cars/react-layout-utils';
import Car from '../car';
import ArrowIcon from '../../docs/chevron-circled.svg';
import Data from '../../models/apiData';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  Dot,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const Carousel: React.FC<{ items: Data[] }> = (props) => {
  const { items } = props;
  const [visibleItems, setVisibleItems] = useState(4);
  const [isDesktop, setIsDesktop] = useState<boolean>(window.innerWidth > 500);
  const { ref, width } = useResizeObserver<HTMLDivElement>();

  useEffect(() => {
    if (width !== undefined) {
      if (width < 600) {
        setVisibleItems(1);
        setIsDesktop(false);
      }
      if (width > 600) {
        setVisibleItems(4);
        setIsDesktop(true);
      }
    }
  }, [width]);

  console.log(items);

  return (
    <View ref={ref} marginTop={5}>
      {!items.length && (
        <Text
          as="h2"
          variant="ootah"
          extend={{
            textAlign: 'center',
            untilM: {
              fontSize: '16px',
            },
          }}
        >
          No cars available with this body type
        </Text>
      )}
      {!!items.length && (
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={115}
          totalSlides={items.length}
          visibleSlides={visibleItems}
          infinite={false}
        >
          <Slider>
            {items.map((item, index) => (
              <Slide key={item.id} index={index}>
                <Flex
                  extend={{
                    flexDirection: 'row',
                  }}
                >
                  <Car text={item} index={index} />
                  <Spacer />
                </Flex>
              </Slide>
            ))}
          </Slider>
          {isDesktop && (
            <Flex
              extend={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
              }}
            >
              <ButtonBack
                tabIndex={items.length + 1}
                aria-label="back to previous"
                style={{
                  background: 'none',
                  border: 'none',
                  width: '40px',
                  height: '40px',
                  padding: 0,
                  transform: 'rotate(-180deg)',
                }}
              >
                <ArrowIcon />
              </ButtonBack>
              <Spacer />
              <ButtonNext
                aria-label="next"
                tabIndex={items.length + 1}
                style={{
                  background: 'none',
                  border: 'none',
                  width: '40px',
                  height: '40px',
                  padding: 0,
                }}
              >
                <ArrowIcon />
              </ButtonNext>
            </Flex>
          )}
          {!isDesktop && (
            <Flex
              extend={{
                flexDirection: 'row',
                justifyContent: 'center',
              }}
            >
              {items.map((item, itemIndex) => (
                <Dot
                  key={item.id}
                  slide={itemIndex}
                  style={{
                    border: 'none',
                    padding: '0',
                    width: '8px',
                    height: '8px',
                    borderRadius: '100px',
                    margin: '0 4px',
                  }}
                />
              ))}
            </Flex>
          )}
        </CarouselProvider>
      )}
    </View>
  );
};

export default Carousel;
