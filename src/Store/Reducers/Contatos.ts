import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import Contatos from '../../Models'

type ContatoState = {
  itens: Contatos[]
}

const initialState: ContatoState = {
  itens: [
    {
      name: 'Paulo sergio',
      email: 'Paulo@gmail.com',
      contato: '(42)99999999',
      id: 1
    },
    {
      name: 'Jose carlos almeida',
      email: 'Jose@gmail.com',
      contato: '(42)99999999',
      id: 2
    }
  ]
}

export const contatoSlice = createSlice({
  name: 'contato',
  initialState,
  reducers: {
    createContact: (state, action: PayloadAction<Contatos>) => {
      const repeatContact = state.itens.find(
        (item) => item.name === action.payload.name
      )

      if (repeatContact) {
        alert('contato já existente na lista')
      } else {
        state.itens.push(action.payload)
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((item) => item.id !== action.payload)
    },
    Edit: (state, action: PayloadAction<Contatos>) => {
      const editContact = state.itens.findIndex(
        (item) => item.id === action.payload.id
      )

      if (editContact > 0) {
        state.itens[editContact] = action.payload
      }
    }
  }
})

export const { createContact, remove, Edit } = contatoSlice.actions
export default contatoSlice.reducer
