import React, { useEffect, useRef, useState } from 'react'
import { useTransaction } from '../../../context/TransactionProvider'
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, Input, ModalBody } from '@nextui-org/react'
import ActionsButtonGroup from './ActionsButtonGroup'
import { useFieldArray, useForm } from 'react-hook-form'

import PlusButton from '../../PlusButton'
import { addUserCategories } from '../../../utils/fetchDatabase'
import DefaultModalFooter from '../DefaultModalFooter'
import { useAuth } from '../../../hooks/useAuth'
function AddCategoryModal () {
  const { categoryList, setUserCategoryList } = useTransaction()
  const [newInput, setNewInput] = useState('')
  const { session } = useAuth()
  const newInputRef = useRef()
  const { register, control, watch } = useForm({
    defaultValues: {
      categories:
      categoryList.map((category) => ({
        category
      }))
    }
  })
  const { fields, prepend, remove } = useFieldArray({
    control,
    name: 'categories'
  })
  useEffect(() => {
    newInputRef.current.focus()
  }, [fields])

  const watchFieldArray = watch('categories')
  const controlledFields = fields.map((field, index) => {
    return {
      ...field,
      ...watchFieldArray[index]
    }
  })
  const handleAddInput = () => {
    prepend({ category: newInput })
    setNewInput('')
  }

  useEffect(() => {
    if (controlledFields.length === 0) {
      setUserCategoryList(['varios'])
    } else {
      const userCategories = controlledFields.map(categoryObj => (categoryObj.category))
      setUserCategoryList(userCategories)
    }
  }, [watchFieldArray])
  const handleCategorySubmit = () => {
    const categoriesObject = [{
      owner_id: session.user.id,
      category_list: controlledFields.map(categoryObj => (categoryObj.category))
    }]
    addUserCategories(categoriesObject)
  }
  return (

      <>
          <ModalBody>
              <div className='flex flex-row gap-4 w-full'>
                  <Input ref={newInputRef} type="text" value={newInput} onChange={e => setNewInput(e.target.value)} label="Añadir Categoría" size='md' labelPlacement='outside' placeholder='Nombre' />
                  <PlusButton isDisabled={!newInput.length} onClick={handleAddInput}/>
              </div>
              <Table hideHeader aria-label="Categories table">
                  <TableHeader>
                      <TableColumn>NAME</TableColumn>
                      <TableColumn>ACTIONS</TableColumn>
                  </TableHeader>
                  <TableBody emptyContent="no hay categorías">
                      { controlledFields.map((category, index) => (
                          <TableRow className=' justify-between' key={category.id} >
                              <TableCell>
                                  <Input
                                  {...register(`categories.${index}.category`)}
                                  size='sm'
                                  classNames={{
                                    inputWrapper: ['bg-transparent']
                                  }}
                              />

                              </TableCell>
                              <TableCell >
                                  <ActionsButtonGroup
                              onDelete={() => remove(index)}
                              />
                              </TableCell>

                          </TableRow>
                      )) }
                  </TableBody>
              </Table>
              <DefaultModalFooter onSubmit={handleCategorySubmit} />
          </ModalBody>
      </>

  )
}

export default AddCategoryModal
