import React from 'react'
import logo from '../../assets/logo.svg'
import fFacabook from '../../assets/ffacebook.svg'
import fInstagram from '../../assets/finstagram.svg'
import fTwitter from '../../assets/ftwitter.svg'

const Footer = () => {
  return (
    <>
      <div className='w-full h-36 bg-[#fafafa]'>
        <div className='container flex items-center justify-between h-full px-4 mx-auto mt-24 sm:px-6 lg:px-8'>
          <div>
            <img src={logo} alt='' />
          </div>
          <div className='flex items-center gap-5'>
            <img src={fFacabook} alt='' />
            <img src={fInstagram} alt='' />
            <img src={fTwitter} alt='' />
          </div>
        </div>
      </div>
      <div className='w-full h-auto'>
        <div className='container mx-auto flex flex-wrap gap-7.5 items-center h-[272px] px-4 sm:px-6 lg:px-8'>
          <ul className='flex flex-col items-start w-full sm:w-[148px]'>
            <h2 className='text-base font-bold text-[#252B42] mb-5'>
              Company Info
            </h2>
            <li className='text-[#737373] text-sm font-bold mt-2.5 hover:underline'>
              <a href=''>
                <span>About Us</span>
              </a>
            </li>
            <li className='text-[#737373] text-sm font-bold mt-2.5 hover:underline'>
              <a href=''>
                <span>Carrier</span>
              </a>
            </li>
            <li className='text-[#737373] text-sm font-bold mt-2.5 hover:underline'>
              <a href=''>
                <span>We are hiring</span>
              </a>
            </li>
            <li className='text-[#737373] text-sm font-bold mt-2.5 hover:underline'>
              <a href=''>
                <span>We are hiring</span>
              </a>
            </li>
          </ul>
          <ul className='flex flex-col items-start w-full sm:w-[148px]'>
            <h2 className='text-base font-bold text-[#252B42] mb-5'>Legal</h2>
            <li className='text-[#737373] text-sm font-bold mt-2.5 hover:underline'>
              <a href=''>
                <span>About Us</span>
              </a>
            </li>
            <li className='text-[#737373] text-sm font-bold mt-2.5 hover:underline'>
              <a href=''>
                <span>Carrier</span>
              </a>
            </li>
            <li className='text-[#737373] text-sm font-bold mt-2.5 hover:underline'>
              <a href=''>
                <span>We are hiring</span>
              </a>
            </li>
            <li className='text-[#737373] text-sm font-bold mt-2.5 hover:underline'>
              <a href=''>
                <span>We are hiring</span>
              </a>
            </li>
          </ul>
          <ul className='flex flex-col items-start w-full sm:w-[148px]'>
            <h2 className='text-base font-bold text-[#252B42] mb-5'>
              Features
            </h2>
            <li className='text-[#737373] text-sm font-bold mt-2.5 hover:underline'>
              <a href=''>
                <span>Business Marketing</span>
              </a>
            </li>
            <li className='text-[#737373] text-sm font-bold mt-2.5 hover:underline'>
              <a href=''>
                <span>User Analytic</span>
              </a>
            </li>
            <li className='text-[#737373] text-sm font-bold mt-2.5 hover:underline'>
              <a href=''>
                <span>Live Chat</span>
              </a>
            </li>
            <li className='text-[#737373] text-sm font-bold mt-2.5 hover:underline'>
              <a href=''>
                <span>Unlimited Support</span>
              </a>
            </li>
          </ul>
          <ul className='flex flex-col items-start w-full sm:w-[148px]'>
            <h2 className='text-base font-bold text-[#252B42] mb-5'>
              Resources
            </h2>
            <li className='text-[#737373] text-sm font-bold mt-2.5 hover:underline'>
              <a href=''>
                <span>IOS & Android</span>
              </a>
            </li>
            <li className='text-[#737373] text-sm font-bold mt-2.5 hover:underline'>
              <a href=''>
                <span>Watch a Demo</span>
              </a>
            </li>
            <li className='text-[#737373] text-sm font-bold mt-2.5 hover:underline'>
              <a href=''>
                <span>Customers</span>
              </a>
            </li>
            <li className='text-[#737373] text-sm font-bold mt-2.5 hover:underline'>
              <a href=''>
                <span>API</span>
              </a>
            </li>
          </ul>
          <div>
            <span className='text-base font-bold text-[#252B42]'>
              Get In Touch
            </span>
            <div className='relative w-full sm:w-[321px] h-[58px] mt-5 border border-[#e6e6e6] rounded-[5px] overflow-hidden'>
              <input
                className='p-5 w-full h-full pr-[90px] outline-none'
                type='text'
                placeholder='Your Email'
              />
              <button className='absolute top-0 right-0 h-full px-4 bg-[#23A6F0] text-white rounded-r-[5px] transition duration-300 hover:bg-[#1d8ed6] hover:shadow-lg cursor-pointer'>
                Subscribe
              </button>
            </div>

            <span className='text-sm font-normal text-[#737373]'>
              Lore imp sum dolor Amit
            </span>
          </div>
        </div>
      </div>
      <div className='w-full h-[74px] bg-[#fafafa]'>
  <div className='container flex items-center justify-center h-full px-4 mx-auto sm:px-6 lg:px-8'>
    <span className='text-sm font-bold text-[#737373] hidden sm:inline-block'>
      Made With Love By Finland All Right Reserved
    </span>
  </div>
</div>

    </>
  )
}

export default Footer
