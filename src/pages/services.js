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
							<p>I have a menu of services to choose from. Please let me know how I can help.</p>
							<ul>
								<li>Web Site Maintenance</li>
								<li>UI Design</li>
								<li>CSS</li>
								<li>Responsive Design (Mobile First)</li>
								<li>Progressive Web Apps</li>
								<li>Cross Browser Testing</li>
								<li>Search Engine Optimization (SEO)</li>
								<li>Application Monitoring</li>
								<li>Email Marketing</li>
								<li>Google Analytics</li>
								<li>Wordpress Development</li>
							</ul>
						</section>
    				</div>
    			</Container>
    		</div>
    	</Layout>
    )
}

export default Services