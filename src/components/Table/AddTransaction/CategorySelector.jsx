import React from 'react'
import { Select, SelectItem, Button, useDisclosure, Modal, ModalContent, ModalHeader, ModalBody, Input, Divider, Table, TableRow, TableCell, TableBody, TableHeader, TableColumn } from '@nextui-org/react'
import { useTransaction } from '../../../context/TransactionProvider'
import { FiEdit } from 'react-icons/fi'

const CategorySelector = () => {
  const { selectedCategories, setSelectedCategories, categoryList } = useTransaction()
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure()

  return (
      <div className="flex w-full max-w-xs items-end dark flex-row gap-2">
          <Select
        label="Categorías"
        selectionMode="multiple"
        placeholder="varios"
        selectedKeys={selectedCategories}
        className="max-w-xs"
        labelPlacement="outside"
        onSelectionChange={setSelectedCategories}
      >
              {categoryList.map((category) => (
                  <SelectItem key={category} textValue={category} value={category}>
                      {category}
                  </SelectItem>
              ))}

          </Select>
          <Button isIconOnly color="primary" onPress={onOpen} ><FiEdit/></Button>
          <Modal size="xs" isOpen={isOpen} className='pb-2' onOpenChange={onOpenChange} >
              <ModalContent>
                  <ModalHeader>Editar categorías</ModalHeader>
                  <Divider></Divider>
                  <ModalBody >
                      <div className='flex flex-row gap-2 items-end'>

                          <Input type="text" isRequired label="Categoría" placeholder='nombre' labelPlacement="outside" />
                          <Button color="primary" className='' onPress={onClose}>crear</Button>
                      </div>
                      <Divider/>
                      <Table>
                          <TableHeader>
                              <TableColumn>name</TableColumn>
                              <TableColumn>actions</TableColumn>

                          </TableHeader>
                          <TableBody>
                              {categoryList.map((category) => (
                                  <TableRow key={category}>
                                      <TableCell textValue={category} value={category}>
                                          {category}
                                      </TableCell>
                                      <TableCell>
                                          <Button>delete</Button>
                                      </TableCell>
                                  </TableRow>
                              ))}
                          </TableBody>
                      </Table>
                  </ModalBody>
              </ModalContent>
          </Modal>
      </div>
  )
}

export default CategorySelector
