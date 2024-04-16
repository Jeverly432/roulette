import React from 'react'
import useImage from 'use-image'
import { Group, Image as KonvaImage, Rect } from 'react-konva'
import { URLImageProps } from './types'

const URLImageMap: React.FC<URLImageProps> = ({ src, x, y, width, height }) => {
  const [image] = useImage(src)
  return (
    <Group x={x} y={y}>
      <KonvaImage
        image={image}
        x={0}
        y={0}
        width={width}
        height={height}
      />
    </Group>
  )
}

export default URLImageMap
