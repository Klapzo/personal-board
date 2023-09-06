import supabase from './createSupabaseClient'

export const AddTransaction = async (transaction) => {
  const { error } = await supabase
    .from('Movimientos')
    .insert(transaction)
    .select()

  error && console.error(error)
}

export const getAllTransactions = async () => {
  const { data: Movimientos, error } = await supabase
    .from('Movimientos')
    .select('*')
  error && console.error(error)
  return Movimientos
}

export const deleteTransaction = async (id) => {
  const { error } = await supabase
    .from('Movimientos')
    .delete()
    .eq('id', id)

  error && console.error(error)
}

export const getQuantities = async () => {
  const { data: Movimientos, error } = await supabase
    .from('Movimientos')
    .select('transaction_type,quantity')
  error && console.error(error)
  return Movimientos
}
