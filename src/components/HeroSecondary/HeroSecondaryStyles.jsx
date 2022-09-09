import styled from 'styled-components';
import { Button } from '../../GlobalStyles';

export const HeroSection = styled.section`
	height: 100%;
	background-position: center;
	background-size: cover;
	padding-top: clamp(70px, 25vh, 220px);
	box-shadow: inset 0 0 0 1000px rgba (0, 0, 0, 0.2);
	background-color: ${props => props.theme.colors.black};

`;



export const MainTitle = styled.h1`
	font-size: clamp(0.5rem, 7vw, 48px);
	font-weight: 700;
	margin-bottom: 2rem;
	margin-left: 2.5%;
	color: ${props => props.theme.colors.white};
	text-align: center;
	letter-spacing: 4px;	
`;

export const HeroPrices = styled.div`
	display: flex;
	margin-top: 9rem;
	justify-content: center;
	@media screen and (max-width: 960px) {
		margin-top: 3rem;
	}
`

export const HeroOldPrice = styled.p`
	text-decoration: line-through;
	font-size: clamp(20px, 2.5vw, 39px);
	line-height: 42px;
	color: ${props => props.theme.colors.grey};
	margin-left: 2.5%;
	
`;
export const HeroNewPrice = styled.p`

	font-size: clamp(26px, 2.5vw, 58px);
	line-height: 42px;
	color: ${props => props.theme.colors.white};
	margin-left: 5%;
	/* Key screen changes */
	
`;


export const HeroAdvantages = styled.div`
	display: flex;
	justify-content: center;
	justify-content: space-evenly;
	margin-top: 7rem;
	@media screen and (max-width: 960px) {
		flex-direction: column;
		margin-top: 1rem;
	}
`;

export const HeroAdvantagesItem = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	@media screen and (max-width:960px) {
		:nth-child(1) { order: 1; }
	}
`;

export const HeroAdvantagesItemImage = styled.img`
	justify-content: center;
	margin-bottom: 4rem;
	@media screen and (max-width:960px) {
		margin-bottom: 0rem;
		transform: scale(0.9);	
	}
	@media screen and (max-width:660px) {
		margin-bottom: 0rem;
		transform: scale(0.65);	
	}
`;

export const HeroAdvantagesItemText = styled.p`
	color: ${props => props.theme.colors.white};
	text-align:center
`;

export const HeroButton = styled.button`
	
	width: 256px;
	height: 56px;
	cursor: pointer;
	margin-top: 9rem;
	margin-bottom: 9rem;
	color: ${props => props.theme.colors.black};
	background-color: ${props => props.theme.colors.orange};
	border-radius: 7px;
	line-height: 21.33px;
	text-align: center;
	font-size: 18px;
	&:hover {
		background-color: ${props => props.theme.colors.yellow};
	}
`;



