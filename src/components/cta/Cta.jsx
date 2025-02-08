import React from 'react';
import cta from '../../assets/cta.svg';

const Cta = () => {
  return (
    <section className='mt-24 mb-24'>
      <div className='container'>
        <div className='flex flex-col md:flex-row-reverse items-center justify-center gap-8'>
          <div className='text-[#252B42] w-full md:w-1/2 max-sm:text-center'>
            <p className='text-[#BDBDBD] mb-8 text-[16px] font-bold'>SUMMER 2020</p>
            <h2 className='text-[32px] sm:text-[40px] font-bold leading-12 mb-8'>
              Part of the Neural Universe
            </h2>

            <p className='text-[18px] sm:text-[20px] font-normal text-[#737373]'>
              We know how large objects will act,{' '}
            </p>
            <span className='text-[18px] sm:text-[20px] font-normal text-[#737373]'>
              but things on a small scale.
            </span>

            <div className='flex flex-col sm:flex-row gap-4 sm:gap-8 text-[14px] sm:text-[16px] font-bold mt-8'>
              <button className='px-[40px] py-[15px] bg-[#2DC071] text-white rounded-[5px] cursor-pointer transition duration-300 hover:bg-[#249b5a] hover:shadow-lg'>
                BUY NOW
              </button>
              <button className='px-[40px] py-[15px] border border-[#2DC071] text-[#2DC071] rounded-[5px] cursor-pointer transition duration-300 hover:bg-[#2DC071] hover:text-white hover:shadow-lg'>
                READ MORE
              </button>
            </div>

          </div>

          <div className='w-full md:w-1/2'>
            <img className='w-full h-auto mt-8 md:mt-0' src={cta} alt="cta image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
