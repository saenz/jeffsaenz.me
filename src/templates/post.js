import React from 'react'
import find from 'lodash/find'
import Helmet from 'react-helmet'
import config from '../config/site'
import Hero from '../components/hero'
import Container from 'reactstrap/lib/Container'
import PageBody from '../components/pagebody'
import TagList from '../components/taglist'
import PostLinks from '../components/postlinks'
import PostDate from '../components/postdate'
import SEO from '../components/seo'
import Layout from "../components/layout"

const PostTemplate = ({ data, location }) => {
  const {
    title,
    slug,
    id,
    heroImage,
    body,
    publishDate,
    tags,
  } = data.contentfulPost
  const postNode = data.contentfulPost

  const postIndex = find(
    data.allContentfulPost.edges,
    ({ node: post }) => post.id === id
  )

  return (
    <Layout location={location}>
      <div>
        <Helmet>
          <title>{`${title} - ${config.siteTitle}`}</title>
        </Helmet>
        <SEO pagePath={slug} postNode={postNode} postSEO />

        <Hero title={title} image={heroImage} height={'50vh'} />

        <Container>
          {tags && <TagList tags={tags} />}
          <PostDate date={publishDate} />
          <PageBody body={body} />
          <PostLinks previous={postIndex.previous} next={postIndex.next} />
        </Container>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query postQuery($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      title
      id
      slug
      metaDescription {
        internal {
          content
        }
      }
      publishDate(formatString: "MMMM DD, YYYY")
      publishDateISO: publishDate(formatString: "YYYY-MM-DD")
      tags {
        title
        id
        slug
      }
      heroImage {
        title
        sizes(maxWidth: 1800) {
          ...GatsbyContentfulSizes_withWebp_noBase64
        }
        ogimg: resize(width: 1800) {
          src
          width
          height
        }
      }
      body {
        childMarkdownRemark {
          html
          excerpt(pruneLength: 320)
        }
      }
    }
    allContentfulPost(
      limit: 1000
      sort: { fields: [publishDate], order: DESC }
    ) {
      edges {
        node {
          id
        }
        previous {
          slug
        }
        next {
          slug
        }
      }
    }
  }
`

export default PostTemplate
