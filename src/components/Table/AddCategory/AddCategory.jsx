import React from 'react'
import { useTransaction } from '../../../context/TransactionProvider'
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@nextui-org/react'
import ActionsDropdownItem from './../ActionsDropdownItem'
import { FaTrash } from 'react-icons/fa'
function AddCategory () {
  const { categoryList } = useTransaction()

  return (
      <>
          <Table hideHeader isStriped aria-label="Categories table">
              <TableHeader>
                  <TableColumn>NAME</TableColumn>
                  <TableColumn>ACTIONS</TableColumn>
              </TableHeader>
              <TableBody>
                  { categoryList.map((category) => (
                      <TableRow className=' justify-between' key={category} >
                          <TableCell>
                              {category}
                          </TableCell>
                          <TableCell >
                              <ActionsDropdownItem tooltip={'eliminar categoría'} color="danger" icon={<FaTrash/>} />
                          </TableCell>
                      </TableRow>
                  )) }
              </TableBody>
          </Table>

      </>
  )
}

export default AddCategory
