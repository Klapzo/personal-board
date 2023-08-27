import React, { createContext, useContext, useEffect, useReducer } from 'react'
import { AddTransaction, deleteTransaction, getAllTransactions } from '../utils/fetchDatabase'
import { initialState, reducer } from '../reducers/Transaction'

export const AddTransactionContext = createContext()

const TransactionProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const setName = (name) => dispatch({ type: 'SET_NAME', payload: name })
  const setIsLoading = (isLoading) =>
    dispatch({ type: 'SET_IS_LOADING', payload: isLoading })
  const setActiveType = (activeType) => dispatch({ type: 'SET_ACTIVE_TYPE', payload: activeType })
  const setSelectedCategories = (selectedCategories) =>
    dispatch({ type: 'SET_SELECTED_CATEGORIES', payload: selectedCategories })
  const setQuantity = (quantity) => dispatch({ type: 'SET_QUANTITY', payload: quantity })
  const setCurrency = (currency) => dispatch({ type: 'SET_CURRENCY', payload: currency })
  const setInputDate = (inputDate) => dispatch({ type: 'SET_INPUT_DATE', payload: inputDate })
  const setIsValid = (isValid) => dispatch({ type: 'SET_IS_VALID', payload: isValid })
  const setTransactions = (transactions) => dispatch({ type: 'SET_TRANSACTIONS', payload: transactions })

  useEffect(() => {
    validateInputs()
  }, [state.name, state.activeType, state.selectedCategories, state.quantity])

  function validateInputs () {
    if (state.name && state.activeType && state.selectedCategories && state.quantity) setIsValid(true)
    else setIsValid(false)
  }

  function createTransaction () {
    const categoriesArray = Array.from(state.selectedCategories)
    const newTransaction = [{
      name: state.name,
      transaction_type: state.activeType,
      categories: categoriesArray,
      quantity: state.quantity,
      currency: state.currency,
      date: state.inputDate.toISOString().split('T')[0]
    }]
    return newTransaction
  }

  async function handleSubmit () {
    setIsLoading(true)
    const transaction = createTransaction()
    await AddTransaction(transaction)
    setIsLoading(false)
  }
  async function handleDelete (id) {
    setIsLoading(true)
    await deleteTransaction(id)
    setIsLoading(false)
  }

  async function getData () {
    const result = await getAllTransactions()
    const transactionObj = result.map(movimiento => {
      movimiento.categories = movimiento.categories.map((item) => ({
        key: item,
        label: item
      }))
      return movimiento
    })
    transactionObj.sort((a, b) => {
      const da = new Date(a.date)
      const db = new Date(b.date)
      return db - da
    })
    setTransactions(transactionObj)
    setIsLoading(false)
  }

  return (
      <AddTransactionContext.Provider value={{
        isLoading: state.isLoading,
        setIsLoading,
        isValid: state.isValid,
        inputDate: state.inputDate,
        setInputDate,
        currency: state.currency,
        setCurrency,
        quantity: state.quantity,
        setQuantity,
        categoryList: state.categoryList,
        selectedCategories: state.selectedCategories,
        setSelectedCategories,
        activeType: state.activeType,
        setActiveType,
        name: state.name,
        setName,
        AddTransaction,
        handleSubmit,
        handleDelete,
        getData,
        transactions: state.transactions,
        setTransactions
      }}>
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
