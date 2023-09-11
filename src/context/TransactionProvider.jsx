import React, { createContext, useContext, useEffect, useReducer, useState } from 'react'
import { AddTransaction, deleteTransaction, getAllTransactions, getQuantities, getuserCategories } from '../utils/fetchDatabase'
import { initialState, reducer } from '../reducers/Transaction'
import { useAuth } from '../hooks/useAuth'
import { createTransactionObject } from '../utils/createTransactionObject'

export const AddTransactionContext = createContext()

const TransactionProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { session } = useAuth()

  const setName = (name) => dispatch({ type: 'SET_NAME', payload: name })
  const setIsLoading = (isLoading) => dispatch({ type: 'SET_IS_LOADING', payload: isLoading })
  const setActiveType = (activeType) => dispatch({ type: 'SET_ACTIVE_TYPE', payload: activeType })
  const setSelectedCategories = (selectedCategories) => dispatch({ type: 'SET_SELECTED_CATEGORIES', payload: selectedCategories })
  const setQuantity = (quantity) => dispatch({ type: 'SET_QUANTITY', payload: quantity })
  const setCurrency = (currency) => dispatch({ type: 'SET_CURRENCY', payload: currency })
  const setInputDate = (inputDate) => dispatch({ type: 'SET_INPUT_DATE', payload: inputDate })
  const setIsValid = (isValid) => dispatch({ type: 'SET_IS_VALID', payload: isValid })
  const setTransactions = (transactions) => dispatch({ type: 'SET_TRANSACTIONS', payload: transactions })

  const [quantities, setQuantities] = useState({})

  const [userCategoryList, setUserCategoryList] = useState(state.defaultCategories)
  useEffect(() => {
    validateInputs()
  }, [state.activeType, state.quantity])

  useEffect(() => {
    const updateCategories = async () => {
      const userCategories = await getuserCategories()
      console.log(userCategories)
      setUserCategoryList(userCategories[0].category_list)
    }
    updateCategories()
  }, [])
  function validateInputs () {
    if (state.activeType && state.quantity) setIsValid(true)
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
      date: state.inputDate.toISOString().split('T')[0],
      owner_id: session.user.id
    }]
    return newTransaction
  }

  async function handleTransactionSubmit () {
    setIsLoading(true)
    const transaction = createTransaction()
    await AddTransaction(transaction)
    await getData()
    setIsLoading(false)
  }

  async function handleCategorySubmit (categoryList) {
    setUserCategoryList(categoryList)
  }

  async function handleDelete (id) {
    setIsLoading(true)
    await deleteTransaction(id)
    await getData()
    setIsLoading(false)
  }

  async function getData () {
    const result = await getAllTransactions()
    const transactionObj = createTransactionObject(result)
    setTransactions(transactionObj)
    setIsLoading(false)
  }
  async function updateQuantities () {
    const data = await getQuantities()
    const quantitiesObj = { Gasto: 0, Ahorro: 0, Ingreso: 0, Inversión: 0, Balance: 0 }
    data.forEach((transaction) => {
      const key = transaction.transaction_type
      const value = transaction.quantity

      if (key in quantitiesObj) {
        quantitiesObj[key] += value
      } else {
        quantitiesObj[key] = value
      }
    })
    quantitiesObj.Balance = quantitiesObj.Ingreso - (quantitiesObj['Inversión'] + quantitiesObj.Gasto + quantitiesObj.Ahorro)
    setQuantities(quantitiesObj)
  }

  return (
      <AddTransactionContext.Provider value={{
        quantities,
        categoryList: userCategoryList,
        setUserCategoryList,
        isLoading: state.isLoading,
        setIsLoading,
        isValid: state.isValid,
        inputDate: state.inputDate,
        setInputDate,
        currency: state.currency,
        setCurrency,
        quantity: state.quantity,
        setQuantity,
        selectedCategories: state.selectedCategories,
        setSelectedCategories,
        activeType: state.activeType,
        setActiveType,
        name: state.name,
        setName,
        AddTransaction,
        handleSubmit: handleTransactionSubmit,
        handleCategorySubmit,
        handleDelete,
        getData,
        transactions: state.transactions,
        updateQuantities,
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
