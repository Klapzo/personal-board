import React from 'react'
import QuantityInput from './QuantityInput'
import NameInput from './NameInput'
import DateInput from './DateInput'
import CategorySelector from './CategorySelector'
import TypeSelector from './TypeSelector'

const AddTransaction = () => {
  return (

      <div className='flex flex-col gap-y-2 items-start'>
          <QuantityInput />
          <TypeSelector />
          <CategorySelector />
          <NameInput />
          <DateInput />
      </div>

  )
}

export default AddTransaction
