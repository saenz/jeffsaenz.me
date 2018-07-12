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
   	'gatsby-plugin-sass'
 	]
 }
