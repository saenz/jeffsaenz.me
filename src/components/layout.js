import React from 'react'
import PropTypes from 'prop-types'

import Helmet from 'react-helmet'
import {css} from 'react-emotion'
import Menu from '../components/menu'
import Footer from '../components/footer'
import config from '../config/site'
import { ThemeProvider } from 'emotion-theming'
import theme from '../styles/theme'
//import '../styles/global'
import favicon from '../images/favicon.ico'

//import "typeface-roboto"
//import "typeface-pt-sans"

// main site style
import '../styles/index.scss'

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
const Layout = ({ children, location }) => {
	return (
	    <div className='App'>
	    	<Helmet>
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

    		<ThemeProvider theme={theme}>
    			<div>
    				<Menu />
    				<div className='pageContent'>{children}</div>
    			</div>
    		</ThemeProvider>

    		<ThemeProvider theme={theme}>
	    		<Footer />
	    	</ThemeProvider>
	    </div>
	)
}

Layout.propTypes = {
  children: PropTypes.element,
  location: PropTypes.object
}

export default Layout
