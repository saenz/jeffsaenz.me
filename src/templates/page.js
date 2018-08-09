import React from 'react'
import Helmet from 'react-helmet'
import config from '../config/site'
import Container from 'reactstrap/lib/Container'
import PageBody from '../components/pagebody'
import SEO from '../components/seo'

const PageTemplate = ({ data }) => {
  const { title, slug, body } = data.contentfulPage
  const postNode = data.contentfulPage

  return (
    <div>
      <Helmet>
        <title>{`${title} - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO pagePath={slug} postNode={postNode} pageSEO />

      <Container>
        <PageBody body={body} />
      </Container>
    </div>
  )
}

export const query = graphql`
  query pageQuery($slug: String!) {
    contentfulPage(slug: { eq: $slug }) {
      title
      slug
      metaDescription {
        internal {
          content
        }
      }
      body {
        childMarkdownRemark {
          html
          excerpt(pruneLength: 320)
        }
      }
    }
  }
`

export default PageTemplate
