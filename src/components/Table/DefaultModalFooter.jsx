import { Button, ModalFooter } from '@nextui-org/react'
import React from 'react'

const DefaultModalFooter = ({ onCancel, onClose, onSubmit, isSubmitDisabled }) => {
  return (
      <ModalFooter>
          <div className="flex w-full flex-row justify-around">

              <Button color="danger" variant='shadow' onClick={onCancel}>
                  Cancelar
              </Button>
              <Button color='success' variant='shadow' isDisabled={isSubmitDisabled} onClick={onClose} onPress={onSubmit}>
                  Finalizar
              </Button>
          </div>
      </ModalFooter>
  )
}

export default DefaultModalFooter
