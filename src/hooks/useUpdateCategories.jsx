import { useFieldArray, useForm } from 'react-hook-form'
import { useEffect, useRef, useState } from 'react'
import { useTransaction } from '../context/TransactionProvider'
import { useAuth } from './useAuth'
import { addUserCategories } from '../utils/fetchDatabase'
import { initialState } from '../reducers/Transaction'

const useUpdateCategories = () => {
  const { categoryList, setUserCategoryList } = useTransaction()
  const { session } = useAuth()
  const [newInput, setNewInput] = useState('')
  const newInputRef = useRef()

  const { register, control, watch, setFocus } = useForm({
    defaultValues: {
      categories: categoryList.map((category) => ({
        category
      }))

    }
  })
  const { fields, prepend, remove } = useFieldArray({
    control,
    name: 'categories'
  })
  const watchFieldArray = watch('categories')
  const controlledFields = fields.map((field, index) => {
    return {
      ...field,
      ...watchFieldArray[index]
    }
  })

  const handleAddInput = () => {
    prepend({ category: newInput }, { shouldFocus: false })
    setNewInput('')
    handleCategorySubmit()
  }

  useEffect(() => {
    setFocus()
    if (controlledFields.length === 0) {
      setUserCategoryList([''])
    } else {
      const userCategories = controlledFields.map(
        (categoryObj) => categoryObj.category
      )
      setUserCategoryList(userCategories)
    }
  }, [watchFieldArray])

  const handleCategorySubmit = () => {
    const categoriesObject = [
      {
        owner_id: session.user.id,
        category_list: controlledFields.map(
          (categoryObj) => categoryObj.category
        )
      }
    ]
    addUserCategories(categoriesObject)
  }

  const resetCategories = () => {
    const defaultCategories = initialState.defaultCategories.map(
      (category) => ({
        category
      })
    )

    defaultCategories.forEach((category) => prepend(category))
  }

  return {
    newInputRef,
    newInput,
    setNewInput,
    handleAddInput,
    controlledFields,
    register,
    remove,
    handleCategorySubmit,
    resetCategories
  }
}

export default useUpdateCategories
