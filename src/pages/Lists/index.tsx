import { useSelector } from 'react-redux'
import {
  Button,
  ContainerButton,
  Head,
  Links,
  Table,
  Td,
  Title
} from './styles'
import { rootReducer } from '../../Store'

const ContactList = () => {
  const { itens } = useSelector((state: rootReducer) => state.contact)

  return (
    <>
      <ContainerButton>
        <Button title="Adicionar contatos" to={'/formulario'}>
          +
        </Button>
      </ContainerButton>

      <Title>Meus Contatos:</Title>
      <div>
        <Table border={1} width={960}>
          <thead>
            <tr>
              <Head>Nome Completo:</Head>

              <Head>E-mail:</Head>

              <Head>Contato:</Head>

              <Head>Editar:</Head>

              <Head>Remover:</Head>
            </tr>
          </thead>

          {itens.map((contact) => (
            <tbody key={contact.id}>
              <tr>
                <Td>{contact.name}</Td>

                <Td>{contact.email}</Td>

                <Td>{contact.contato}</Td>

                <Td>
                  <Links to={'/'}>Editar</Links>
                </Td>

                <Td>
                  <Links to={'/'}>Remover</Links>
                </Td>
              </tr>
            </tbody>
          ))}
        </Table>
      </div>
    </>
  )
}

export default ContactList
