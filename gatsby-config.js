// process env
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
	siteMetadata: {
    	title: 'Jeff Saenz Freelance Web Developer',
    	author: 'saenz',
    	authorLink: 'https://github.com/saenz',
    	//disqus: 'gatsby-starter-blog'// put your disqus ID here
  	},
 	plugins: [
		{
      		resolve: `gatsby-plugin-emotion`,
      		options: {
        		autoLabel: true
      		}
    	},
		'gatsby-plugin-react-helmet',
   		'gatsby-plugin-sass',
   		{
		    resolve: `gatsby-plugin-google-analytics`,
		    options: {
		        trackingId: process.env.GOOGLE_ANALYTICS,
		        // Puts tracking script in the head instead of the body
		        head: false,
		        // Setting this parameter is optional
		        anonymize: true,
		        // Setting this parameter is also optional
		        respectDNT: true,
		        // Avoids sending pageview hits from custom paths
		        exclude: ["/preview/**", "/do-not-track/me/too/"],
		    },
    	},
 	]
 }

