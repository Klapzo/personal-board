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
import { useRenderCell } from '../../hooks/useRenderCell'
import MainModal from './MainModal'
import { useAuth } from '../../hooks/useAuth'

const MainTable = () => {
  const { isLoading, transactions, getData } = useTransaction()
  const RenderCell = useRenderCell()
  const { session } = useAuth()
  useEffect(() => {
    async function fetch () {
      getData()
    }
    fetch()
  }, [])
  return (
      <div className='flex flex-col h-full  gap-3 max-w-[1000px] my-10'>
          <MainModal/>

          <Table
          selectionMode='multiple'
          className='transaction-colors'
          aria-label="Tabla de movimientos" >
              <TableHeader columns={columns} >
                  {(column) => <TableColumn
                  allowsSorting={column.sortable}
                  key={column.uid}
                  align={column.center ? 'center' : 'end'}
                  className='text-center'
                  width={column.width}
                  >
                      {column.name}
                  </TableColumn>}
              </TableHeader>
              <TableBody isLoading={isLoading} loadingContent={<CircularProgress aria-label='loading' />} emptyContent={isLoading || (session ? 'Agregá movimientos con el botón de +' : 'debes estar logueado para agregar movimientos')} items={transactions}>

                  {transactions
                    ? (item) => (
                        <TableRow key={item.id}>
                            {(columnkey) => <TableCell aria-label='cell'>{RenderCell(item, columnkey)}</TableCell>}

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
