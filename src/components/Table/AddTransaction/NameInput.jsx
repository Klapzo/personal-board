import React from 'react'
import { Input } from '@nextui-org/react'
import { useTransaction } from '../../../context/TransactionProvider'
const NameInput = () => {
  const { name, setName } = useTransaction()
  return (
      <div className='flex flex-col w-full'>

          <Input type="text" value={name} onChange={e => setName(e.target.value)} isRequired label="Nombre" placeholder='nombre' labelPlacement="outside" />
      </div>
  )
}

export default NameInput
