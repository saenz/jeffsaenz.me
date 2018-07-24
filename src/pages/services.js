import React from "react"
import Helmet from 'react-helmet'
import config from '../config/site'
import SEO from '../components/seo'
import Container from 'reactstrap/lib/Container'
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
							<p>I provide a number of services that will help to improve your site design / maintenance.</p>
							<div className="container">
								<div className="row">
									<div className="col">
										<ul>
											<li>Web Site Design / Maintenance</li>
											<li>Site Performance</li>
											<li>Responsive Design</li>
											<li>Interoperability</li>
											<li>Accessibility</li>
											<li>Security</li>
											<li>Search Engine Optimization (SEO)</li>
										</ul>
									</div>
									<div className="col">
										<ul>
											<li>Application Monitoring</li>
											<li>Progressive Web App (PWA) Design</li>
											<li>Analytics Integration</li>
											<li>Wordpress Development</li>
											<li>Cross Browser Testing</li>
											<li>Web Hosting Consulting</li>
										</ul>
									</div>
								</div>
							</div>
						</section>
    				</div>
    			</Container>
    		</div>
    	</Layout>
    )
}

export default Services