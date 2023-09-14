import React from 'react'
import { Badge } from '@nextui-org/react'

function CategoryBadge ({ number }) {
  return (
      <Badge
      isOneChar
      size="sm"
      className=" mr-2 p-auto"
      content={number}
      disableOutline
    />
  )
}

export default CategoryBadge
