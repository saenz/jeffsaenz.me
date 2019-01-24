import React from 'react'
import styled from 'react-emotion'

const Wrapper = styled.div`
  //margin: 0 auto 2em;
  //max-width: ${props => props.theme.sizes.maxWidthCentered};
`

const Title = styled.h2`
  //display: inline-block;
  margin-top:1rem;
`

const PostTitle = props => {
  return (
    <Wrapper>
        <Title>{props.title}</Title>
    </Wrapper>
  )
}

export default PostTitle
