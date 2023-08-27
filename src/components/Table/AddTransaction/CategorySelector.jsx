import React, { useMemo } from 'react'
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, Chip } from '@nextui-org/react'
import { useTransaction } from '../../../context/TransactionProvider'

const CategorySelector = () => {
  const { selectedCategories, setSelectedCategories, categoryList } = useTransaction()

  const selectedValue = useMemo(
    () => Array.from(selectedCategories).join(', ').replaceAll('_', ' '),
    [selectedCategories]
  )

  return (
      <div className='flex flex-col w-full gap-2'>
          <label className='text-white font-bold text-sm leading-[1.125rem]' htmlFor="dropdown"> Categorías: </label>
          <Dropdown>
              <DropdownTrigger>
                  <Button
            variant="bordered"
            className="flex w-full capitalize"
            fullWidth
            >
                      {!selectedValue.split(',')[3]
                        ? selectedValue
                        : (`${selectedValue.split(',')[0]}, ${selectedValue.split(',')[1]}, ${selectedValue.split(',')[2]}, ${(selectedValue.split(',').length - 3)} más...`)}
                  </Button>
              </DropdownTrigger>
              <DropdownMenu
        disallowEmptySelection
        fullWidth
        aria-label="Single selection actions"
        variant="flat"
        closeOnSelect={false}
        selectionMode="multiple"
        selectedKeys={selectedCategories}
        onSelectionChange={setSelectedCategories}
        >
                  {categoryList.map((categoria) => (
                      <DropdownItem textValue={categoria} key={categoria}>
                          <Chip
                    className="flex flex-row gap-3 text-center"
                    radius="sm"
                    color='white' size="lg" variant="bordered">
                              {categoria}
                          </Chip>
                      </DropdownItem>
                  ))}
              </DropdownMenu>
          </Dropdown>
      </div>

  )
}

export default CategorySelector
