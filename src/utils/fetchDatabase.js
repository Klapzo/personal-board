import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://ontiayxfnkmrsxsnlryt.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9udGlheXhmbmttcnN4c25scnl0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI2NjYzNDYsImV4cCI6MjAwODI0MjM0Nn0.VRmr8T0tj95vG1OFrowQPgX1xDGnKYaHnnjAec7bULg')

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
