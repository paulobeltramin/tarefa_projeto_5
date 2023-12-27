import styled from 'styled-components'

export const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  width: 600px;
  justify-content: center;
  padding: 32px;
  border-radius: 16px;
`

export const Card = styled.table`
  width: 100%;
  padding: 40px;
`

export const Tbody = styled.tbody`
  display: grid;
  align-item: center;
  justify-content: center;
`

export const Title = styled.th`
  display: flex;
  margin-bottom: 8px;
  text-decoration: underline;
  font-size: 24px;
  color: #d3d3d3;
`

export const AreaText = styled.textarea`
  background-color: transparent;
  border: none;
  width: 100%;
  resize: none;
  color: #b0c4de;
  font-size: 18px;
  font-weight: bold;
`

export const ButtonRemove = styled.button`
  background-color: #b22222;
  color: #000;
  font-size: 18px;
  padding: 8px 32px;
  margin-left: 8px;
  border-radius: 14px;
  cursor: pointer;
  border: none;

  &:hover {
    background-color: #f08080;
  }
`

export const ButtonSave = styled.button`
  background-color: #006400;
  color: #000;
  font-size: 16px;
  padding: 8px 32px;
  margin-right: 8px;
  border-radius: 14px;
  cursor: pointer;
  border: none;

  &:hover {
    background-color: #32cd32;
  }
`

export const ButtonEdit = styled.button`
  background-color: #008b8b;
  color: #000;
  font-size: 18px;
  padding: 8px 32px;
  margin-right: 8px;
  border-radius: 14px;
  cursor: pointer;
  border: none;

  &:hover {
    background-color: #40e0d0;
  }
`
