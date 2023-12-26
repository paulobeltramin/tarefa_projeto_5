import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { Edit } from "../../Store/Reducers/Contatos"
import { Card, Container, Tbody, Title } from "./styles"

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
            <Container>
                <Card width={960}>

                    <Tbody>
                        <tr>
                            <Title>Nome</Title>
                            <td>
                                <textarea disabled={!edit} value={nome} onChange={(e) => setNome(e.target.value)} />
                            </td>
                            <Title>email</Title>
                            <td>
                                <textarea disabled={!edit} value={Email} onChange={(e) => setEmail(e.target.value)} />
                            </td>
                            <Title>contato</Title>
                            <td>
                                <textarea disabled={!edit} value={tel} onChange={(e) => setTel(e.target.value)} />
                            </td>

                            {edit ? (
                                <button onClick={() => dispatch(Edit({
                                    name, email, contato, id
                                }),setEdit(false))}>Salvar</button>
                            ) : (
                                <button onClick={()=>setEdit(true)}>editar</button>
                            )}
                            <button>remover</button>
                        </tr>
                    </Tbody>
                </Card>
            </Container>
        </>
    )
}

export default Contato