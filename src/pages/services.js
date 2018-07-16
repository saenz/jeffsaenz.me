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
const Services = (props) => {
	const postNode = {
    	title: `Services - ${config.siteTitle}`,
  	}

	return (
		<Layout location={props.location}>
	       	<div>
    		    <Helmet>
        			<title>{`Services - ${postNode.title}`}</title>
      			</Helmet>
    			<SEO postNode={postNode} pagePath="services" customTitle />
    			<Container>
	    			<div className={main}>
    					<section className="skills">
							<h2>Services</h2>
							<p>The web development services that I provide include the following:</p>
							<ul>
								<li>CSS Development</li>
								<li>More...</li>
							</ul>
						</section>
    				</div>
    			</Container>
    		</div>
    	</Layout>
    )
}

export default Services