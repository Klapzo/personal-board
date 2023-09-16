import React, { useEffect, useState } from 'react'
import { Button, ButtonGroup, Input } from '@nextui-org/react'
import { useTransaction } from '../../../context/TransactionProvider'

const DateInput = () => {
  const { inputDate, setInputDate } = useTransaction()
  const [dateDiff, setDateDiff] = useState('0')

  const setToday = () => {
    setInputDate(new Date())
  }

  useEffect(() => {
    const rtf = new Intl.RelativeTimeFormat('es', { numeric: 'auto' })

    const result = new Date()
    const diff = Math.floor(
      (result.getTime() - inputDate.getTime()) / 86400000
    )
    setDateDiff(rtf.format(-diff, 'day'))
  }, [inputDate])

  const addDays = (date, diff) => {
    const result = new Date(date)
    result.setDate(result.getDate() + diff)
    setInputDate(result)
  }
  return (
      <div className="flex flex-row w-full justify-between items-center ">
          <Input
        variant="outside"
        placeholder="none"
        value={new Date(inputDate).toISOString().split('T')[0]}
        type="date"
        label="Fecha"
        className="w-[8rem] icon-primary"
        labelPlacement="outside"
        description={dateDiff}
      />

          <ButtonGroup size="sm" variant="ghost">
              <Button
          className="h-10 w-1 font-bold"
          onPress={() => addDays(inputDate, -1)}
          color="primary"
        >
                  -1
              </Button>
              <Button
          className="h-10 w-[1px] font-bold"
          onPress={setToday}
          color="primary"
        >
                  hoy
              </Button>
          </ButtonGroup>
      </div>
  )
}

export default DateInput
