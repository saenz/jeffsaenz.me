import React from 'react'
import PropTypes from 'prop-types'

import Helmet from 'react-helmet'
import {cx, css} from 'react-emotion'
import Menu from '../components/menu'
import Footer from '../components/footer'
import config from '../config/site'
//import '../styles/global'
import favicon from '../images/favicon.ico'
import {Link} from 'gatsby'

//import "typeface-roboto"
//import "typeface-pt-sans"

// main site style
import '../styles/index.scss'

const SIDEMENU_WIDTH = "150px";

const alertBox = css`
	position: absolute;
	position: fixed;
	top: 0;
	right: 0;
	left: 0;
	z-index: 1270;
	-webkit-transition: transform ease-in .5s;
	transition: transform ease-in .5s;

	@media (min-width: 768px) {
	    margin:0 auto;
	    width: 35rem;
	}

	&.show {
	  transform: translateY(0%);
	}
`
const pageContent = css`
	transition: transform 1s;
`

const sideMenu = css`
    position: absolute;
    padding-top: 1rem;
    //top: 0;
    left: -${SIDEMENU_WIDTH};
    width: ${SIDEMENU_WIDTH};
    height: 100vh;
    min-height: 100%;
    background: #fff;
    text-align: left;
    overflow-y: hidden;
    z-index: 999;
   	transition: transform .5s ease;
   	background-color: #e2e2e2;
   	display:block;
   	ul {
   		list-style: none;
   		padding-left: 1rem;
   		li {
   			padding: .25rem;
   		}
   	}
`

const animation = css`
	//transform: translateX(${SIDEMENU_WIDTH});
	transform: translate3d(${SIDEMENU_WIDTH},0,0);
`

const msgBar = css`
	font-size: 1rem;
    background-color: #322348;
    display: block;
    text-align: center;
    color: #fff;
    padding: 0.5rem 1rem;
`

const header = css`
	transition: transform .5s ease;
`
const pusher = css`
	background: white;
    position: relative;
    backface-visibility: hidden;
    overflow: hidden;
	min-height: 100%;
    transition: transform .5s ease;
    z-index: 2;
    &:after {
    	position: fixed;
	    top: 0;
	    right: 0;
	    content: '';
	    background-color: rgba(0,0,0,.4);
	    overflow: hidden;
	    opacity: 0;
	    transition: opacity .5s;
	    will-change: opacity;
	    z-index: 1000;
    }
`
const pushable = css`
    height: 100%;
    overflow-x: hidden;
    padding: 0!important;
    &:not(body) {
    	transform: translate3d(0,0,0);
    	&>.${pusher} {
    		&:after {
    			position:absolute;
    		}
    	}
	}
`

const dimmed = css`
	&:after {
		width: 100%!important;
    	height: 100%!important;
    	opacity: 1!important;
	}
`

class Layout extends React.Component {
	constructor(props) {
    	super(props);
    	this.state = {
      		sideMenuOpen: false
    	};

    	this.toggleSideMenu = this.toggleSideMenu.bind(this);
    }

    toggleSideMenu() {
    	this.setState(prevstate => ({
    		sideMenuOpen: !prevstate.sideMenuOpen 
    	}))
    }

	render() {
		return (
			<div className={"App"}>
		    	<Helmet
	    			bodyAttributes={{
						class: this.state.sideMenuOpen ? 'nav_open' : ''
					}}
				>
			        <title>{config.siteTitle}</title>
			        <link rel="icon" href={favicon} />
			        <meta name="description" content={config.description} />
			        <meta property="og:title" content={config.siteTitle} />
			        <meta property="og:url" content={config.siteUrl} />
			        <meta property="og:locale" content="en_US" />
			        <meta property="og:type" content="website" />
			        <meta property="og:site_name" content={config.siteTitle} />		        
	    		</Helmet>

			    <div className={alertBox} id="alert-box" style={{transform: "translateY(-100%)"}}>
			      <div className="alert alert-warning alert-dismissible" role="alert">
			        <strong>Alert</strong> There was an error attempting to submit the form. Please try again later.
			        <button type="button" className="close"  aria-label="Close">
			          <span aria-hidden="true">&times;</span>
			        </button>
			      </div>
			    </div>
			    
				<div className={msgBar}>
					I'm for Hire. 
				</div>	  
						<header className={cx(
								header, 
								"sticky-top",
								//{[animation] : this.state.sideMenuOpen}
							)}
						>

							<Menu toggleSideMenu={this.toggleSideMenu} isOpen={ this.state.sideMenuOpen }/>

							<div style={{position: "relative"}}>
								<aside className={cx(
									sideMenu,
									{[animation] : this.state.sideMenuOpen}
									)}
								>
									<ul>
										<li><Link to="/services">Services</Link></li>
										<li><Link to="/">About Me</Link></li>
										<li>Contact</li>
									</ul>
								</aside>
							</div>
						</header>
				

		    	<div className={pushable} onClick={this.state.sideMenuOpen ? this.toggleSideMenu : null}>
		    		<div onScroll={e => e.preventDefault()} className={cx(
	    				pusher, 
	    				{[dimmed] : this.state.sideMenuOpen},
	    				{[animation] : this.state.sideMenuOpen}
	    			)}>


						<main className={pageContent}>{this.props.children}</main>
			    		<Footer />
			    	</div>
	    		</div>
	    	</div>
		)
	}
}

Layout.propTypes = {
  children: PropTypes.element,
  location: PropTypes.object
}

export default Layout
