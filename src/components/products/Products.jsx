import React from 'react'
import { colors } from '../../static/index'
import { useNavigate } from 'react-router-dom'
import { FaRegHeart, FaHeart } from 'react-icons/fa'
import { useGlobalContext } from '../../context'

const Products = ({ products }) => {
	const navigate = useNavigate()
	const [state, dispatch] = useGlobalContext()

	return (
		<section className='py-10'>
			<div className='container mx-auto'>
				<div className='mb-12 text-[#737373] text-center'>
					<h2 className='mb-2.5 text-[20px] font-normal'>Featured Products</h2>
					<h3 className='mb-2.5 text-[24px] sm:text-[28px] font-bold text-[#252B42]'>
						BESTSELLER PRODUCTS
					</h3>
					<p className='text-[14px] sm:text-[16px] font-normal'>
						Problems trying to resolve the conflict between
					</p>
				</div>

				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
					{products?.map(product => (
						<div
							key={product.id}
							className='bg-white rounded-xl transition p-4 cursor-default'
						>
							<div className='relative'>
								<div className='w-full aspect-square overflow-hidden rounded-lg'>
									<img
										className='w-full h-full object-contain'
										src={product.image}
										alt={product.title}
									/>
								</div>
								<button
									onClick={() =>
										dispatch({ type: 'TOOGLE_LIKE', payload: product })
									}
									className='absolute top-1 right-1 text-[19px] cursor-pointer'
								>
									{state.wishlist?.some(({ id }) => id === product.id) ? (
										<FaHeart className='text-blue-500' />
									) : (
										<FaRegHeart />
									)}
								</button>
							</div>
							<div className='p-4 text-center'>
								<h2
									onClick={() => navigate(`/product/${product.id}`)}
									title={product.title}
									className='text-[#252B42] text-[16px] sm:text-[18px] font-bold mb-2 truncate cursor-pointer'
								>
									{product.title}
								</h2>
								<p className='text-[#737373] text-[14px] sm:text-[16px] font-bold mb-2'>
									English Department
								</p>
								<strong className='block text-[#23856D] text-[16px] sm:text-[18px] font-bold mb-3'>
									${product.price}
								</strong>
								<div className='flex items-center justify-center gap-2 mt-2'>
									{colors.map((color, index) => (
										<span
											key={index}
											style={{ background: color }}
											className='w-5 h-5 sm:w-6 sm:h-6 inline-block rounded-full cursor-pointer border border-gray-300'
										></span>
									))}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Products
