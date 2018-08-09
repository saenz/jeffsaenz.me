import React from 'react'
import styled from 'react-emotion'
import {Link} from 'gatsby'

const List = styled.ul`
  margin: 0 auto 2em auto;
  //max-width: ${props => props.theme.sizes.maxWidthCentered};
`

const Tag = styled.li`
  display: inline-block;
  a {
    transition: 0.2s;
    background: #efefef;
    padding: 0.5em;
    border-radius: 2px;
    text-transform: capitalize;
    margin: 0 0.5em 0 0;
    text-decoration: none;
    color: #efefef;
    border: 1px solid #efefef;
    &:hover {
      background: #efefef;
    }
  }
`

const TagList = props => {
  return (
    <List>
      {props.tags.map(tag => (
        <Tag key={tag.id}>
          <Link to={`/tag/${tag.slug}/`}>{tag.title}</Link>
        </Tag>
      ))}
    </List>
  )
}

export default TagList
