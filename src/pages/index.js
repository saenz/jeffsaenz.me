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
					        	Well rounded freelance web developer with a good / strong foundation in 
					        	front end and full stack development. My latest endeavors include implementing SSR w/ React 
					        	using <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer">nextjs.org</a>, serverless 
					        	computing with AWS, GraphQL and static site generation using specifically 
					        	&nbsp;<a href="https://gatsbyjs.org" target="_blank" rel="noopener noreferrer">gatsbyjs.org</a>.
					        </p> 
				        </section>

				        <section className="skills">
							<h2>Skills</h2>
							My primary skills include the following:
							<ul>
								<li>React</li>
								<li>HTML/CSS3</li>
								<li>Unix</li>
								<li>Javascript</li>
								<li>Bootstrap / Responsive Design</li>
								<li>jQuery</li>
								<li>SQL / MySQL / MongoDB / GraphQL</li>
								<li>Node / Express</li>
								<li>Gatsby / GraphQl</li>
								<li>Enterprise application monitoring</li>
							</ul>
				        </section>

				        <section className="edu">
				          	<h2>Education</h2>
				          	<p>B.S. in Computer Science from California State University Fullerton (CSUF)</p>
				        </section>

				        <section className="experience">  
				          	<h2>Experience</h2>
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
