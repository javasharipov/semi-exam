import React, { useEffect, useState } from 'react'
import { FaHeart, FaShoppingCart, FaEye } from 'react-icons/fa'
import { useParams } from 'react-router-dom'
import { request } from '../../api'

const Detail = () => {
	const { id } = useParams()
	const [data, Setdata] = useState(null)

	useEffect(() => {
		request.get(`/products/${id}`).then(res => {
			console.log(res)
			Setdata(res.data)
		})
	}, [id])
	useEffect(() => {
		window.scrollTo({ behavior: 'smooth', left: 0, top: 0 })
	}, [])

	return (
		<section className='py-10 px-4 flex justify-center items-center min-h-screen'>
			<div className='container mx-auto max-w-6xl flex items-center flex-col md:flex-row gap-10'>
				<div className='md:w-1/2 w-full'>
					<div className='relative h-[500px] max-h-[500px]'>
						<img
							src={data?.image}
							alt='Product'
							className='w-full h-full object-contain rounded-xl'
						/>
						<button className='absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-200 rounded-full p-2'>
							❮
						</button>
						<button className='absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-200 rounded-full p-2'>
							❯
						</button>
					</div>
					<div className='flex gap-2 mt-4'>
						<img
							src={data?.image}
							alt='Thumbnail 1'
							className='w-16 h-16 aspect-square object-cover rounded-lg border cursor-pointer'
						/>
						<img
							src={data?.image}
							alt='Thumbnail 2'
							className='w-16 h-16 aspect-square object-cover rounded-lg border cursor-pointer'
						/>
					</div>
				</div>

				<div className='md:w-1/2'>
					<h1 className='text-2xl font-semibold mb-3'>{data?.title}</h1>
					<div className='flex items-center gap-2 my-2'>
						<div className='text-yellow-500 text-lg pb-5'>
							★{data?.rating?.rate}
						</div>
						<span className='text-gray-500 text-sm pb-5'>
							{data?.rating?.count} Reviews
						</span>
					</div>
					<p className='text-2xl font-bold mb-[5px]'>${data?.price}</p>
					<p className='text-green-600 font-medium mb-8'>In Stock</p>
					<p className='text-gray-600 mt-4 pb-[27px]'>{data?.description}</p>

					<hr />

					<div className='flex gap-3 mt-[27px] mb-[67px]'>
						<button className='w-8 h-8 rounded-full bg-blue-500'></button>
						<button className='w-8 h-8 rounded-full bg-green-500'></button>
						<button className='w-8 h-8 rounded-full bg-orange-500'></button>
						<button className='w-8 h-8 rounded-full bg-gray-800'></button>
					</div>

					<div className='flex gap-4 mt-6'>
						<button className='bg-blue-600 text-white px-6 py-2 rounded-lg'>
							Select Options
						</button>
						<button className='p-2 border rounded-lg hover:bg-gray-100'>
							<FaHeart />
						</button>
						<button className='p-2 border rounded-lg hover:bg-gray-100'>
							<FaShoppingCart />
						</button>
						<button className='p-2 border rounded-lg hover:bg-gray-100'>
							<FaEye />
						</button>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Detail
