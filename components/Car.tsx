import React from 'react';
import Image from 'next/image';

import Data from '../models/apiData';
import { Link, View, Block, Flex, Text } from 'vcc-ui';

const Car: React.FC<{ text: Data }> = (props) => {
  const { id, modelName, bodyType, modelType, imageUrl } = props.text;

  return (
    <Flex>
      <Flex>
        <Text variant="bates">{bodyType.toUpperCase()}</Text>
        <Text>
          {modelName}
          <Text variant="bates">{modelType}</Text>
        </Text>
      </Flex>
      <Image src={imageUrl} alt={modelName} width={300} height={300} />
      <Flex
        extend={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}
      >
        <Link href={`/learn/${id}`} arrow="right">
          Learn
        </Link>
        <Link href={`/shop/${id}`} arrow="right">
          Shop
        </Link>
      </Flex>
    </Flex>
  );
};

export default Car;
