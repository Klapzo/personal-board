import React from 'react'
import { Input } from '@nextui-org/react'
const InstallmentMenu = () => {
  return (
      <>
          <Input
        type="number"
        label="Cantidad"
        labelPlacement="outside"
        placeholder="3"
        className="max-w-[7rem]"
      />

          <Input
        type="number"
        label="Interés Mensual"
        labelPlacement="outside"
        placeholder="0.3%"
        className="max-w-[7rem]"
      />
      </>
  )
}

export default InstallmentMenu
