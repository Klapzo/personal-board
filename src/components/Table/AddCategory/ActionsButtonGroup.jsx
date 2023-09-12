import { Button, ButtonGroup } from '@nextui-org/react'
import React from 'react'
import ActionsDropdownItem from '../ActionsDropdownItem'
import { BiTrashAlt } from 'react-icons/bi'
// import { BiEdit } from 'react-icons/bi'

const ActionsButtonGroup = ({ isDisabled, onEdit, onDelete }) => {
  return (
      <div className='flex flex-row'>
          <ButtonGroup size="sm" variant='light'>
              {/*
              <Button variant={isDisabled && 'shadow'} isIconOnly onPress={onEdit}>
                  <ActionsDropdownItem className="flex text-2xl flex-shrink-0" color="default-400" icon={<BiEdit />} />
              </Button> */}

              <Button onPress={onDelete} isIconOnly>
                  <ActionsDropdownItem color="danger" icon={<BiTrashAlt/>} />
              </Button>

          </ButtonGroup>
      </div>
  )
}

export default ActionsButtonGroup
