import { ProductMaskGinger, ProductMaskLayout, ProductMaskLemon, ProductMaskNootris } from './ProductMaskStyles'
import nootris from '../../assets/product_mask/nootris.svg'
import ginger from '../../assets/product_mask/ginger.svg'
import lemon from '../../assets/product_mask/lemon.svg'

import '../../assets/animation/button.css'

function ProductMask() {
	return (
		<ProductMaskLayout>
			<ProductMaskNootris src={nootris} alt='nootris' className='wobble-horizontal-on-hover' />
			<ProductMaskGinger src={ginger} alt='ginger' />
			<ProductMaskLemon src={lemon} alt='lemon' />
		</ProductMaskLayout>
	)
}

export default ProductMask