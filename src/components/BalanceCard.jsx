import React from 'react'
import { useTransaction } from '../context/TransactionProvider'

const BalanceCard = () => {
  const { balance } = useTransaction()
  return (
      <p>Balance: <span className={`${(balance > 0 ? 'text-green-400' : 'text-red-400')} font-bold`}>{balance} $</span></p>

  )
}

export default BalanceCard
