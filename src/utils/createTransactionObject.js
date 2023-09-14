export const createTransactionObject = (transaction) => {
  const transactionObj = transaction.map((movimiento) => {
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
  return transactionObj
}
