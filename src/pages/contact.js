import React from "react"
import Helmet from 'react-helmet'
import config from '../config/site'
import SEO from '../components/seo'
import {Container} from 'reactstrap'
import Layout from '../components/layout'
import {css} from 'react-emotion'

const main = css`
	margin-top: 1rem;
	section {
  		margin-top: 1rem;
	}
`
const Contact = (props) => {
	const postNode = {
    	title: `Contact - ${config.siteTitle}`,
  	}

	return (
		<Layout location={props.location}>
	       	<div>
    		    <Helmet>
        			<title>{`Contact - ${postNode.title}`}</title>
      			</Helmet>
    			<SEO postNode={postNode} pagePath="contact" customTitle />
    			<Container>
	    			<div className={main}>
    				</div>
    			</Container>
    		</div>
    	</Layout>
    )
}

export default Contact