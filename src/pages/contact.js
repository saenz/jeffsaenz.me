import React from "react"
import Helmet from 'react-helmet'
import config from '../config/site'
import SEO from '../components/seo'
import {Container} from 'reactstrap'

const Contact = (props) => {
	const postNode = {
    	title: `Contact - ${config.siteTitle}`,
  	}

	return (
    	<div>
    	    <Helmet>
        		<title>{`Contact - ${postNode.title}`}</title>
      		</Helmet>
    		<SEO postNode={postNode} pagePath="contact" customTitle />
    		<Container>
    			contact page test
    		</Container>
    	</div>
    )
}

export default Contact