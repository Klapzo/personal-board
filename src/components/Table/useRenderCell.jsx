import { useCallback } from 'react'
import { Dropdown, DropdownTrigger, Chip, DropdownMenu, DropdownItem, Button, cn } from '@nextui-org/react'
import CategoryBadge from './CategoryBadge'
import { FaEye, FaEdit, FaTrash } from 'react-icons/fa'
import { HiDotsVertical } from 'react-icons/hi'
import ActionsDropdownItem from './ActionsDropdownItem'

const statusColorMap = {
  ingreso: 'warning',
  gasto: 'danger',
  ahorro: 'secondary',
  inversión: 'primary'
}
export const useRenderCell = () => {
  const renderCell = useCallback((movimiento, columnKey, handleDelete) => {
    const cellValue = movimiento[columnKey]

    switch (columnKey) {
      case 'id':
        break
      case 'quantity':
        return (
            <h2 className={`text-${statusColorMap[movimiento.transaction_type.toLowerCase()]} font-xl font-semibold`}>{movimiento.quantity}</h2>
        )
      case 'currency':
        return (
            <p>{movimiento.currency ? movimiento.currency : 'AR$' }</p>
        )
      case 'name':
        return (
            <>
                <h1 className='text-lg'>{movimiento.name}</h1>
            </>
        )
      case 'categories':
        return (
            <>
                {movimiento.categories.length
                  ? <Dropdown aria-label='categories dropdown' isDisabled>
                      <DropdownTrigger >
                          <Chip
                            endContent={movimiento.categories[1] && <CategoryBadge number={movimiento.categories.length}/>}
                            className="flex flex-row gap-5 min-w-5 text-center cursor-pointer place-content-around"
                            radius="sm"
                            color='white' size="lg" variant="flat"
                            aria-label="categories "
                            >

                              {movimiento.categories[0].label}
                          </Chip>
                      </DropdownTrigger>
                      <DropdownMenu isDisabled aria-label="categories menu" items={movimiento.categories}>
                          {(categoria) =>
                            (<DropdownItem aria-label={categoria.name} showDivider isReadOnly key={categoria.key}>

                                {categoria.label}

                            </DropdownItem>)
                          }

                      </DropdownMenu>
                  </Dropdown>
                  : 'varios'
                }
            </>
        )

      case 'date':
        return (
            <p className="capitalize" color="default" size="sm" >
                {cellValue}
            </p>
        )
      case 'transaction_type':
        return (
            <Chip
            aria-label='transaction type'
            className="capitalize "
            color={statusColorMap[movimiento.transaction_type.toLowerCase()]}
            size="sm"
            variant="flat">
                {cellValue}
            </Chip>
        )
      case 'actions':
        return (
            <div className="relative flex justify-enditems-center gap-2">
                <Dropdown aria-label='details dropdown'>

                    <DropdownTrigger aria-label="details">

                        <Button isIconOnly size="sm" variant="light">
                            <HiDotsVertical className="text-default-300" />
                        </Button>

                    </DropdownTrigger>

                    <DropdownMenu aria-label="actions">

                        <DropdownItem aria-label="details" key="details">
                            <ActionsDropdownItem aria-label="details" icon={<FaEye /> } text="Detalles" color="default"/>
                        </DropdownItem>

                        <DropdownItem aria-label="edit" key="edit">
                            <ActionsDropdownItem aria-label="edit" icon={ <FaEdit /> } text="Editar" color="default" />
                        </DropdownItem>

                        <DropdownItem aria-label="delete" key="delete" onPress={() => handleDelete(movimiento.id)}>
                            <ActionsDropdownItem aria-label="delete"
                             icon={ <FaTrash className={cn('text-danger')} /> }
                             text="Eliminar movimiento"
                             color="default"/>
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
