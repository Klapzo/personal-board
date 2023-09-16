import React, { useState } from 'react'
import AddTransactionModal from './AddTransaction/AddTransactionModal'
import {
  Button,
  Divider,
  Modal,
  ModalContent,
  ModalHeader,
  Tab,
  Tabs,
  useDisclosure
} from '@nextui-org/react'
import { FaPlus } from 'react-icons/fa'
import AddCategoryModal from './AddCategory/AddCategoryModal'
import { useAuth } from '../../hooks/useAuth'

const MainModal = () => {
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure()
  const [selectedKey, setSelectedKey] = useState('transaction')
  const { session } = useAuth()

  return (
      <div className="w-full ">
          <Button
        isDisabled={!session}
        onPress={onOpen}
        color="primary"
        endContent={<FaPlus />}
      >
              Agregar movimiento
          </Button>

          <Modal
        size="xs"
        className="min-h-[36em] overflow-y-visible scrollbar-hide"
        placement='center'
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
              <ModalContent>
                  <ModalHeader className="flex gap-2 flex-col items-center">
                      <h1>Agregar</h1>

                      <Tabs
              disableAnimation={false}
              onSelectionChange={(key) => {
                setSelectedKey(key)
              }}
              selectedKey={selectedKey}
              key="main"
              color="primary"
              aria-label="Tabs colors"
              radius="full"
            >
                          <Tab key="transaction" title="Transacción" />
                          <Tab key="category" title="Categoría" />
                      </Tabs>
                  </ModalHeader>
                  <Divider />
                  {selectedKey === 'transaction' && (
                  <AddTransactionModal onClose={onClose} />
                  )}
                  {selectedKey === 'category' && <AddCategoryModal onClose={onClose} />}
              </ModalContent>
          </Modal>
      </div>
  )
}

export default MainModal
