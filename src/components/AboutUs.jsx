import React from 'react';
import PharmacistImage from '../assets/pharmasict-serving-customer-drug-store 1abousus.svg';

export const AboutUs = () => {
  const imagePath = process.env.PUBLIC_URL + '/about/pharmasict-serving-customer-drug-store%201abousus.svg';

  return (
    <div className='bg-gray-200 w-[1440px] flex flex-col md:flex-row md:space-x-32 md:justify-center md:items-center md:h-[467px] mt-24'>

      <div className='flex gap-[150px]'>
        {/* left part (hidden on small screens) */}
        <div className='w-full md:w-[384px] h-[468px] hidden md:block'>
          <img src={PharmacistImage} alt="Pharmacist Serving Customer" className='w-full h-full object-cover' />
        </div>

        {/* right part */}
        <div className='w-full md:w-[50%] text-center md:text-left mt-32 mb-10 space-y-4 md:flex-col md:flex'>

          <h2 className='text-blue-800 text-3xl font-bold hidden md:inline'>About Us</h2>

          {/* Content for larger screens */}
          <p className='text-gray-700 hidden md:inline'>
            Lorem Ipsum is simply dummy text of the printing and <br />typesetting industry. Lorem Ipsum has been the industry's <br /> standard dummy text ever since the 1500s, when an unknown<br /> printer took a galley of type and scrambled it to make a type <br />specimen book. It has survived not only five centuries.
          </p>

          {/* Read More button for larger screens */}
          <button className='bg-red-500 rounded-full text-white px-4 md:px-6 py-2 hover:bg-red-600 transition duration-300 hidden md:inline'
            style={{ maxWidth: '132px' }}>
            Read More
          </button>
 {/* Read More button for smaller screens */}
          <div className='md:hidden space-y-6 flex flex-col justify-center items-center pb-10 pt-0 '>
      <h2 className='text-[#0E2368] text-4xl font-bold'>About Us</h2>
          <div className='px- '>
    <p className='text-gray-700 text-center'>
      Lorem Ipsum is simply dummy text of the printing <br/> and typesetting industry. Lorem Ipsum has been the <br/> industry's standard dummy text ever since the 1500s,<br/> when an unknown printer took a galley of type and <br/> scrambled it to make a type specimen book. It has<br/> survived not only five centuries.
    </p>
           </div>
       {/* Read More button for smaller screens */}
     <button className='bg-[#E23744] rounded-full text-white px-2 md:px-6 hover:bg-[#E23744] transition duration-300'
    style={{ width: '100%', maxWidth: '132px', height: '42px' }}>
    Read More
   </button>
    </div>
        </div>
      </div>
    </div>
  );
};
