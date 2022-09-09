import React from 'react';

import { Container } from '../../GlobalStyles';
import { HeroBackground, HeroSection, HeroText, MainTitle, HeroSecondaryText, MainSecondaryTitle } from './HeroStyles';
import background from '../../assets/first_component_bg.webp'

import { motion } from 'framer-motion'


const Hero = () => {
	return (
		<HeroSection>

			<HeroBackground src={background} alt='background' />

			<Container>
				<motion.div
					initial={{ opacity: 0, x: -180 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{
						ease: "easeInOut",
						duration: 1,
						delay: 0.5,
					}}
				>
					<MainTitle>АКТИВИРУЙ <br /> ИММУНИТЕТ!</MainTitle>

					<HeroText>
						Всего пять секунд в день помогут укрепить иммунитет <br />
						и повысить защитные силы организма
					</HeroText>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, x: -180 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{
						ease: "easeInOut",
						duration: 1,
						delay: 0.5,
					}}
				>
					<MainSecondaryTitle>NOOTRIS ПОМОГАЕТ</MainSecondaryTitle>
					<HeroSecondaryText>
						Вашему организму во время пандемии <br />
						и сезонных простуд
					</HeroSecondaryText>
				</motion.div>
			</Container>
		</HeroSection>
	);
};

export default Hero;