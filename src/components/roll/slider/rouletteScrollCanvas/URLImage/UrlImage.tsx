import React from 'react'
import useImage from 'use-image'
import { Group, Image as KonvaImage, Rect } from 'react-konva'
import { URLImageProps } from './types'

const URLImage: React.FC<URLImageProps> = ({ src, x, y, width, height }) => {
  const [image] = useImage(src)
  return (
    <Group x={x} y={y}>
      <KonvaImage image={image} width={width} height={height} />
    </Group>
  )
}
export default URLImage
