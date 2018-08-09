import React from 'react'
import {cx, css} from 'react-emotion'
import Twitter from 'react-feather/dist/icons/twitter';
import Github from 'react-feather/dist/icons/github';
import LinkedIn from 'react-feather/dist/icons/linkedin';
import Container from 'reactstrap/lib/Container'
import Button from 'reactstrap/lib/Button'
import Modal from 'reactstrap/lib/Modal'
import ModalHeader from 'reactstrap/lib/ModalHeader'
import ModalBody from 'reactstrap/lib/ModalBody'
import ModalFooter from 'reactstrap/lib/ModalFooter'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import 'whatwg-fetch'

const footer = css`
	transition: transform .5s ease;
	padding-bottom: .5rem;
	.site-link {
	  color: white;
	}
`
const main = css`
	background-color: #708090;
	padding: 1rem 1rem;
	margin-bottom: 1rem;
	text-align: center;
	p {
		margin-bottom: 0;
	}
	ul {
  		list-style-type: none;
  		padding-left:0;
  		li {
  			display: inline-block;
  			padding-right:.5rem;
		}
		a {
			width: 2rem;
			height: 2rem;
			border-radius: 50%;
			display: inline-block;
			color: #474c55;
			border: .2rem solid #474c55;
			-webkit-transition: background .1s ease-in-out,color .1s ease-in-out;
			transition: background .1s ease-in-out,color .1s ease-in-out;
			vertical-align: middle;
			text-align: center;
			position: relative;
			&:hover {
		  		color: #fff;
		  		background: rgba(34,34,34,0.17);
			}
		}	
	}
`
const code = css`
	background-color: white; 
	font-size: .85rem;
	color: rgba(34,34,34,0.67);
	text-align: center;
	margin-left: 1rem;
	margin-right: 1rem;
`

const icon = css`
  	position: absolute;
  	left: 50%;
  	top: 50%;
    transform: translate(-50%,-50%);
  	font-size: 1.4rem;
`

const contact = css`
	width: 100%;
	margin-right: auto;
	margin-left: auto;
	input {
	  overflow: visible;
	}
	.contact-wrapper {
	  display: flex;
	  flex-direction: row;
	  flex-wrap: wrap;
	  justify-content: space-between;
	  margin: 1rem auto;
	}
	.contact-text {
	  width: 100%;
	  order: 2;
	  margin-top: 1rem;
	  font-size: 1rem;
	}
	.contact-text .name {
	  color: rgba(0,0,0,0.87);
	  white-space: nowrap;
	  overflow: hidden;
	  text-overflow: ellipsis;
	}
	.contact-text .city {
	  color: rgba(0,0,0,0.54);
	  letter-spacing: 0;
	  white-space: nowrap;
	  overflow: hidden;
	  text-overflow: ellipsis;
	}
	.contact-form {
	  width:100%;
	  margin: 0 auto;
	  align-items: flex-start;
	  order: 1;
	}
	@media (min-width: 35em) {
	  .contact-text {
	    width: 33%;
	    order: 1;
	    margin-top: 0;
	  }
	  .contact-form {
	    width: 66%;
	    order: 2;
	  }
	}
	.contact-form input, .contact-form textarea {
	  font-family: inherit;
	  font-size: inherit;
	  color: rgb(18, 18, 18);
	  border-width: initial;
	  border-style: none;
	  border-color: initial;
	  border-image: initial;
	  outline: none;
	  background: rgb(243, 243, 243);
	  border-radius: 2px;
	  padding: 1em;
	}
	.contact-form input {
	  width: 100%;
	  //margin: 0px 0px 1em;
	}

	.contact-form textarea {
	  width: 100%;
	  //margin: 0 0 1em 0;
	  line-height: 1.6;
	  min-height: 12rem;
	  resize: vertical;
	}
`
const loader = css`
	display: inline-flex;
	border: 2px solid #f3f3f3;
	border-radius: 50%;
	border-top: 2px solid #3498db;
	width: 1rem;
	height: 1rem;
	-webkit-animation: spin 2s linear infinite; /* Safari */
	animation: spin 2s linear infinite;
	margin-right:.5rem;

	@keyframes spin {
	  	0% { transform: rotate(0deg); }
	  	100% { transform: rotate(360deg); }
	}
`

const emailAddress = css`
	overflow-wrap: break-word;
    word-wrap: break-word;
    word-break: break-word;
`

const FORM_URL = "https://z3iokgsyoc.execute-api.us-west-1.amazonaws.com/dev/send";

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

class Footer extends React.Component {
	constructor(props) {
    	super(props);
    	this.state = {
      		modal: false,
      		isSending: false,
      		displayErrors: false,
      		fullname: '',
      		email: '',
      		message: '',
    	};

    	this.handleChange = this.handleChange.bind(this);
    	this.handleSubmit = this.handleSubmit.bind(this);
    	this.handleSuccess = this.handleSuccess.bind(this);
  		this.closeModal = this.closeModal.bind(this);
  	}

  	handleChange(event) {
	    const target = event.target;
	    const value = target.type === 'checkbox' ? target.checked : target.value;
	    const name = target.name;

	    this.setState({
	      [name]: value
	    });
  	}
	
	handleSubmit(event) {
		
		event.preventDefault()

		// validate form
		if (!event.target.checkValidity()) {
			this.setState({ displayErrors: true });
    		return;
  		}
		this.setState({ displayErrors: false });

		// send form
		this.setState({isSending:true})
	    
	    fetch(FORM_URL, {
	      	method: 'POST',
	      	headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
	      	body: encode({ 
	      		fullname: this.state.fullname,
	      		email: this.state.email,
	      		msg: this.state.message
	      	}),
	    })
	      .then(this.handleSuccess)
	      .catch(error => alert(error))


	}

	handleSuccess() {
		this.setState({
      		fullname: '',
      		email: '',
      		message: '',
      		modal: true,
      		isSending: false
    	})
	}

	closeModal() {
    	this.setState({ modal: false })
  	}
  	
	render() {
		const { displayErrors } = this.state;

		return (
			<footer className={footer}>
		        <Container>
		        <section className={contact}>
		        	<h1>Contact</h1>
		          
		          	<p>Please feel free to either contact me at the email below or drop me a line using the form.</p>

			         <div className="contact-wrapper">
			            <div className="contact-text">
			              	<div className="name">Jeff Saenz</div>
			             	<div className="city">Cypress, Ca</div>
			              	<p/>
			              	<div style={{marginTop: '1rem'}}>
			              		Email <br/><OutboundLink className={emailAddress} href="mailto:jeffsaenz.me@gmail.com" rel="noreferrer">jeffsaenz.me@gmail.com</OutboundLink>
			              	</div>
			            </div>
		        
				        <form onSubmit={this.handleSubmit} className={cx("contact-form", "needs-validation", { "was-validated": displayErrors })} noValidate>
						    <div className="form-group">
						        {/*<label for="fullname">Name</label>*/}
						        <input 
						        	type="text" 
						        	className="form-control" 
						        	placeholder="Name" 
						        	name="fullname" 
						        	required 
						        	value={this.state.fullname} 
						        	onChange={this.handleChange}
						        />
						        <div className="invalid-feedback">
						          Please provide your full name.
						        </div>
						    </div>
						    <div className="form-group">
						        {/*<label for="email">Email</label>*/}
						        <input 
						        	type="email" 
						        	className="form-control" 
						        	placeholder="Email" 
						        	name="email" 
						        	required 
						        	value={this.state.email} 
						        	onChange={this.handleChange}
						        />
						        <div className="invalid-feedback">
						          Please provide a valid email.
						        </div>
						    </div>
						    <div className="form-group">
						        {/*<label for="message">Message</label>*/}
						        <textarea 
						        	className="form-control"
						        	placeholder="Message"
						        	rows="3" 
						        	name="message" 
						        	required
						        	value={this.state.message} 
						        	onChange={this.handleChange} 
						        />
						        <div className="invalid-feedback">
						            Please provide a message.
						        </div>
						    </div>

						    <Button 
						    	name="submit" 
						    	type="submit" 
						    	disabled={this.state.isSending}
						    	className="btn btn-dark" 
						    >
					    		{ this.state.isSending ? (
					    			<React.Fragment>
					    				<div className={loader}></div> Sending 	
					    			</React.Fragment>
					    		) : (
					    			<React.Fragment>
					    				Send
					    			</React.Fragment>
					    		)}
						    </Button>

					        <div>
							    <Modal isOpen={this.state.modal} toggle={this.closeModal} className={this.props.className}>
							        <ModalHeader toggle={this.closeModal}>Message Received</ModalHeader>
							        <ModalBody>
							            Thank you for reaching out. I will get back to you as soon as
						               	possible. 				          
						    	    </ModalBody>
							        <ModalFooter>
							            <Button color="secondary" onClick={this.closeModal}>Close</Button>
							        </ModalFooter>
							    </Modal>
							</div>

						</form>
					</div>
				</section>
				</Container>

		      	<div className={main}>
		        	<ul>
				        <li>
				            <OutboundLink
				            	href="https://twitter.com/dstppluto" 
				            	target="_blank" 
				            	rel="noopener noreferrer"
				            >
				              	<span className="sr-only">Twitter</span>
								<Twitter color={"#474c55"} className={icon} size={18} />
				            </OutboundLink>
				        </li>
				        <li>
				            <OutboundLink 
				            	href="https://github.com/saenz" 
				            	target="_blank" 
				            	rel="noopener noreferrer"
				            >
				              	<span className="sr-only">Github</span>
				              	<Github color={"#474c55"} className={icon} size={18}/>
				            </OutboundLink>
				        </li>
				        <li>
				            <OutboundLink 
				            	href="https://www.linkedin.com/in/jeffsaenz/" 
				            	target="_blank" 
				            	rel="noopener noreferrer"
				            >
				              	<span className="sr-only">LinkedIn</span>
				              	{/*<i className={`fa fa-linkedin ${icon}`}></i>*/}
				              	<LinkedIn color={"#474c55"} className={icon} size={18} />
				            </OutboundLink>
				        </li>
		          	</ul>
		        	<p>
		          		<OutboundLink 
		          			className="site-link" 
		          			href="http://jeffsaenz.me" 
		          			rel="noopener noreferrer"
		          		>
		          			jeffsaenz.me
		          		</OutboundLink>
		        	</p>
		      	</div>
		      	<div className={code}>
		        	This site was built using: <OutboundLink href="https://getbootstrap.com" rel="noreferrer">bootstrap</OutboundLink>,
		        	&nbsp;<OutboundLink href="https://serverless.com" rel="noreferrer">serverless framework</OutboundLink>, 
		        	&nbsp;<OutboundLink href="https://gatsbyjs.org" rel="noreferrer">gatsbyjs</OutboundLink>, 
		        	&nbsp;<OutboundLink href="https://reactjs.org" rel="noreferrer">reactjs</OutboundLink>, 
		        	&nbsp;<OutboundLink href="https://fontawesome.com/" rel="noreferrer">font awesome</OutboundLink> and more.
		      	</div>

		    </footer>
		)
	}
}

export default Footer