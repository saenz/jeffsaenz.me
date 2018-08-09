import React from 'react'
import PropTypes from 'prop-types'

import Helmet from 'react-helmet'
import {cx, css} from 'react-emotion'
import Menu from '../components/menu'
import Footer from '../components/footer'
import config from '../config/site'
//import '../styles/global'
//import favicon from '../images/favicon.ico'
import appleIcon from '../images/apple-touch-icon.png'
import favicon16 from '../images/favicon-16x16.png'
import favicon32 from '../images/favicon-32x32.png'
import safariPinnedTabIcon from '../images/safari-pinned-tab.svg'

import {Link} from 'gatsby'
import AtSignIcon from 'react-feather/dist/icons/at-sign'
import CodeIcon from 'react-feather/dist/icons/code'
import HomeIcon from 'react-feather/dist/icons/home'
import BlogIcon from 'react-feather/dist/icons/book-open'

//import "typeface-roboto"
//import "typeface-pt-sans"

// main site style
import '../styles/index.scss'

const SIDEMENU_WIDTH = "290px";

// todo: how can i reference our breakpoints defined in bootstrap. may have to use a utils/media.js config file.
const App = css`
	@media (min-width: 992px) {
    	max-width: 960px;
	}
`

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

const matched = css`
   	background-color: #FAFAFA;
   	border-left: 5px solid #2780E3;
`

const sideMenu = css`
    position: absolute;
    //padding-top: 1rem;
    //top: 0;
    left: -${SIDEMENU_WIDTH};
    width: ${SIDEMENU_WIDTH};
    //height: 100vh;
    //min-height: 100%;
    background: #fff;
    text-align: left;
    overflow-y: hidden;
    z-index: 999;
   	transition: transform .5s ease;
   	background-color: white;
   	display:block;
   	ul {
   		list-style: none;
   		padding-left: 0;
   		li {
		    border-bottom: 1px solid #eee;
   			&:hover {
   				background: rgba(0,0,0,.05);
    			color: rgba(0,0,0,.95);
   			}
   			a {
   				padding: 4px 17px;
   			    font-size: 18px;
   			    line-height: 2.5;
   			    width: 100%;
   			}
   			icon {
   				display: inline-block;
   			}
   		}
   	}
`
const icon = css`
	margin-right: 14px;
    width: 25px;
    vertical-align: middle;
`

const border = css`
	border-left: 5px solid transparent;
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

const activeMenuItem = css`
	color: #4c9e59;
	font-weight: 700;
	//background-color: rgba(0,0,0,.4);
`

const footnote = css`
	text-align: center; 
	color: rgba(34,34,34,0.67);
	font-size: 18px;
	padding: 0 1rem;
	line-height: 1.25;
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
		//console.log('location=' + JSON.stringify(this.props.location))

		return (
			<div className={App}>
			    	<Helmet
		    			bodyAttributes={{
							class: this.state.sideMenuOpen ? 'nav_open' : ''
						}}
					>
				        <title>{config.siteTitle}</title>
				        {/*<link rel="icon" href={favicon} />*/}
				        <link rel="apple-touch-icon" sizes="180x180" href={appleIcon} />
						<link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
						<link rel="icon" type="image/png" sizes="16x16" href={favicon16} />
						<link rel="mask-icon" href={safariPinnedTabIcon} color="#5bbad5" />
						<meta name="theme-color" content="#ffffff" />	    
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
											<li className={cx(
													border, 
													{[matched]: this.props.location.pathname === "/"}
												)}
											>
												<Link exact to="/" activeClassName={activeMenuItem}>
													<i>
														<HomeIcon className={icon} size={21} />
													</i>
													<span>Home</span>
												</Link>
											</li>
											<li className={cx(
	 												border, 
													{[matched]: this.props.location.pathname === "/services"}
												)}
											>
												<Link exact to="/services" activeClassName={activeMenuItem}>
													<i>
														<CodeIcon className={icon} size={21} />
													</i>
													<span>Services</span>
												</Link>
											</li>
											<li className={cx(
													border, 
													{[matched]: this.props.location.pathname === "/blog"}
												)}
											>
												<Link exact to="/blog" activeClassName={activeMenuItem}>
													<i>
														<BlogIcon  className={icon} size={21} />
													</i>
													<span>Blog</span>
												</Link>
											</li>
											<li className={cx(
													border, 
													{[matched]: this.props.location.pathname === "/contact"}
												)}
											>
												<Link exact to="/contact" activeClassName={activeMenuItem}>
													<i>
														<AtSignIcon  className={icon} size={21} />
													</i>
													<span>Contact</span>
												</Link>
											</li>
										</ul>
										<div className={footnote}>
											This site was built using gatsbyjs.org
										</div>
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
