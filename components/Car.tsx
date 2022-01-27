import React from 'react';
import Data from '../models/apiData';

import Image from 'next/image';

const Car: React.FC<{ text: Data }> = (props) => {
  const { id, modelName, bodyType, modelType, imageUrl } = props.text;

  return (
    <div>
      <p>{bodyType}</p>
      <p>
        {modelName}
        <span>{modelType}</span>
      </p>
      <Image
        src={imageUrl}
        alt={modelName}
        width={200}
        height={200}
        className="car"
      />
      <div>
        <a href={`/learn/${id}`}>Learn</a>
        <a href={`/shop/${id}`}>Shop</a>
      </div>
    </div>
  );
};

export default Car;
