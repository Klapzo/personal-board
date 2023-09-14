import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Input,
  ModalBody,
  Button,
  CircularProgress
} from '@nextui-org/react'
import ActionsButtonGroup from './ActionsButtonGroup'
import PlusButton from '../../PlusButton'
import DefaultModalFooter from '../DefaultModalFooter'
import useUpdateCategories from '../../../hooks/useUpdateCategories'

function AddCategoryModal () {
  const {
    newInputRef,
    newInput,
    setNewInput,
    handleAddInput,
    controlledFields,
    register,
    remove,
    handleCategorySubmit,
    resetCategories
  } = useUpdateCategories()

  return (
      <>
          <ModalBody>
              <div className="flex flex-row gap-4 w-full">
                  <Input
                    ref={newInputRef}
                    type="text"
                    value={newInput}
                    onChange={(e) => setNewInput(e.target.value)}
                    label="Añadir Categoría"
                    size="md"
                    labelPlacement="outside"
                    placeholder="Nombre"
          />
                  <PlusButton isDisabled={!newInput.length} onClick={handleAddInput} />
              </div>
              <Table hideHeader aria-label="Categories table">
                  <TableHeader>
                      <TableColumn>NAME</TableColumn>
                      <TableColumn>ACTIONS</TableColumn>
                  </TableHeader>
                  <TableBody
            loadingContent={
                <CircularProgress aria-label="loading" className="z-10" />
            }
            emptyContent={
                <span className="flex flex-col justify-between h-full">
                    no hay categorías
                    <Button
                  size="md"
                  className="self-center"
                  onPress={() => resetCategories()}
                >
                        reiniciar
                    </Button>
                </span>
            }
          >
                      {controlledFields.map((category, index) => (
                          <TableRow className=" justify-between" key={category.id}>
                              <TableCell>
                                  <Input
                    {...register(`categories.${index}.category`)}
                    size="sm"
                    classNames={{
                      inputWrapper: ['bg-transparent']
                    }}
                  />
                              </TableCell>
                              <TableCell>
                                  <ActionsButtonGroup onDelete={() => remove(index)} />
                              </TableCell>
                          </TableRow>
                      ))}
                  </TableBody>
              </Table>
          </ModalBody>
          <DefaultModalFooter onSubmit={handleCategorySubmit} />
      </>
  )
}

export default AddCategoryModal
