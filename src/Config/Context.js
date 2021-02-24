import React, { useState, useReducer } from 'react';

const initialState = {
  loading: false,
  redirect: false,
  dataMerchant: [],
  password: '',
  show: false,
  data: '',
  showSideBar: false,

}

export const Context = React.createContext();

const reducer = (state, action) => {
  if (action.type === 'LOADING') {
    return {
      ...state,
      loading: action.loading
    }
  }
  else if (action.type === 'REDIRECT') {
    return {
      ...state,
      redirect: action.redirect
    }
  }
  else if (action.type === 'CHECKPHONENUMBER') {
    return {
      ...state,
      // dataMerchant: [...state.dataMerchant, action.dataMerchant]
      dataMerchant: [action.dataMerchant]
    }
  }
  else if (action.type === 'PASSWORDCHECK') {
    return {
      ...state,
      password: action.password
    }
  }
  else if (action.type === 'SHOWMODAL') {
    return {
      ...state,
      show: action.show
    }
  }
  else if (action.type === 'CLOSEMODAL') {
    return {
      ...state,
      show: action.show
    }
  }
  else if (action.type === 'DATA_UTL') {
    return {
      ...state,
      data: action.data
    }
  }
  else if (action.type === 'SHOWSIDEBAR') {
    return {
      ...state,
      showSideBar: action.showSideBar
    }
  }

  return state
}

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ ...state, dispatch }}>
      {children}
    </Context.Provider>
  )
}

export default Store