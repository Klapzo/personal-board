import React, { createContext, useContext, useEffect, useState } from 'react'
import { AddTransaction } from '../utils/fetchDatabase'

export const AddTransactionContext = createContext()

const TransactionProvider = ({ children }) => {
  const [name, setName] = useState('')
  const [updateTransactions, setUpdateTransactions] = useState('')
  const [activeType, setActiveType] = useState('')
  const [selectedCategories, setSelectedCategories] = useState(['otros'])
  const categoryList = ['cariñosas', 'fijos', 'pizzaM', 'nose', 'compu', 'cafe', 'otros']
  const [quantity, setQuantity] = useState('')
  const [currency, setCurrency] = useState('ARS')
  const [inputDate, setInputDate] = useState(new Date())
  const [isValid, setIsValid] = useState(false)

  useEffect(() => {
    validateInputs()
  }, [name, activeType, selectedCategories, quantity])

  function validateInputs () {
    if (name && activeType && selectedCategories && quantity) setIsValid(true)
    else setIsValid(false)
  }

  function createTransaction () {
    const categoriesArray = Array.from(selectedCategories)
    const newTransaction = [{
      name,
      transaction_type: activeType,
      categories: categoriesArray,
      quantity,
      currency,
      date: inputDate.toISOString().split('T')[0]
    }]
    return newTransaction
  }

  async function handleSubmit () {
    const transaction = createTransaction()
    await AddTransaction(transaction)
    setUpdateTransactions(transaction)
  }

  return (
      <AddTransactionContext.Provider value={{ updateTransactions, setUpdateTransactions, isValid, inputDate, setInputDate, currency, setCurrency, quantity, setQuantity, categoryList, selectedCategories, setSelectedCategories, activeType, setActiveType, name, setName, AddTransaction, handleSubmit }}>
          {children}
      </AddTransactionContext.Provider>
  )
}
export default TransactionProvider

export const useTransaction = () => {
  const context = useContext(AddTransactionContext)

  if (context === undefined) {
    throw new Error('useTransaction must be used within Transactionprovider')
  }
  return context
}
