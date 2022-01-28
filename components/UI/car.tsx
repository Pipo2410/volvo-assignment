import React from 'react'
import Image from 'next/image'

import Data from '../../models/apiData'
import { Link, Flex, Text, useTheme } from 'vcc-ui'

export const Car: React.FC<{ text: Data; index: number }> = (props) => {
  const { id, modelName, bodyType, modelType, imageUrl } = props.text

  const theme = useTheme()
  return (
    <Flex>
      <Flex>
        <Text
          tabIndex={props.index + 2}
          aria-label={`body type${bodyType}`}
          as='span'
          variant='bates'
          subStyle='emphasis'
          extend={{
            color: theme.color.foreground.secondary,
          }}
        >
          {bodyType.toUpperCase()}
        </Text>
        <Flex>
          <Text
            subStyle='emphasis'
            extend={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: '8px',
              '@media (max-width: 950px)': {
                flexDirection: 'column',
                alignItems: 'flex-start',
              },
            }}
          >
            <Text
              tabIndex={props.index + 1}
              aria-label={`model name${modelName}`}
              as='span'
              extend={{
                marginRight: '5px',
              }}
            >
              {modelName}
            </Text>
            <Text
              tabIndex={props.index + 2}
              aria-label={`model type ${modelType}`}
              as='span'
              subStyle='inline-link'
              variant='kelly'
              extend={{
                whiteSpace: 'nowrap',
              }}
            >
              {modelType}
            </Text>
          </Text>
        </Flex>
      </Flex>
      <Image src={imageUrl} alt={modelName} width={400} height={300} />
      <Flex
        extend={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}
      >
        <Link
          tabIndex={props.index + 2}
          aria-label='learn'
          href={`/learn/${id}`}
          arrow='right'
        >
          Learn
        </Link>
        <Link
          tabIndex={props.index + 2}
          aria-label='shop'
          href={`/shop/${id}`}
          arrow='right'
        >
          Shop
        </Link>
      </Flex>
    </Flex>
  )
}
