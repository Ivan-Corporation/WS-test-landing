import styled from 'styled-components';

export const ProductMaskLayout = styled.section`
	position: absolute;
	left: 77%;
	top:20%;
	transform: scale(1.1);
	@media screen and (max-width: 1690px) {
		transform: scale(1);
	}
	@media screen and (max-width: 1400px) {
		left: 70.5%;
		transform: scale(0.8);
	}
	


	/* Key screen changes */
	@media screen and (max-width: 960px) {
		left: 40%;
		top: 51%;
		transform: scale(0.6);
	}
	@media screen and (max-width: 660px) {
		
		transform: scale(0.4);
	}
	
	@media screen and (max-width: 380px) {
		
		transform: scale(0.35);
	}

`;
export const ProductMaskNootris = styled.img`
	height: 635.29px;
	position: relative;
	z-index: 2;
	
`;
export const ProductMaskGinger = styled.img`
	height: 408.83px;
	position: absolute;
	margin-top: 205px;
	margin-left: -400px;
	z-index: 1;
`;
export const ProductMaskLemon = styled.img`
	height: 462.94px;
	position: absolute;
	z-index: 3;
	margin-top: 400px;
	margin-left: -610px;
`;

