import React from 'react'
import { useTransaction } from '../context/TransactionProvider'
import { Card, CardBody, CardHeader } from '@nextui-org/react'

const BalanceCard = () => {
  const { quantities } = useTransaction()
  return (
      <Card
      className="border-none bg-default-100/50 min-w-[250px] h-[100px] "
      shadow="md"
    >
          <CardHeader className="flex justify-around">
              <span>Ingresos</span>
              <span>Balance</span>
          </CardHeader>
          <CardBody className="flex flex-row text-center justify-around transaction-colors">
              <span
          className={`${
            quantities.Ingreso >= 0 ? 'text-warning' : 'text-red-400'
          } font-bold`}
        >
                  {quantities.Ingreso} $
              </span>
              <span
          className={`${
            quantities.Balance >= 0 ? 'text-green-400' : 'text-red-400'
          } font-bold`}
        >
                  {quantities.Balance} $
              </span>
          </CardBody>
      </Card>
  )
}

export default BalanceCard
