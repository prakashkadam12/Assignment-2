import React from 'react';
import hero2 from '../assets/hero2.png';
import hero from '../assets/hero.png';
import vector from '../assets/vector.png';

export const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-between w-full  sm:h-[804px] relative overflow-hidden'>

      {/* Left part (hidden on small screens) */}
      <div className='ml-36 space-y-16 hidden sm:block'>
        <div className='mt-14'>
          <img src={hero2} alt='Hero Image Left' className='w-[107px] h-[83px]' />
        </div>

        <div className='space-y-9'>
          <h1 className='text-[#0E2368] text-4xl font-bold'>
            Discover the  <span className='text-[#E23744]'>Best</span> <br/> Food  and  Drinks
          </h1>
          <p className='text-[#444957] font-Sans'>
          Naturally made Healthcare Products for the better care & support of your body.
          </p>
          <button className='bg-red-500 rounded-full text-white px-4 py-2 hover:bg-red-600 transition duration-300'>
            Explore Now!
          </button>
        </div>
      </div>

{/* Right part (displayed on small screens) */}
<div className='w-full sm:w-[652px] sm:h-[779px] relative'>
  <div className='sm:hidden text-black space-y-10 text-center relative'>
    <div className='absolute top-0 right-0 -mt-4 mr-0 mb-0 z-10'>
      {/* Vector image */}
      <img src={vector} alt='Vector Image' className='mt-[7px] mr-2rem'/>
      {/* "Get in touch" div */}
      <div className='absolute top-0 right-0 mt-4 mr-4 text-white z-20'>
        <div className='border border-white rounded-full px-2 py-1'>
          Get in touch
        </div>
      </div>
    </div>
    <div className='relative mt-[-50px] sm:h-[779px] sm:object-cover z-1'>
      {/* Adjust mt-[-50px] to move the hero image higher */}
      <img src={hero} alt='Hero Image' className='w-full top-0 -mt-8 sm:h-[779px] sm:object-cover' />
    </div>
    {/* Other content below the images */}
    <h2 className='text-[#0E2368] text-4xl font-bold'>
      Discover the <br /> <span className='text-[#E23744]'>Best</span> Food and <br /> Drinks
    </h2>
    <p>
      Naturally made Healthcare Products for the <br/> better care & support of your body.<br />
      {/* Line break for larger screens */}
    </p>
    <button className='bg-red-500 rounded-full text-white px-4 py-2 hover:bg-red-600 transition duration-300'>
      Explore Now!
    </button>
  </div>
</div>

{/* Right part (displayed on larger screens) */}
<div className='hidden sm:block relative w-full h-[779px] sm:mb-28'>
  {/* Vector image container */}
  <div className='relative'>
    {/* Vector image */}
    <img src={vector} alt='Vector Image' className='absolute top-0 right-0 z-10' />
    {/* "Get in touch" div */}
    <div className='absolute top-0 right-0 mt-3 mr-3 text-white z-20'>
      <h2 className='border border-white rounded-full px-2 py-1 mr-7 mt-3'>
        Get in touch
      </h2>
    </div>
  </div>

  {/* Hero image */}
  <img src={hero} alt='Hero Image Right' className='w-full h-[704px] object-cover' />
</div>


    </div>
  );
};
