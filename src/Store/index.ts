import {configureStore} from '@reduxjs/toolkit'
import contatoReducer from '../Store/Reducers/Contatos'

export const store = configureStore({
  reducer:{
    contact: contatoReducer
  }
})

export type rootReducer = ReturnType <typeof store.getState>