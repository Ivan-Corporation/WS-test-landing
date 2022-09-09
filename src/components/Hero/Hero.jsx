import React from 'react';

import { Container } from '../../GlobalStyles';
import { HeroBackground, HeroSection, HeroText, MainTitle, HeroSecondaryText, MainSecondaryTitle } from './HeroStyles';
import background from '../../assets/first_component_bg.webp'



const Hero = () => {
	return (
		<HeroSection>
			<HeroBackground src={background} alt='background' />
			<Container>
				<MainTitle>АКТИВИРУЙ <br /> ИММУНИТЕТ!</MainTitle>
				<HeroText>
					Всего пять секунд в день помогут укрепить иммунитет <br />
					и повысить защитные силы организма
				</HeroText>
				<MainSecondaryTitle>NOOTRIS ПОМОГАЕТ</MainSecondaryTitle>
				<HeroSecondaryText>
					Вашему организму во время пандемии <br />
					и сезонных простуд
				</HeroSecondaryText>
			</Container>
		</HeroSection>
	);
};

export default Hero;