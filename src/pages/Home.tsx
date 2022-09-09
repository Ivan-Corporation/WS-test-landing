import Hero from '../components/Hero/Hero'
import HeroSecondary from '../components/HeroSecondary/HeroSecondary'
import ProductMask from '../components/ProductMask/ProductMask'


function Home(): JSX.Element {


	return (
		<>
			<Hero />
			<ProductMask />
			<HeroSecondary />
		</>
	)
}

export default Home