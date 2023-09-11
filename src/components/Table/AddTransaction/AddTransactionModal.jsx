import React from 'react'
import QuantityInput from './QuantityInput'
import NameInput from './NameInput'
import DateInput from './DateInput'
import CategorySelector from './CategorySelector'
import TypeSelector from './TypeSelector'
import { ModalBody } from '@nextui-org/react'
import { useTransaction } from '../../../context/TransactionProvider'
import DefaultModalFooter from '../DefaultModalFooter'

const AddTransactionModal = ({ onClose }) => {
  const { handleSubmit, isValid } = useTransaction()

  return (
      <>
          <ModalBody>
              <div className='flex flex-col gap-y-2 items-start'>
                  <QuantityInput />
                  <TypeSelector />
                  <CategorySelector />
                  <NameInput />
                  <DateInput />
              </div>
          </ModalBody>
          <DefaultModalFooter
          onCancel={onClose}
          onClose={onClose}
          isSubmitDisabled={!isValid}
          onSubmit={handleSubmit}/>

      </>

  )
}

export default AddTransactionModal
