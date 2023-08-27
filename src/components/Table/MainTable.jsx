import React, { useEffect, useState } from 'react'
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
import AddTransaction from './AddTransaction/AddTransaction'
import { useTransaction } from '../../context/TransactionProvider'
import { deleteTransaction, getAllTransactions } from '../../utils/fetchDatabase'
import { useRenderCell } from './useRenderCell'

const MainTable = () => {
  const [movimientos, setMovimientos] = useState(undefined)
  const { updateTransactions, setUpdateTransactions } = useTransaction()
  const [isLoading, setIsLoading] = useState(true)

  const RenderCell = useRenderCell()

  const handleDelete = async (id) => {
    setIsLoading(true)
    await deleteTransaction(id)
    setUpdateTransactions(id)
    setIsLoading(false)
  }

  useEffect(() => {
    setIsLoading(true)

    async function getData () {
      const result = await getAllTransactions()
      const movimientosObj = result.map(movimiento => {
        movimiento.categories = movimiento.categories.map((item) => ({
          key: item,
          label: item
        }))
        return movimiento
      })
      movimientosObj.sort((a, b) => {
        const da = new Date(a.date)
        const db = new Date(b.date)
        return db - da
      })
      setMovimientos(movimientosObj)
      setIsLoading(false)
    }
    getData()
  }, [updateTransactions])

  return (
      <div className='flex flex-col  gap-3 w-[70%] my-10'>
          <AddTransaction/>

          <Table

          className='transaction-colors'
          aria-label="Tabla de movimientos" >
              <TableHeader columns={columns} >
                  {(column) => <TableColumn allowsSorting={column.sortable} key={column.uid} align={column.center ? 'center' : 'start'}>{column.name}</TableColumn>}
              </TableHeader>
              <TableBody isLoading={isLoading} loadingContent={<CircularProgress aria-label='loading' />} emptyContent={isLoading || 'Agregá movimientos con el botón de +'} items={movimientos}>

                  {movimientos
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
