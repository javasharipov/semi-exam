import React from 'react'
import heroImage from '../../assets/hero.svg'

const Hero = () => {
  return (
    <div
      className="h-[910px] w-full bg-cover bg-top sm:bg-center relative"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="container flex flex-col gap-6 text-white items-start absolute top-[45%] left-[50%] translate-x-[-50%] translate-y-[-45%] max-md:items-center">
        <div className="flex justify-start w-full max-md:justify-center">
          <span className="text-2xl font-bold leading-6 text-white max-xl:text-xl max-lg:text-lg max-md:text-base">
            SUMMER 2020
          </span>
        </div>

        <h2 className="text-7xl font-bold leading-[1.2] text-white text-left max-xl:text-6xl max-lg:text-5xl max-md:text-4xl max-sm:text-4xl max-sm:leading-[1.3] max-md:text-center">
          NEW COLLECTION
        </h2>

        <p className="text-3xl font-normal leading-9 text-white max-w-[500px] text-left max-xl:text-2xl max-lg:text-xl max-md:text-lg max-sm:text-[20px] max-sm:leading-7 max-md:text-center">
          We know how large objects will act, but things on a small scale.
        </p>

        <div className="flex justify-start w-full max-md:justify-center">
          <button className="px-10 py-4 bg-[#2DC071] text-2xl font-bold text-white cursor-pointer transition duration-300 hover:bg-[#249b5a] hover:shadow-lg">
            SHOP NOW
          </button>

        </div>
      </div>
    </div>
  )
}

export default Hero
