import {
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Divider
} from '@nextui-org/react'
import React from 'react'
import { FaPlus } from 'react-icons/fa'
import QuantityInput from './QuantityInput'
import NameInput from './NameInput'
import DateInput from './DateInput'
import CategorySelector from './CategorySelector'
import TypeSelector from './TypeSelector'
import { useTransaction } from '../../../context/TransactionProvider'

const AddTransaction = () => {
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure()
  const { handleSubmit, isValid } = useTransaction()
  return (
      <section className='flex flex-row gap-5 justify-evenly'>

          <Button onPress={onOpen} color="primary" endContent={<FaPlus/>}>Agregar movimiento</Button>

          <Modal size="xs" isOpen={isOpen} onOpenChange={onOpenChange}>
              <ModalContent>
                  <ModalHeader>Agregar Movimiento</ModalHeader>
                  <Divider />

                  <ModalBody>
                      <div className='flex flex-col gap-y-5 items-start'>
                          <NameInput />
                          <TypeSelector />
                          <CategorySelector />
                          <QuantityInput />
                          <DateInput />
                      </div>
                  </ModalBody>
                  <ModalFooter>
                      <Button color="danger" onClick={onClose}>
                          Cancelar
                      </Button>
                      <Button color='success' isDisabled={!isValid} onClick={onClose} onPress={handleSubmit}>
                          Finalizar
                      </Button>
                  </ModalFooter>
              </ModalContent>
          </Modal>

      </section>
  )
}

export default AddTransaction
