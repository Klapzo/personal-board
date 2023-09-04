import React, { useState } from 'react'
import { Input, Button } from '@nextui-org/react'
import InstallmentMenu from './InstallmentMenu'
import { useTransaction } from '../../../context/TransactionProvider'

const QuantityInput = () => {
  const [showInstallmentMenu, setShowInstallmentMenu] = useState(false)
  const { currency, setCurrency, quantity, setQuantity } = useTransaction()
  const handlePress = () => {
    setShowInstallmentMenu(prev => !prev)
  }

  return (
      <div className='flex flex-row gap-2 w-full justify-between items-end '>

          <Input
            value={quantity}
            onChange={e => setQuantity(e.target.value)}
            isRequired
            label="Monto Total"
            placeholder="0.00"
            labelPlacement="outside"
            startContent={
                <div className="pointer-events-none flex items-center">
                    <span className="text-default-400 text-small">$</span>
                </div>
        }
        endContent={
            <div className="flex items-center">
                <label className="sr-only" htmlFor="currency">
                    Currency
                </label>
                <select
                className="outline-none border-0 bg-transparent text-default-400 text-small"
                id="currency"
                name="currency"
                value={currency}
                onChange={e => setCurrency(e.target.value)}
                >
                    <option>USD</option>
                    <option>ARS</option>
                    <option>EUR</option>
                </select>
            </div>
        }
        type="number"

        />
          <Button onPress={handlePress} isDisabled color='primary'>Cuotas?</Button>
          {showInstallmentMenu && <InstallmentMenu />}
      </div>
  )
}

export default QuantityInput
