import { ProductMaskGinger, ProductMaskLayout, ProductMaskLemon, ProductMaskNootris } from './ProductMaskStyles'
import nootris from '../../assets/product_mask/nootris.svg'
import ginger from '../../assets/product_mask/ginger.svg'
import lemon from '../../assets/product_mask/lemon.svg'

import '../../assets/animation/button.css'

import { motion } from 'framer-motion'

function ProductMask() {
	return (
		<ProductMaskLayout>
			<motion.div
				initial={{ opacity: 0, x: 50 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{
					ease: "easeInOut",
					duration: 1,
					delay: 0.8,
				}}
			>
				<ProductMaskNootris src={nootris} alt='nootris' className='wobble-horizontal-on-hover' />
				<ProductMaskGinger src={ginger} alt='ginger' />
				<ProductMaskLemon src={lemon} alt='lemon' />
			</motion.div>
		</ProductMaskLayout>
	)
}

export default ProductMask