import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from 'reactstrap/lib/Container'
import {css} from "react-emotion"

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
					        <h2>About Me</h2>

					        <p>
					        	Well rounded  web developer with a good / strong foundation in 
					        	front end and full stack development. Lately I've been working with Wordpress, SSR w/ React 
					        	using <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer">nextjs.org</a>, serverless 
					        	computing with AWS and static site generation with
					        	&nbsp;<a href="https://gatsbyjs.org" target="_blank" rel="noopener noreferrer">gatsbyjs.org</a>.
					        </p> 
				        </section>

				        <section className="skills">
							<h2>Skills</h2>
							<p>
								Lately, I've been more focused on Front End Development  but I do have experience with the full stack. 
								I like to wear many hats, contribute in any way possible and learn new things.
							</p>
							<div className="container">
								<div className="row">
									<div className="col">
										<ul>
											<li>HTML/CSS3</li>
											<li>Bootstrap / Responsive Design</li>
											<li>UI Frameworks - Backbone, React</li>
											<li>Unix/Linux/Windows</li>
											<li>Javascript</li>
											<li>jQuery</li>
										</ul>
									</div>
									<div className="col">
										<ul className="col">
											<li>Wordpress</li>
											<li>SQL / MySQL / MongoDB / GraphQL</li>
											<li>Node / Express</li>
											<li>Gatsby / GraphQl</li>
											<li>Application monitoring</li>
											<li>Git</li>
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
				          	<h2>Experience (Latest)</h2>
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
						            <a 
					            		href="https://twitter.com/dstppluto" 
					            		target="_blank" 
					            		rel="noopener noreferrer"
				            		>
				            			Twitter
				            		</a>
				          		</li>
				          		<li>
						            <a 
						            	href="https://github.com/saenz" 
						            	target="_blank" 
				        		    	rel="noopener noreferrer"
				            		>
				            			Github
				            		</a>
				          		</li>
				          		<li>
						            <a 
						            	href="https://www.linkedin.com/in/jeffsaenz/" 
						            	target="_blank" 
				        		    	rel="noopener noreferrer"
				            		>
				            			Linkedin
				            		</a>
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
