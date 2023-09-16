import React, { useState } from 'react'
import { Input, Button } from '@nextui-org/react'
import InstallmentMenu from './InstallmentMenu'
import { useTransaction } from '../../../context/TransactionProvider'

const QuantityInput = () => {
  const [showInstallmentMenu, setShowInstallmentMenu] = useState(false)
  const { currency, setCurrency, quantity, setQuantity } = useTransaction()
  const handlePress = () => {
    setShowInstallmentMenu((prev) => !prev)
  }
  const inputStepMap = { USD: 0.5, EUR: 0.5, ARS: 50 }
  const currencySymbolMap = { USD: '$', EUR: '€', ARS: '$' }
  return (
      <div className="flex flex-row gap-2 w-full justify-between items-end ">
          <Input
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        label="Monto Total"
        placeholder="0.00"
        labelPlacement="outside"
        startContent={
            <div className="pointer-events-none flex items-center">
                <span className="text-primary-300 text-small">
                    {currencySymbolMap[currency]}
                </span>
            </div>
        }
        endContent={
            <div className="flex items-center">
                <select
              className="outline-none border-0 bg-transparent text-default-400 text-small"
              id="currency"
              name="currency"
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
            >
                    <option>USD</option>
                    <option>ARS</option>
                    <option>EUR</option>
                </select>
            </div>
        }
        type="number"
        min="0"
        step={inputStepMap[currency]}
      />
          <Button onPress={handlePress} isDisabled color="primary">
              Cuotas?
          </Button>
          {showInstallmentMenu && <InstallmentMenu />}
      </div>
  )
}

export default QuantityInput
