import { injectGlobal } from 'emotion'

injectGlobal`
	html {
	  font: 100%/1.45 'PT Sans',sans-serif;
	  box-sizing: border-box;
	  //overflow-y: scroll;
	  -webkit-tap-highlight-color: transparent;
	}
	body {
	  color: #222;
	  background: white;
	  font-family: 'Roboto', arial,sans-serif;
	  font-weight: 400;
	  word-wrap: break-word;
	}
`
