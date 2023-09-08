import React from 'react'
import { Input } from '@nextui-org/react'
import { useTransaction } from '../../../context/TransactionProvider'
import { BiNote } from 'react-icons/bi'
const NameInput = () => {
  const { name, setName } = useTransaction()
  return (
      <div className='flex flex-col w-full'>

          <Input
            startContent={<BiNote className="text-primary-200 text-xl  pointer-events-none flex-shrink-0"/>}
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            label="Nota"
            placeholder='agrega una nota'
            labelPlacement="outside" />
      </div>
  )
}

export default NameInput
