import { Button } from '@nextui-org/react'
import React from 'react'
import { FaPlus } from 'react-icons/fa'

const PlusButton = ({ isDisabled, onClick }) => {
  return (
      <Button
      onPress={onClick}
      isDisabled={isDisabled}
      className="flex self-end"
      isIconOnly
      color="primary"
    >
          <FaPlus />
      </Button>
  )
}

export default PlusButton
