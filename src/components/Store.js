import React, { createContext, useReducer } from 'react';

const initialState = {
  qty: '',
  jenis: '',
  data2: []
}

export const Context = createContext()

const reducer = (state, action) => {
  if (action.type === 'SET_DATA_INVOICE') {
    return {
      ...state,
      qty: action.qty,
    }
  }
  else if (action.type === 'SET_DATA_INVOICE2') {
    return {
      ...state,
      jenis: action.jenis,
    }
  }
  else if (action.type === 'DATA') {
    return {

      ...state,
      data2: [...state.data2, action.data2]

    }

  }

  return state
}

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <Context.Provider value={{ ...state, dispatch }}>
      {children}
    </Context.Provider>
  )
}

export default Store;
