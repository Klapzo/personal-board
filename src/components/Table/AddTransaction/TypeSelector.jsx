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
      <div className='flex flex-col w-full gap-2'>
          <label htmlFor="ButtonGroup" className='font-bold text-sm'>Tipo de movimiento</label>
          <ButtonGroup size='sm' className=' border-primary-50 rounded-lg transaction-colors'>
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
      </div>
  )
}

export default TypeSelector
