import React from 'react'
import call from '../../assets/call.svg'
import sms from '../../assets/sms.svg'
import instagram from '../../assets/instagram.svg'
import youtube from '../../assets/youtube.svg'
import facebook from '../../assets/facebook.svg'
import twitter from '../../assets/twitter.svg'
import './topHeader.scss'

const Topheader = () => {
  return (
    <header className='px-4 bg-[#252B42] text-white top-header'>
        <div className='mx-auto max-w-[1380px]'>
          <ul className='flex items-center justify-between h-[58px] text-[14px] font-bold'>
            <div className='flex gap-5'>
            <li>
              <span>
                <img className='inline-block mr-1' src={call} alt='call' />
                <a href='#'>(225) 555-0118</a>
              </span>
            </li>
            <li>
              <span>
                <img className='inline-block mr-1' src={sms} alt='sms' />
                <a href='#'>michelle.rivera@example.com</a>
              </span>
            </li>
            </div>
            <li>
              <span>
                <h2>Follow Us  and get a chance to win 80% off</h2>
              </span>
            </li>
            <li>
              <span className='flex gap-2'>
                <h2>Follow Us  :</h2>
                  <a href="#"><img src={instagram} alt="instagram" /></a>
                  <a href="#"><img src={youtube} alt="youtube" /></a>
                  <a href="#"><img src={facebook} alt="facebook" /></a>
                  <a href="#"><img src={twitter} alt="twitter" /></a>
              </span>
            </li>
          </ul>
        </div>
    </header>
  )
}

export default Topheader