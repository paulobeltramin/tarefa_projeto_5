import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Title = styled.h1`
  text-align: center;
  padding: 32px;
  font-size: 40px;
`

export const ButtonForms = styled(Link)`
  background-color: #32cd32;
  color: #000;
  font-size: 32px;
  border-radius: 30px;
  cursor: pointer;
  padding: 14px;
  text-decoration: none;
  border: none;
  font-weight: bold;

  &:hover {
    background-color: #33ff00;
  }
`

export const Div = styled.div`
  margin: 32px;
`
