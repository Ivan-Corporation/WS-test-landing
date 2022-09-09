import styled from 'styled-components';
import { Container } from '../../GlobalStyles';



export const HeaderMain = styled.nav`
	background: ${props => props.theme.colors.black};
	margin-bottom: -80px;
	height: 80px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1.2rem;
	position: absolute;
	top: 0;
	z-index: 50;
	width: 100%;
	transition: background-color 0.3s ease-in;
`;

export const HeaderContainer = styled(Container)`
	display: flex;
	justify-content: start;
	height: 80px;
	${Container}
`;



export const HeaderIcon = styled.img`
	margin-top:  1.28%;

`;

export const MobileIcon = styled.div`
	display: none;
	z-index: 50;
	
	@media screen and (max-width: 960px) {
		display: block;
		position: absolute;
		top: 0;
		right: 0;
		transform: translate(-100%, 60%);
		font-size: 1.8rem;
		cursor: pointer;
		margin-top:  0.5%;
	}
`;

export const HeaderLogo = styled.a`
	color: ${props => props.theme.colors.white};
	justify-self: flex-start;
	cursor: pointer;
	text-decoration: none;
	font-size: 2rem;
	display: flex;
	align-items: center;
	z-index: 50;
	@media screen and (max-width: 960px) {
			display: none;
	}
`;


export const HeaderCart = styled.a`
	color: ${props => props.theme.colors.white};
	justify-self: flex-start;
	text-decoration: none;
	font-size: 2rem;
	display: flex;
	align-items: center;
	z-index: 50;
	@media screen and (max-width: 960px) {
			
	}
`;

export const HeaderStoreNumber = styled.a`
	background-color: ${props => props.theme.colors.orange};
	width: 16px;
	height: 16px;
	border-radius: 50%;
	margin-top: 50%;
	margin-left: -16%;
	font-size: 12px;
	color: ${props => props.theme.colors.black};
	padding-left: 10%;
	padding-top: 2%;
	@media screen and (max-width: 960px) {
			
	}
`;

export const HeaderMenu = styled.ul`
	display: flex;
	justify-content: space-evenly;
	padding-left: 5%;
	padding-right: 5%;
	align-items: center;
	list-style: none;
	text-align: center;
	width: 100%;
	
	@media screen and (max-width: 960px) {
		flex-direction: column;
		width: 100%;
		height: 100vh;
		position: fixed;
		padding-top: 25%;
		top: 0;
		left: 0;
		opacity: ${({ show }) => (show ? 1 : 0)};
		visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
		transform: translateY(${({ show }) => (show ? '0' : '-10px')});
		transition: opacity 0.5s ease;
		background-color: ${props => props.theme.colors.black};
		

	}
	
`;

export const HeaderPhone = styled.div`
	cursor: copy;
	@media screen and (max-width: 960px) {
			visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
		}
`;

export const HeaderItem = styled.li`
	height: 80px;
	cursor: pointer;
	@media screen and (max-width: 960px) {
		width: 100%;
		&:hover {
			border: none;
		}
	}
`;

export const HeaderLinks = styled.a`
	color: ${props => props.theme.colors.white};
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0.5rem 1rem;
	height: 100%;
	
	&:hover {
		color: #c8c9d8;
		transition: all 0.3s ease;
	}
	@media screen and (max-width: 1340px) {
		font-size: 1rem;
	}
	@media screen and (max-width: 960px) {
		text-align: center;
		padding: 2rem;
		width: 100%;
		display: table;
		font-size: 1.5rem;
		&:hover {
			color: ${props => props.theme.colors.orange};
			transition: all 0.3s ease;
		}
	}
`;

