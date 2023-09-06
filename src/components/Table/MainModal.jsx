import React, { useState } from 'react'
import AddTransaction from './AddTransaction/AddTransaction'
import { Button, Divider, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Tab, Tabs, useDisclosure } from '@nextui-org/react'
import { useTransaction } from '../../context/TransactionProvider'
import { FaPlus } from 'react-icons/fa'
import AddCategory from './AddCategory/AddCategory'
import { useAuth } from '../../hooks/useAuth'

const MainModal = () => {
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure()
  const { handleSubmit, isValid } = useTransaction()
  const [selectedKey, setSelectedKey] = useState('transaction')
  const { session } = useAuth()

  return (
      <div className='w-full '>
          <Button isDisabled={!session} onPress={onOpen} color="primary" endContent={<FaPlus/>}>Agregar movimiento</Button>

          <Modal size="xs" className='h-[36em]' isOpen={isOpen} onOpenChange={onOpenChange}>
              <ModalContent>
                  <ModalHeader className='flex gap-2 flex-col items-center'>

                      <h1>Agregar</h1>

                      <Tabs disableAnimation={false} onSelectionChange={(key) => { setSelectedKey(key) }} selectedKey={selectedKey} key="main" color="primary" aria-label="Tabs colors" radius="full">
                          <Tab key="transaction" title="Transacción"/>
                          <Tab key="category" title="Categoría"/>
                      </Tabs>

                  </ModalHeader>
                  <Divider />
                  <ModalBody >
                      {selectedKey === 'transaction' && <AddTransaction/>}
                      {selectedKey === 'category' && <AddCategory/>}
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
      </div>
  )
}

export default MainModal
