import React from 'react'
import { Input } from '@nextui-org/react'

function PrimaryInput ({ label, color, handleChange, initialValue }) {
  return (
      <Input
        key={label}
        type='text'
        color={color}
        label={`${label} mensuales`}
        placeholder={'$'}
        className="max-w-[200px] transaction-colors"
        value={initialValue}
        onChange={handleChange}
        />
  )
}

export default PrimaryInput
