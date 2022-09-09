import React from 'react';

import { Container } from '../../GlobalStyles';
import { HeroButton, HeroSection, HeroOldPrice, MainTitle, HeroNewPrice, HeroAdvantages, HeroPrices, HeroAdvantagesItem, HeroAdvantagesItemImage, HeroAdvantagesItemText } from './HeroSecondaryStyles';
import ginger from '../../assets/product_mask/ginger.svg'
import nootris from '../../assets/advantages_image/nootris_side_view.svg'
import vorus from '../../assets/advantages_image/vorus.svg'

import '../../assets/animation/button.css'


const Hero = () => {
	return (
		<HeroSection>

			<Container>
				<MainTitle>ПОЛУЧИ ЗАЩИТУ ИММУНИТЕТА <br />
					<div style={{ color: 'orange', fontWeight: '700' }}>СО СКИДКОЙ -15% ПЕРВЫМ!</div></MainTitle>
				<HeroPrices>
					<HeroOldPrice>750₽</HeroOldPrice>
					<HeroNewPrice>690₽</HeroNewPrice>
				</HeroPrices>

				<HeroAdvantages>
					<HeroAdvantagesItem>
						<HeroAdvantagesItemImage src={ginger} height='168px' />
						<HeroAdvantagesItemText>Содержит <br />
							<div style={{ color: 'orange' }}>имбирь</div></HeroAdvantagesItemText>
					</HeroAdvantagesItem>
					<HeroAdvantagesItem>
						<HeroAdvantagesItemImage src={nootris} height='160px' width='480px' className='wobble-horizontal-on-hover' />
						<HeroAdvantagesItemText><div style={{ fontSize: '2.25rem' }}>+ Бесплатная доставка</div> <br />
							<div style={{ color: 'orange', marginBottom: '3rem' }}>Специальная цена</div></HeroAdvantagesItemText>
					</HeroAdvantagesItem>
					<HeroAdvantagesItem>
						<HeroAdvantagesItemImage src={vorus} height='160px' />
						<HeroAdvantagesItemText>Нейтрализует <br />
							<div style={{ color: 'orange' }}>вирусы</div></HeroAdvantagesItemText>
					</HeroAdvantagesItem>
				</HeroAdvantages>
				<div style={{ display: 'flex', justifyContent: 'center' }}>
					<HeroButton>Оформить заказ!</HeroButton>
				</div>
			</Container>
		</HeroSection >
	);
};

export default Hero;