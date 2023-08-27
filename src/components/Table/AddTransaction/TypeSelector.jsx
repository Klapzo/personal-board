import React from 'react'
import { Button, ButtonGroup } from '@nextui-org/react'
import { useTransaction } from '../../../context/TransactionProvider'

const buttonNames = ['Gasto', 'Ingreso', 'Ahorro', 'Inversión']
const buttonColorMap = { Gasto: 'danger', Ingreso: 'warning', Ahorro: 'secondary', Inversión: 'primary' }

const TypeSelector = () => {
  const { activeType, setActiveType } = useTransaction()
  const handlePress = (buttonName) => {
    setActiveType('')
    setActiveType(buttonName)
  }
  return (
      <>
          <label htmlFor="ButtonGroup" className='font-bold text-sm'>Tipo de movimiento:</label>
          <ButtonGroup size='sm' className='border-primary-50 rounded-lg transaction-colors w-full justify-between'>
              {buttonNames.map(button => (
                  <Button
                  className='w-full'
              onPress={() => handlePress(button)}
              variant={activeType === button ? 'shadow' : 'flat'}
              key={button}
              color={buttonColorMap[button]}
              >
                      {button}
                  </Button>
              ))}

          </ButtonGroup>
      </>
  )
}

export default TypeSelector
