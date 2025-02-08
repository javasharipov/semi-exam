import React from 'react'
import post1 from '../../assets/post1.svg'
import post2 from '../../assets/post2.svg'
import post3 from '../../assets/post3.svg'
import watch from '../../assets/watch.svg'
import rating from '../../assets/rating.svg'
import iconRight from '../../assets/icon-right.svg'

const Posts = () => {
    return (
        <section className='mb-28'>
            <div className='container'>
                <div className='text-center'>
                    <h3 className='text-[#23A6F0] text-[14px] font-bold mb-2.51'>Practice Advice</h3>
                    <h2 className='text-[#252B42] text-[40px] font-bold mb-2.51'>Featured Posts</h2>
                    <div className='text-[14px] font-bold text-[#737373] mb-20'>
                        <p>Problems trying to resolve the conflict between</p>
                        <span>the two major realms of Classical physics: Newtonian mechanics </span>
                    </div>
                </div>

                <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
                    <div className='rounded shadow'>
                        <img className='w-full h-auto' src={post1} alt="image" />
                        <div className='p-4'>
                            <div className='flex gap-3.5 text-[#737373] text-[12px] font-normal mb-2.5'>
                                <strong className='hover:text-[#8EC2F2] cursor-pointer'>Google</strong>
                                <strong className='hover:text-[#8EC2F2] cursor-pointer'>Trending</strong>
                                <strong className='hover:text-[#8EC2F2] cursor-pointer'>New</strong>
                            </div>

                            <div className='text-[20px] font-bold leading-8 mb-2.5 text-[#252B42]'>
                                <h2>Loudest à la Madison #1 </h2>
                                <span>(L'integral)</span>
                            </div>

                            <div className='text-[#737373] text-[14px] font-normal'>
                                <p>We focus on ergonomics and meeting </p>
                                <p>you where you work. It's only a </p>
                                <p>keystroke away.</p>
                            </div>
                            <div className='mt-[25px] mb-[25px] flex flex-col sm:flex-row text-[12px] font-bold text-[#737373]'>
                                <div className='flex items-center mb-3 sm:mb-0'>
                                    <img src={watch} alt="info" />
                                    <h3 className='pl-1'>22 April 2021</h3>
                                </div>
                                <div className='flex items-center sm:ml-[50px]'>
                                    <img src={rating} alt="info" />
                                    <span className='pl-1'>10 comments</span>
                                </div>
                            </div>


                            <button className='cursor-pointer mr-2 text-[#737373] text-[14px] font-bold transition duration-300 hover:text-[#8EC2F2] relative after:content-[""] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-[#8EC2F2] after:transition-all after:duration-300 hover:after:w-full'>
                                Learn More
                            </button>

                            <img className='inline-block' src={iconRight} alt="" />
                        </div>
                    </div>
                    <div className='rounded shadow'>
                        <img className='w-full h-auto' src={post2} alt="image" />
                        <div className='p-4'>
                            <div className='flex gap-3.5 text-[#737373] text-[12px] font-normal mb-2.5'>
                                <strong className='hover:text-[#8EC2F2] cursor-pointer'>Google</strong>
                                <strong className='hover:text-[#8EC2F2] cursor-pointer'>Trending</strong>
                                <strong className='hover:text-[#8EC2F2] cursor-pointer'>New</strong>
                            </div>

                            <div className='text-[20px] font-bold leading-8 mb-2.5 text-[#252B42]'>
                                <h2>Loudest à la Madison #1 </h2>
                                <span>(L'integral)</span>
                            </div>

                            <div className='text-[#737373] text-[14px] font-normal'>
                                <p>We focus on ergonomics and meeting </p>
                                <p>you where you work. It's only a </p>
                                <p>keystroke away.</p>
                            </div>
                            <div className='mt-[25px] mb-[25px] flex flex-col sm:flex-row text-[12px] font-bold text-[#737373]'>
                                <div className='flex items-center mb-3 sm:mb-0'>
                                    <img src={watch} alt="info" />
                                    <h3 className='pl-1'>22 April 2021</h3>
                                </div>
                                <div className='flex items-center sm:ml-[50px]'>
                                    <img src={rating} alt="info" />
                                    <span className='pl-1'>10 comments</span>
                                </div>
                            </div>


                            <button className='cursor-pointer mr-2 text-[#737373] text-[14px] font-bold transition duration-300 hover:text-[#8EC2F2] relative after:content-[""] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-[#8EC2F2] after:transition-all after:duration-300 hover:after:w-full'>
                                Learn More
                            </button>
                            <img className='inline-block' src={iconRight} alt="" />
                        </div>
                    </div>
                    <div className='rounded shadow'>
                        <img className='w-full h-auto' src={post3} alt="image" />
                        <div className='p-4'>
                            <div className='flex gap-3.5 text-[#737373] text-[12px] font-normal mb-2.5'>
                                <strong className='hover:text-[#8EC2F2] cursor-pointer'>Google</strong>
                                <strong className='hover:text-[#8EC2F2] cursor-pointer'>Trending</strong>
                                <strong className='hover:text-[#8EC2F2] cursor-pointer'>New</strong>
                            </div>

                            <div className='text-[20px] font-bold leading-8 mb-2.5 text-[#252B42]'>
                                <h2>Loudest à la Madison #1 </h2>
                                <span>(L'integral)</span>
                            </div>

                            <div className='text-[#737373] text-[14px] font-normal'>
                                <p>We focus on ergonomics and meeting </p>
                                <p>you where you work. It's only a </p>
                                <p>keystroke away.</p>
                            </div>
                            <div className='mt-[25px] mb-[25px] flex flex-col sm:flex-row text-[12px] font-bold text-[#737373]'>
                                <div className='flex items-center mb-3 sm:mb-0'>
                                    <img src={watch} alt="info" />
                                    <h3 className='pl-1'>22 April 2021</h3>
                                </div>
                                <div className='flex items-center sm:ml-[50px]'>
                                    <img src={rating} alt="info" />
                                    <span className='pl-1'>10 comments</span>
                                </div>
                            </div>


                            <button className='cursor-pointer mr-2 text-[#737373] text-[14px] font-bold transition duration-300 hover:text-[#8EC2F2] relative after:content-[""] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-[#8EC2F2] after:transition-all after:duration-300 hover:after:w-full'>
                                Learn More
                            </button>
                            <img className='inline-block' src={iconRight} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Posts
