import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from 'reactstrap/lib/Container'
import {css} from "react-emotion"
import { OutboundLink } from 'gatsby-plugin-google-analytics'

const body = css`
	margin-top: 1rem;
	section {
  		margin-top: 1rem;
	}
`

const job = css`
	margin-bottom: .5rem;
	strong {
  		color: rgba(0,0,0,0.67);
	}
`

export default props => (
	<Layout location={props.location}>
	    	<div>
	    		<SEO />
	    		<Container>
			      	<div className={body}>
				        <section className="aboutme">
					        <h1>About Me</h1>
					        <p>
					        	Well rounded  web developer with a strong foundation in 
					        	front end and full stack development. 
					        </p>
					        <p>
					        	Latest projects include public facing Wordpress site development, React prototyping
					        	using <OutboundLink href="https://nextjs.org" target="_blank" rel="noopener noreferrer">nextjs.org</OutboundLink>, 
					        	responsive design with Bootstrap and static site generation with
					        	&nbsp;<OutboundLink href="https://gatsbyjs.org" target="_blank" rel="noopener noreferrer">gatsbyjs.org</OutboundLink>.
					        </p> 
					        <p>
					        	I currently reside / work in Southern California but I will consider re-location for
					        	a full-time role.
					        </p>
				        </section>

				        <section className="skills">
							<h2>Skills</h2>
							<p> 
								I'm comfortable wearing many hats and always enjoy learning new tech.
							</p>
							<div className="container">
								<div className="row">
									<div className="col-sm-12 col-md-6">
										<ul style={{marginBottom: 0}}>
											<li>HTML5, CSS3, SASS</li>
											<li>Bootstrap, Responsive Design</li>
											<li>Backbone, React</li>
											<li>Unix, Windows</li>
											<li>Javascript, jQuery, PHP</li>
											<li>NoSQL, MySQL</li>
										</ul>
									</div>
									<div className="col-sm-12 col-md-6">
										<ul style={{marginBottom: 0}}>
											<li>Restful API Integration</li>
											<li>Wordpress</li>
											<li>Node / Express</li>
											<li>Gatsby</li>
											<li>Application monitoring</li>
											<li>SEO</li>
										</ul>
									</div>
								</div>
							</div>
				        </section>

				        <section className="edu">
				          	<h2>Education</h2>
				          	<p>B.S. in Computer Science from California State University Fullerton (CSUF)</p>
				        </section>

				        <section className="experience">  
				          	<h2>
				          		Experience{' '}
				          		<small className="text-muted">(Latest freelance / full-time)</small>
				          	</h2>
				          	<div className={job}>
				            	<div>
				              		<strong>Foods Up App</strong>
				            	</div>
				            	<div>
				              		React/Nextjs SSR and React Native application development for electronic menu.
				            	</div>
				          	</div>
				            <div className={job}>
				            	<div>
				              		<strong>Cognitive Medical Systems</strong>
				            	</div>
				            	<div>
				              		Health based desktop web application development for the Veterans 
				              		Administration using Backbone, Javascript, Bootstrap, CSS and React.
				            	</div>
				          	</div>

				          	<div className={job}>
				            	<div>
				              		<strong>DirecTV</strong>
				            	</div>
				            	<div>
				              		Mobile web application development using CSS, HTML5, Javascript and Foundation.
				            	</div>
				          	</div>

				          	<div className={job}>
				            	<div>
				              		<strong>Jet Propulsion Lab</strong>
				            	</div>
				            	<div>
				              		Custom web tool development and enterprise system monitoring design and 
				              		engineering.
				            	</div>  
				          	</div>
				        </section>  

				        <section className="links">  
				          	<h2>Links</h2>
				          	<ul>
				          		<li>
						            <OutboundLink 
					            		href="https://twitter.com/dstppluto" 
					            		target="_blank" 
					            		rel="noopener noreferrer"
				            		>
				            			Twitter
				            		</OutboundLink>
				          		</li>
				          		<li>
						            <OutboundLink 
						            	href="https://github.com/saenz" 
						            	target="_blank" 
				        		    	rel="noopener noreferrer"
				            		>
				            			Github
				            		</OutboundLink>
				          		</li>
				          		<li>
						            <OutboundLink 
						            	href="https://www.linkedin.com/in/jeffsaenz/" 
						            	target="_blank" 
				        		    	rel="noopener noreferrer"
				            		>
				            			Linkedin
				            		</OutboundLink>
				          		</li>
				          	</ul>
				        </section>

				        <section className="resume">
	          				<h2>Resume</h2>
	          				<p>
	            				For more details on my experience and skills please see my <a href="docs/resume.pdf" rel="noreferrer">resume</a>.
	          				</p>
	        			</section>
			        </div>
	    		</Container>
	    	</div>
	</Layout>
)
