import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Edit, remove } from '../../Store/Reducers/Contatos'
import {
  AreaText,
  ButtonEdit,
  ButtonRemove,
  ButtonSave,
  Card,
  Container,
  Tbody,
  Title
} from './styles'

type Props = {
  name: string
  email: string
  contato: string
  id: number
}
const Contato = ({ name, email, contato, id }: Props) => {
  const [edit, setEdit] = useState(false)
  const [nome, setNome] = useState('')
  const [Email, setEmail] = useState('')
  const [tel, setTel] = useState('')

  const dispatch = useDispatch()

  useEffect(() => {
    if (name.length >= 0) {
      setNome(name)
    }

    if (email.length >= 0) {
      setEmail(email)
    }

    if (contato.length >= 0) {
      setTel(contato)
    }
  }, [name, contato, email])

  return (
    <>
      <Card>
        <Tbody>
          <Container>
            <tr>
              <Title>Nome:</Title>

              <td>
                <AreaText
                  disabled={!edit}
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                />
              </td>
              <Title>E-mail:</Title>
              <td>
                <AreaText
                  disabled={!edit}
                  value={Email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </td>
              <Title>Contato:</Title>
              <td>
                <AreaText
                  disabled={!edit}
                  value={tel}
                  onChange={(e) => setTel(e.target.value)}
                />
              </td>

              {edit ? (
                <ButtonSave
                  onClick={() =>
                    dispatch(
                      Edit({
                        name,
                        email,
                        contato,
                        id
                      }),
                      setEdit(false)
                    )
                  }
                >
                  Salvar
                </ButtonSave>
              ) : (
                <ButtonEdit onClick={() => setEdit(true)}>Editar</ButtonEdit>
              )}
              <ButtonRemove onClick={() => dispatch(remove(id))}>
                remover
              </ButtonRemove>
            </tr>
          </Container>
        </Tbody>
      </Card>
    </>
  )
}

export default Contato
