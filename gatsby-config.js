// process env
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

// contentful config
let contentful = {
    development: {
      	spaceId: "nuj23ctcjmkv",
      	accessToken: "113a32f47b75e00344fd6ead020ca01972b2b7f780895e50c202af4bcf87be0f",
    }
}


module.exports = {
	siteMetadata: {
    	title: 'Jeff Saenz Freelance Web Developer',
    	author: 'saenz',
    	authorLink: 'https://github.com/saenz',
    	siteUrl: `https://www.jeffsaenz.me`,
    	//disqus: 'gatsby-starter-blog'// put your disqus ID here
  	},
 	plugins: [
 	    {
      		resolve: 'gatsby-source-contentful',
      		options: contentful.development,
    	},
	  	{
	    	resolve: `gatsby-plugin-nprogress`,
	    	options: {
		      	// Setting a color is optional.
		      	color: `tomato`,
		      	// Disable the loading spinner.
		      	showSpinner: false,
	    	},
	  	},
	  	{
		    resolve: `gatsby-transformer-remark`,
		    options: {
		        plugins: [
		          	{
		            	resolve: `gatsby-remark-prismjs`,
		          	},
		        ],
		    },
	    },
 	    {
			resolve: 'gatsby-plugin-sitemap',
			options: {
			    query: `
			        {
				        site {
				            siteMetadata {
				              siteUrl
				            }
				        }
				        allSitePage {
				            edges {
				              	node {
				                	path
				              	}
				            }
				        }
			      	}`,
			    output: '/sitemap.xml',
			    createLinkInHead: true,
			    serialize: ({ site, allSitePage }) =>
			      allSitePage.edges.map((edge) => {
			        return {
			          url: site.siteMetadata.siteUrl + edge.node.path,
			          changefreq: 'daily',
			          priority: 0.7
			        };
			    })
			}
		},
	  	{
	    	resolve: `gatsby-plugin-canonical-urls`,
	    	options: {
	      	siteUrl: `https://www.jeffsaenz.me`,
	    	},
	  	},
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

