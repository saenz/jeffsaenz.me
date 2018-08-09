import React from 'react'
import styled from 'react-emotion'

const List = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  margin: 0 auto;
  padding:0;
  list-style: none;
  &::after {
    content: '';
    flex: 0 0 32%;
  }
`

const CardList = props => {
  return <List>{props.children}</List>
}

export default CardList
