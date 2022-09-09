import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
  	margin: 0;
  	padding: 0;
  	font-family: 'Rubik', sans-serif;
	font-weight: 400;

  }
`;

export const Container = styled.div`
	width: 100%;
	margin-right: auto;
	margin-left: auto;
	padding: 0 30px;
	@media screen and (max-width: 960px) {
		padding: 0 30px;
	}
`;




export default GlobalStyle;