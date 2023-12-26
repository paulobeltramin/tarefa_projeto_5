import { FormEvent, useState } from 'react'
import { Button, Forms, Input, Label, Title } from './styles'
import { useDispatch } from 'react-redux'
import { createContact } from '../../Store/Reducers/Contatos'
import Contatos from '../../Models'
import { useNavigate } from 'react-router-dom'
import { ButtonReturn } from './styles'

const Formulario = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [contato, setContato] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const id = Math.floor(Math.random() * 1000)
    const newContact = new Contatos(name, email, contato, id)

    dispatch(createContact(newContact))
    navigate('/')
  }

  return (
    <div>
      <ButtonReturn to={'/'}>Voltar a lista de contatos</ButtonReturn>
      <Forms onSubmit={handleSubmit}>
        <Title>Crie seu novo contato:</Title>

        <Label htmlFor={name}>Nome:</Label>
        <Input
          type="text"
          name="nome"
          placeholder="Insira o nome do contato"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <Label htmlFor={email}>E-mail:</Label>
        <Input
          type="email"
          name="email"
          placeholder="Insira o email do contato"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Label htmlFor={contato}>E-mail:</Label>
        <Input
          type="tel"
          name="contato"
          placeholder="Insira o número do contato"
          value={contato}
          onChange={(e) => setContato(e.target.value)}
        />

        <Button type="submit">Criar contato</Button>
      </Forms>
    </div>
  )
}

export default Formulario
