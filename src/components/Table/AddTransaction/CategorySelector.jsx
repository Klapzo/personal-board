import React, { useEffect } from 'react'
import { Select, SelectItem } from '@nextui-org/react'
import { useTransaction } from '../../../context/TransactionProvider'
import { BiCategory } from 'react-icons/bi'

const CategorySelector = () => {
  const { selectedCategories, setSelectedCategories, categoryList } =
    useTransaction()

  useEffect(() => {
    return setSelectedCategories(new Set([]))
  }, [])

  return (
      <div className="flex w-full max-w-xs items-end dark flex-row gap-2">
          <Select
        startContent={
            <BiCategory className="text-primary-300 text-xl  pointer-events-none flex-shrink-0" />
        }
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
                      <p className="rounded-full text-center ">{category}</p>
                  </SelectItem>
              ))}
          </Select>
      </div>
  )
}

export default CategorySelector
