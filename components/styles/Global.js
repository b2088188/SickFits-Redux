import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	@font-face{
		font-family:'radnika_next';
		src:('/static/radnikanext-medium-webfont.woff2');
		format('woff2');
		font-weight:normal;
		font-style:normal;
	}
	:root{
		--color-red:#f00;
		--color-black:#393939;
		--color-grey:#3A3A3A;
		--color-grey--light:#e1e1e1;
		--color-offwhite:#ededed;
		--maxWidth: 1000px;
		--bs: 0 12px 24px 0 rgba(0,0,0,.09);
	}
	html{
		box-sizing:border-box;
		font-size:62.5%;
	}
	*,
	*:before,
	*:after{
		box-sizing:inherit;		
	}
	body{
		font-family: 'radnika_next', --apple-system,BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
		padding:0;
		margin:0;
		font-size:1.5rem;
		line-height: 2;
	}

	a{
		text-decoration:none;
		color: var(--color-black);
		&:hover{
			text-decoration: underline;
		}
	}

	button{
		font-family: 'radnika_next', --apple-system,BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
	}
`;

export default GlobalStyle;
