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
const header = css`
	text-align: center;
	//background-color: #e2e2e2; 
	border: 1px solid #e2e2e2;
	padding: .5rem .5rem; 
	margin-bottom: .5rem;
	&:hover {
		background-color: #e2e2e2;
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
    					<section className="services">
							<h1>Services</h1>
							<p>
								My services are tailored for small businesses and non-profits looking to enhance their web presence.
							</p>
							<div className="row">
								<div className="col-sm-12 col-md-6">
									<header className={header}>Wordpress</header>
									<ul>
										<li>Site Design</li>
										<li>Performance Testing</li>
										<li>Responsive Design (mobile first)</li>
										<li>Theme / Plugin Customization</li>
										<li>Accessibility</li>
										<li>Security Scanning</li>
										<li>Search Engine Optimization (SEO)</li>
										<li>CSS3 Styling</li>
									</ul>
								</div>
								<div className="col-sm-12 col-md-6">
									<header className={header}>Development</header>
									<ul>
										<li>PHP, Javascript, HTML5, CSS3</li>
										<li>Progressive Web App (PWA) Design</li>
										<li>Analytics Integration</li>
										<li>Browser Testing</li>
										<li>Web Hosting Support</li>
										<li>Social Media Integration</li>
										<li>Databases  (NoSQL / MySQL) </li>
									</ul>
								</div>
								<div className="col-sm-12 col-md-6">
									<header className={header}>Operations (DevOps)</header>
									<ul>
										<li>Application Monitoring</li>
										<li>Source Code Control (git)</li>
										<li>Linux / Windows Administration</li>
										<li>Docker Deployments</li>
										<li>Continuous Integration</li>
									</ul>
								</div>
								<div className="col-sm-12 col-md-6">
									<header className={header}>Testing</header>
									<ul>
										<li>Site Auditing</li>
										<li>Browser / Device Testing</li>
										<li>Error Reporting</li>
									</ul>
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