import { useCallback } from 'react'
import {
  Dropdown,
  DropdownTrigger,
  Chip,
  DropdownMenu,
  DropdownItem,
  Button,
  cn
} from '@nextui-org/react'
import CategoryBadge from '../components/Table/CategoryBadge'
import { FaEye, FaEdit, FaTrash } from 'react-icons/fa'
import { HiDotsVertical } from 'react-icons/hi'
import ActionsDropdownItem from '../components/Table/ActionsDropdownItem'
import { useTransaction } from '../context/TransactionProvider'

const statusColorMap = {
  ingreso: 'warning',
  gasto: 'danger',
  ahorro: 'secondary',
  inversión: 'primary'
}
export const useRenderCell = () => {
  const { handleDelete } = useTransaction()

  const renderCell = useCallback((movimiento, columnKey) => {
    const cellValue = movimiento[columnKey]
    switch (columnKey) {
      case 'id':
        break
      case 'quantity':
        return (
            <div className="flex flex-row justify-between">
                <p
              className={`text-${
                statusColorMap[movimiento.transaction_type.toLowerCase()]
              } text-lg font-semibold text-end`}
            >
                    $ {movimiento.quantity}
                </p>
                <p className="text-default-500">{movimiento.currency}</p>
            </div>
        )
      case 'currency':
        return <></>
      case 'name':
        return (
            <>
                <p className="text-md">{movimiento.name}</p>
            </>
        )
      case 'categories':
        return (
            <>
                {movimiento.categories.length
                  ? (
                      <Dropdown aria-label="categories dropdown" isDisabled>
                          <DropdownTrigger>
                              <Chip
                    endContent={
                      movimiento.categories[1] && (
                      <CategoryBadge number={movimiento.categories.length} />
                      )
                    }
                    className="flex flex-row gap-5 min-w-6 cursor-pointer"
                    radius="sm"
                    color="default"
                    size="md"
                    variant="flat"
                    aria-label="categories"
                  >
                                  <p className="text-md">{movimiento.categories[0].label}</p>
                              </Chip>
                          </DropdownTrigger>
                          <DropdownMenu
                  isDisabled
                  aria-label="categories menu"
                  items={movimiento.categories}
                >
                              {(categoria) => (
                                  <DropdownItem
                      className="cursor-default"
                      aria-label={categoria.name}
                      isReadOnly
                      key={categoria.key}
                    >
                                      {categoria.label}
                                  </DropdownItem>
                              )}
                          </DropdownMenu>
                      </Dropdown>
                    )
                  : (
                      <Chip
                radius="sm"
                color="default"
                size="md"
                variant="flat"
                aria-label="categories"
              >
                          varios
                      </Chip>
                    )}
            </>
        )

      case 'date':
        return (
            <p className="capitalize text-center" color="default" size="sm">
                {cellValue}
            </p>
        )
      case 'transaction_type':
        return (
            <div className="flex justify-center">
                <Chip
              aria-label="transaction type"
              className="capitalize"
              color={statusColorMap[movimiento.transaction_type.toLowerCase()]}
              size="sm"
              variant="flat"
            >
                    {cellValue}
                </Chip>
            </div>
        )
      case 'actions':
        return (
            <div className="relative flex justify-end items-center">
                <Dropdown aria-label="details dropdown">
                    <DropdownTrigger aria-label="details">
                        <Button isIconOnly size="sm" variant="light">
                            <HiDotsVertical className="text-default-300" />
                        </Button>
                    </DropdownTrigger>

                    <DropdownMenu aria-label="actions">
                        <DropdownItem aria-label="details" key="details">
                            <ActionsDropdownItem
                    aria-label="details"
                    icon={<FaEye />}
                    text="Detalles"
                    color="default"
                  />
                        </DropdownItem>

                        <DropdownItem aria-label="edit" key="edit">
                            <ActionsDropdownItem
                    aria-label="edit"
                    icon={<FaEdit />}
                    text="Editar"
                    color="default"
                  />
                        </DropdownItem>

                        <DropdownItem
                  aria-label="delete"
                  key="delete"
                  onPress={() => handleDelete(movimiento.id)}
                >
                            <ActionsDropdownItem
                    aria-label="delete"
                    icon={<FaTrash className={cn('text-danger')} />}
                    text="Eliminar movimiento"
                    color="danger"
                  />
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>
        )
      default:
        return cellValue
    }
  }, [])

  return renderCell
}
