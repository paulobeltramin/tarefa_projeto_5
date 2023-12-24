import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import Contatos from '../../Models'

export const contatoSlice = createSlice({
  name: 'contato',
  initialState: {
    itens: [
      new Contatos('maria', 'mariacardoso@gmail.com', '4299999999',1),

      new Contatos('maria', 'mariacardoso@gmail.com', '4299999999',2)
    ]
  },
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
    }
  }
})

export const { createContact } = contatoSlice.actions
export default contatoSlice.reducer
