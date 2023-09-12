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
export const addUserCategories = async (categoryList) => {
  const userCategories = await getuserCategories()
  if (userCategories === categoryList || userCategories.length === 0) return
  if (userCategories) updateCategoryList(categoryList)
  else {
    const { error } = await supabase
      .from('user_categories')
      .insert(categoryList)
      .select()
    error && console.error(error)
  }
}

export const getuserCategories = async () => {
  const { data: categoryList, error } = await supabase
    .from('user_categories')
    .select('category_list')
  error && console.error(error)
  return categoryList
}
const updateCategoryList = async (updatedList) => {
  const { data: newCategoryList, error } = await supabase
    .from('user_categories')
    .upsert(updatedList)
    .select()
  error && console.error(error)
  return newCategoryList
}
