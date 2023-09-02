import React from 'react'
import { Select, SelectItem } from '@nextui-org/react'
import { useTransaction } from '../../../context/TransactionProvider'

const CategorySelector = () => {
  const { selectedCategories, setSelectedCategories, categoryList } = useTransaction()

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
      </div>)
}

export default CategorySelector
