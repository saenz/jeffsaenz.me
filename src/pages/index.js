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
					        <h1>Home</h1>

					        <p>
								Jeff Saenz is a Senior Software Engineer with a strong background in web application development.
								He has worked in different  roles on small to large teams for enterprise wide and small business projects. 
								His latest work includes the full stack support and development of two public facing Wordpress websites.
					        </p>
					        {/*
										<p>
					        	Latest projects include public facing Wordpress site development, React prototyping
					        	using <OutboundLink href="https://nextjs.org" target="_blank" rel="noopener noreferrer">nextjs.org</OutboundLink>, 
					        	responsive design with Bootstrap and static site generation with
					        	&nbsp;<OutboundLink href="https://gatsbyjs.org" target="_blank" rel="noopener noreferrer">gatsbyjs.org</OutboundLink>.
					        </p>
									*/}
					        <p>
					        	Jeff currently resides / works in Southern California but will consider re-location for
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
											<li>Javascript, jQuery, PHP</li>
											<li>HTML5, CSS3, SASS</li>
											<li>Wordpress</li>
											<li>Unix/shell, Perl</li>
											<li>Bootstrap, Responsive Design</li>
											<li>Backbone, React</li>
										</ul>
									</div>
									<div className="col-sm-12 col-md-6">
										<ul style={{marginBottom: 0}}>
											<li>NoSQL, MySQL</li>											
											<li>Restful API Integration</li>
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
				          		<small className="text-muted">(Latest)</small>
				          	</h2>
				          	<div className={job}>
				            	<div>
				              		<strong>Owner / Operator of Redlineware</strong>
				            	</div>
				            	<div>
				              		Currently supporting the full stack development of two Wordpress small business public facing websites. The sites 
				              		include &nbsp;
				              		<OutboundLink 
						            	href="https://sbacc.org" 
						            	target="_blank" 
				        		    	rel="noopener noreferrer"
				            		>
				            			Seal Beach Animal Care Center
				            		</OutboundLink> and &nbsp;
				            		<OutboundLink 
						            	href="https://bit.ly/2AZ5wfE" 
						            	target="_blank" 
				        		    	rel="noopener noreferrer"
				            		>
				            			Community Animal Network
				            		</OutboundLink>.
				            	</div>
				          	</div>
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
