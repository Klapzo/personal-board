import React, { useEffect } from 'react'
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  CircularProgress

} from '@nextui-org/react'
import { columns } from './tableData'
import { useTransaction } from '../../context/TransactionProvider'
import { useRenderCell } from './useRenderCell'
import MainModal from './MainModal'

const MainTable = () => {
  const { isLoading, transactions, getData, handleDelete } = useTransaction()
  const RenderCell = useRenderCell()

  useEffect(() => {
    const func = async () => {
      await getData()
    }
    func()
  }, [isLoading])

  return (
      <div className='flex flex-col  gap-3 w-[70%] my-10'>
          <MainModal/>

          <Table

          className='transaction-colors'
          aria-label="Tabla de movimientos" >
              <TableHeader columns={columns} >
                  {(column) => <TableColumn allowsSorting={column.sortable} key={column.uid} align={column.center ? 'center' : 'start'}>{column.name}</TableColumn>}
              </TableHeader>
              <TableBody isLoading={isLoading} loadingContent={<CircularProgress aria-label='loading' />} emptyContent={isLoading || 'Agregá movimientos con el botón de +'} items={transactions}>

                  {transactions
                    ? (item) => (
                        <TableRow key={item.id}>
                            {(columnkey) => <TableCell aria-label='cell'>{RenderCell(item, columnkey, handleDelete)}</TableCell>}

                        </TableRow>
                      )
                    : ''

        }

              </TableBody >
          </Table>
      </div>
  )
}
export default MainTable
