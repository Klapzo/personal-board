const columns = [
  {
    name: 'CANTIDAD',
    uid: 'quantity',
    sortable: true,
    center: false,
    width: '140px'
  },
  { name: '', uid: 'currency', sortable: true, center: true, width: '10px' },
  {
    name: 'TIPO',
    uid: 'transaction_type',
    sortable: true,
    center: true,
    width: '60px'
  },
  { name: 'FECHA', uid: 'date', sortable: true, center: true, width: '200px' },
  {
    name: 'CATEGORIAS',
    uid: 'categories',
    sortable: true,
    center: false,
    width: '80px'
  },
  { name: 'NOTAS', uid: 'name', sortable: false, center: true, width: '180px' },
  { name: '', uid: 'actions', sortable: false, center: false, width: '10px' }
]

export { columns }
