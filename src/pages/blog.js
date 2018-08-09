import React from 'react'
import Helmet from 'react-helmet'
import SEO from '../components/seo'
import Container from 'reactstrap/lib/Container'
import Layout from '../components/layout'
import config from '../config/site'
import {css} from 'react-emotion'
import CardList from '../components/cardlist'
import Card from '../components/card'

const main = css`
  margin-top: 1rem;
  section {
      margin-top: 1rem;
  }
`

const Blog = (props) => {
  const posts = props.data.allContentfulPost.edges
  
  const postNode = {
    title: `Blog - ${config.siteTitle}`,
  }
  
  return (
    <Layout location={props.location}>
      <div>
        <Helmet>
          <title>{`Blog - ${postNode.title}`}</title>
        </Helmet>
        <SEO postNode={postNode} pagePath="services" customTitle />
        <Container>
          <div className={main}>
            <section className="blog">
              <h1>Blog</h1>

              <CardList>
                {posts.map(({ node: post }) => (
                  <Card
                    key={post.id}
                    slug={post.slug}
                    image={post.heroImage}
                    title={post.title}
                    date={post.publishDate}
                    excerpt={post.body}
                  />
                ))}
              </CardList>
            </section>
          </div>
        </Container>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query indexQuery {
    allContentfulPost(
      limit: 1000
      sort: { fields: [publishDate], order: DESC }
    ) {
      edges {
        node {
          title
          id
          slug
          publishDate(formatString: "MMMM DD, YYYY")
          heroImage {
            title
            sizes(maxWidth: 1800) {
              ...GatsbyContentfulSizes_withWebp_noBase64
            }
          }
          body {
            childMarkdownRemark {
              html
              excerpt(pruneLength: 80)
            }
          }
        }
      }
    }
  }
`

export default Blog