import supabase from './createSupabaseClient'

export const AddTransaction = async (transaction) => {
  console.log('AddTransaction')
  const { error } = await supabase
    .from('Movimientos')
    .insert(transaction)
    .select()
  error && console.error(error)
}

export const getAllTransactions = async () => {
  console.log('getAllTransactions')

  const { data: Movimientos, error } = await supabase
    .from('Movimientos')
    .select('*')
  error && console.error(error)
  return Movimientos
}

export const deleteTransaction = async (id) => {
  // console.log('deleteTransaction')

  const { error } = await supabase.from('Movimientos').delete().eq('id', id)

  error && console.error(error)
}

export const getQuantities = async () => {
  // console.log('getQuantities')

  const { data: Movimientos, error } = await supabase
    .from('Movimientos')
    .select('transaction_type,quantity')
  error && console.error(error)
  return Movimientos
}
export const addUserCategories = async (categoryList) => {
  // console.log('addUserCategories')

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
  // console.log('getuserCategories')

  const { data: categoryList, error } = await supabase
    .from('user_categories')
    .select('category_list')
  error && console.error(error)
  return categoryList
}
const updateCategoryList = async (updatedList) => {
  // console.log('updateCategoryList')

  const { data: newCategoryList, error } = await supabase
    .from('user_categories')
    .upsert(updatedList)
    .select()
  error && console.error(error)
  return newCategoryList
}
