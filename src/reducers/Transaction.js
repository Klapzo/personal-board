export const initialState = {
  name: '',
  isLoading: true,
  activeType: '',
  selectedCategories: new Set([]),
  defaultCategories: [
    'Comida',
    'Entretenimiento',
    'Salud',
    'Transporte',
    'Familia',
    'Mascotas',
    'Ropa',
    'Café'
  ],
  quantity: '',
  currency: 'ARS',
  inputDate: new Date(),
  isValid: false,
  transactions: []
}

export const reducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action

  switch (actionType) {
    case 'SET_NAME':
      return {
        ...state,
        name: actionPayload
      }
    case 'SET_IS_LOADING':
      return {
        ...state,
        isLoading: actionPayload
      }
    case 'SET_ACTIVE_TYPE':
      return {
        ...state,
        activeType: actionPayload
      }
    case 'SET_SELECTED_CATEGORIES':
      return {
        ...state,
        selectedCategories: actionPayload
      }
    case 'SET_QUANTITY':
      return {
        ...state,
        quantity: actionPayload
      }
    case 'SET_CURRENCY':
      return {
        ...state,
        currency: actionPayload
      }
    case 'SET_INPUT_DATE':
      return {
        ...state,
        inputDate: actionPayload
      }
    case 'SET_IS_VALID':
      return {
        ...state,
        isValid: actionPayload
      }
    case 'SET_TRANSACTIONS':
      return {
        ...state,
        transactions: actionPayload
      }

    default:
      return state
  }
}
