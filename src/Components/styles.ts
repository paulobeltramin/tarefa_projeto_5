import styled from 'styled-components'

export const Forms = styled.form`
  max-width: 500px;
  width: 100vw;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  line-height: 30px;
  padding-top: 40px;
`

export const Title = styled.h2`
  margin-bottom: 16px;
  font-size: 32px;
  text-align: center;
`

export const Label = styled.label`
  text-align: start;
  padding-left: 8px;
`
export const Input = styled.input`
  padding: 8px;
  width: 100%;
  border: none;
  margin: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Button = styled.button`
  background-color: #33ff00;
  color: black;
  font-size: 18px;
  border-radius: 8px;
  padding: 8px 24px;
  margin: 16px auto;
  cursor: pointer;
  width: 80%;
`
