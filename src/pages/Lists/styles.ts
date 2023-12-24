import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Title = styled.h2`
  padding: 40px;
  font-size: 24px;
  text-align: center;
`

export const Table = styled.table`
  margin: 0 auto;
`

export const Head = styled.th`
  font-weight: bold;
  padding: 8px;
`

export const Td = styled.td`
  padding: 6px;
  font-size: 18px;
`
export const Links = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ContainerButton = styled.div`
  display: flex;
  justify-content: end;
  margin: 32px;
`

export const Button = styled(Link)`
  background-color: #006600;
  padding: 16px 16px;
  font-size: 24px;
  color: #fff;
  font-weight: bold;
  border-radius: 8px;
`

export const ButtonReturn = styled(Link)`
  width: 100%;
  background-color: #33ff00;
  color: #000;
  font-size: 18px;
  border-radius: 8px;
  padding: 8px 24px;
  cursor: pointer;
  text-decoration:none;
  margin: 50px;
`
