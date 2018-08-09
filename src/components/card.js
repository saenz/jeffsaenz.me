import React from 'react'
import styled from 'react-emotion'
import Img from 'gatsby-image'
import {Link} from 'gatsby'

const Post = styled.li`
  border: 1px solid #efefef;
  border-radius: 2px;
  margin: 0 0 1em 0;
  width: 100%;
  transition: background 0.2s;
  @media screen and (min-width: 576px) {
    flex: 0 0 49%;
    margin: 0 0 2vw 0;
  }
  @media screen and (min-width: 768px) {
    flex: 0 0 32%;
  }
  &:hover {
    background: white;
  }
  a {
    display: flex;
    flex-flow: column;
    height: 100%;
    width: 100%;
    color: black;
    text-decoration: none;
    .gatsby-image-wrapper {
      height: 0;
      padding-bottom: 60%;
    }
  }
`

const Title = styled.h2`
  //font-size: 1.5em;
  font-weight: 200;
  text-transform: capitalize;
  margin: 1rem 1rem 0.5rem 1rem;
`

const Date = styled.h3`
  margin: 0 1rem 1.5rem 1rem;
  color: gray;
`

const Excerpt = styled.p`
  margin: 0 1rem 1rem 1rem;
  line-height: 1.6;
`

const Card = props => {
  return (
    <Post>
      <Link to={`/${props.slug}/`}>
        <Img sizes={props.image.sizes} backgroundColor={'#eeeeee'} />
        <Title>{props.title}</Title>
        <Date>{props.date}</Date>
        <Excerpt
          dangerouslySetInnerHTML={{
            __html: props.excerpt.childMarkdownRemark.excerpt,
          }}
        />
      </Link>
    </Post>
  )
}

export default Card
