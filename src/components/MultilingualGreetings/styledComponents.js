import styled from 'styled-components'

export const AppContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 48px;
  color: #1e293b;
`

export const TabsContainer = styled.ul`
  display: flex;
  margin: 10px;
`

export const TabItemContainer = styled.li`
  list-style-type: none;
  list-style: none;
  margin-right: 50px;
`

export const TabButton = styled.button`
  border: 1px solid #db1c48;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  color: #db1c48;
  background-color: #ffffff;
  border-radius: 25px;
  padding: 10px 20px 10px 20px;
  cursor: pointer;
  outline: none;
`

export const ActiveTabButton = styled.button`
  border: none;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  color: #ffffff;
  background-color: #db1c48;
  border-radius: 25px;
  padding: 10px 20px 10px 20px;
  cursor: pointer;
  outline: none;
`

export const LanguageItemContainer = styled.li`
  list-style-type: none;
  list-style: none;
`

export const LanguageItemImage = styled.img`
  width: 300px;
  height: 400px;
  margin-top: 48px;
`
