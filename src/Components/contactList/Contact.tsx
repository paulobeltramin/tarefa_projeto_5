import { useSelector } from 'react-redux'
import Contato from '../Contato'
import { rootReducer } from '../../Store'
import { ButtonForms, Div, Title } from './styles'

const ContactList = () => {
  const { itens } = useSelector((state: rootReducer) => state.contact)

  return (
    <>
      <Div>
        <ButtonForms to={'/formulario'}>+</ButtonForms>
      </Div>
      <div>
        <Title>Meus contatos</Title>
        <ul>
          {itens.map((item) => (
            <li key={item.id}>
              <Contato
                name={item.name}
                email={item.email}
                contato={item.contato}
                id={item.id}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default ContactList
