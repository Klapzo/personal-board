import React from 'react'
import { Select, SelectItem } from '@nextui-org/react'
import { useTransaction } from '../../../context/TransactionProvider'
import { BiCategory } from 'react-icons/bi'

const defaultCategoryList = ['Comida', 'Entretenimiento', 'Salud', 'Transporte', 'Familia', 'Mascotas', 'Ropa', 'Café']

const CategorySelector = () => {
  const { selectedCategories, setSelectedCategories } = useTransaction()

  return (
      <div className="flex w-full max-w-xs items-end dark flex-row gap-2">
          <Select
            startContent={<BiCategory className="text-primary-300 text-xl  pointer-events-none flex-shrink-0"/>}
            label="Categorías"
            selectionMode="multiple"
            placeholder="varios"
            selectedKeys={selectedCategories}
            className="max-w-xs"
            labelPlacement="outside"
            onSelectionChange={setSelectedCategories}
      >
              {defaultCategoryList.map((category) => (
                  <SelectItem key={category} textValue={category} value={category}>
                      {category}
                  </SelectItem>
              ))}

          </Select>
      </div>)
}

export default CategorySelector
