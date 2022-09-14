import styled from 'styled-components';
import { Button } from '../../GlobalStyles';

export const HeroSection = styled.section`
	height: 100vh;
	background-position: center;
	background-size: cover;
	padding-top: clamp(70px, 25vh, 220px);
	box-shadow: inset 0 0 0 1000px rgba (0, 0, 0, 0.2);
	
`;

export const HeroBackground = styled.img`
	object-fit: cover;
	width: 100%;
	height: 100%;
	
	top: 0;
	position: absolute;
	z-index: -1;
	@media screen and (max-width: 660px) {
			height: 125vh;
	}
`;

export const MainTitle = styled.h1`
	font-size: clamp(2.3rem, 7vw, 9.5rem);
	font-weight: 700;
	margin-bottom: 2rem;
	margin-left: 5%;
	color: ${props => props.theme.colors.white};
	
	letter-spacing: 4px;
	@media screen and (max-width: 960px) {
		text-align:center;
		margin-left: 0%;
	}
`;

export const HeroText = styled.p`
	margin-bottom: 10rem;
	font-size: clamp(18px, 1.5vw, 22px);
	line-height: 28px;
	color: ${props => props.theme.colors.black};
	margin-left: 5%;
	@media screen and (max-width: 960px) {
		margin-bottom: 2rem;
		text-align:center;
		margin-left: 0%;
	}
`;


export const MainSecondaryTitle = styled.h1`
	font-size: clamp(24px, 2vw, 36px);
	font-weight: 700;
	margin-bottom: 1rem;
	margin-left: 5%;
	color: ${props => props.theme.colors.black};
	@media screen and (max-width: 960px) {
		text-align:center;
		margin-left: 0%;
	}
	
	
`;

export const HeroSecondaryText = styled.p`
	
	font-size: clamp(18px, 1vw, 18px);
	line-height: 21.33px;
	color: ${props => props.theme.colors.black};
	margin-left: 5%;
	@media screen and (max-width: 960px) {
		text-align:center;
		margin-left: 0%;
	}
`;

