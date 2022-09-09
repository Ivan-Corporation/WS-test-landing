import { useState } from 'react';
import { HeaderData } from '../../data/HeaderData.jsx';
import {
	HeaderMain,
	HeaderContainer,
	HeaderIcon,
	MobileIcon,
	HeaderMenu,
	HeaderLinks,
	HeaderItem,
	HeaderLogo,
	HeaderCart,
	HeaderPhone,
	HeaderStoreNumber,
} from './HeaderStyles.jsx';

// Icons
import { FaTimes } from 'react-icons/fa';
import { CgMenuRight } from 'react-icons/cg';
import { IconContext } from 'react-icons';
import logo from '../../assets/logo.svg'
import cart from '../../assets/cart.svg'

import { motion } from 'framer-motion'



function Navbar() {

	const [show, setShow] = useState(false);
	const [cartNumber, setCartNumber] = useState(1)

	const handleClick = () => {
		setShow(!show);
	};

	const closeMobileMenu = () => {
		setShow(false);
	};




	return (
		<IconContext.Provider value={{ color: '#fff' }}>
			<motion.div
				initial={{ opacity: 0, y: -180 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{
					ease: "easeInOut",
					duration: 1,
					delay: 0,
				}}
			>
				<HeaderMain>
					<HeaderContainer>
						<HeaderLogo href="/">
							<HeaderIcon src={logo} alt="logo" />
						</HeaderLogo>
						<MobileIcon onClick={handleClick}>
							{show ? <FaTimes /> : <CgMenuRight />}
						</MobileIcon>
						<HeaderMenu show={show}>
							{HeaderData.map((el, index) => (
								<HeaderItem key={index}>
									<HeaderLinks href={el.to} onClick={() => closeMobileMenu()}>
										{el.text}
									</HeaderLinks>
								</HeaderItem>
							))}
							<HeaderLinks><HeaderPhone show={show}>8 8 (800) 600-09-90</HeaderPhone></HeaderLinks>


						</HeaderMenu>
						<HeaderCart href="/" show={show}>
							<HeaderIcon src={cart} alt="logo" />
							<HeaderStoreNumber>{cartNumber}</HeaderStoreNumber>
						</HeaderCart>

					</HeaderContainer>
				</HeaderMain>
			</motion.div>
		</IconContext.Provider>
	)
}

export default Navbar