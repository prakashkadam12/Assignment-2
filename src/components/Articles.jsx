import React, { useState, useEffect } from 'react';
import cardData from './cardData';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

export const Articles = () => {
  const [pageSize, setPageSize] = useState(3); // Initial pageSize
  const totalSets = Math.ceil(cardData.length / pageSize);

  const [currentSet, setCurrentSet] = useState(1);
  const [displayedCards, setDisplayedCards] = useState(cardData.slice(0, pageSize));
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    // event listener for window resize
    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const showNextCards = () => {
    const startIndex = currentSet * pageSize;
    const endIndex = startIndex + pageSize;
    if (startIndex < cardData.length) {
      setDisplayedCards(cardData.slice(startIndex, endIndex));
      setCurrentSet(currentSet + 1);
    }
  };

  const showPreviousCards = () => {
    const startIndex = Math.max((currentSet - 2) * pageSize, 0);
    const endIndex = startIndex + pageSize;
    if (startIndex >= 0) {
      setDisplayedCards(cardData.slice(startIndex, endIndex));
      setCurrentSet(currentSet - 1);
    }
  };

  return (
    <div className='flex flex-col mx-auto space-y-9 lg:w-[1440px] lg:h-[679px] ml-4 md:ml-8 lg:ml-24 mt-4 mb-32 max-h-[1915px]'>
      <div className='w-full h-auto space-y-5 lg:space-y-10 mr-4 md:mr-8 lg:mr-0'>
        <div>
          <h3 className='text-[#0E2368] text-4xl font-semibold mt-28 mb-10 ml-14'>Latest Articles</h3>
        </div>

        {/* cards */}
        <div className='lg:flex lg:w-[1225px] ml-8 mb-0'>
          <div className={`grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6`}>
            {displayedCards.map((card, index) => (
              <div
                key={card.id}
                className={`border border-[#93A2D3] bg-white rounded-3xl ${isSmallScreen ? 'w-[271px] h-[484px]' : 'lg:w-[383px] lg:h-[554px]'}`}
              >
                <div className='p-4 space-y-5 h-full relative'>
                  <img src={card.imageUrl} alt={`Card Image ${card.id}`} className='w-full h-auto rounded-md' />
                  <h3 className='text-[#0E2368] font-bold text-2xl ml-2'>{card.title}</h3>
                  <p className='text-gray-600 ml-2'>{card.content}</p>
                  <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2'>
                    <button className='bg-white rounded-full text-[#424961] px-2 py-1 border border-[#424961] w-[131px] h-[42px]'>
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* buttons - Render on larger screens */}
        <div className='hidden lg:flex justify-center items-center space-y-2 lg:space-y-0 lg:space-x-1 lg:mr-52 mt-12'>
          <button
            className={`rounded-full px-2 py-1 relative ${currentSet === 1 ? 'text-black' : 'text-[#424961]'} mb-2 lg:mb-0 lg:mr-2`}
            onClick={showPreviousCards}
            disabled={currentSet === 1}
          >
            <IoIosArrowBack className='text-xl' />
            <div className='absolute inset-0 border border-[#424961]'></div>
          </button>

          <div className={`text-${currentSet === 1 ? 'black' : '[#424961]'} lg:mt- lg:mr-2`}>
            {currentSet}/{totalSets}
          </div>

          <button
            className={`rounded-full px-2 py-1 relative ${currentSet === totalSets ? 'text-black' : 'text-[#424961]'} mt-2 lg:mt-0 lg:ml-2`}
            onClick={showNextCards}
            disabled={currentSet === totalSets}
          >
            <IoIosArrowForward className='text-xl' />
            <div className='absolute inset-0 border border-[#424961]'></div>
          </button>
        </div>
      </div>

     {/* buttons - Render on small screens */}
  <div className='lg:hidden flex justify-center items-center mt-12 space-x-1'>
  <button
    className={`rounded-full px-2 py-1 mt-8 relative ${currentSet === 1 ? 'text-black' : 'text-[#424961]'} mr-2`}
    onClick={showPreviousCards}
    disabled={currentSet === 1}
     >
    <IoIosArrowBack className='text-xl' />
    <div className='absolute inset-0 border border-[#424961]'></div>
  </button>
  <div className={`mt-8 text-${currentSet === 1 ? 'black' : '[#424961]'}`}>
    {currentSet}/{totalSets}
  </div>
  <button
    className={`rounded-full px-2 py-1 mt-8 relative ${currentSet === totalSets ? 'text-black' : 'text-[#424961]'} ml-2`}
    onClick={showNextCards}
    disabled={currentSet === totalSets}
  >
    <IoIosArrowForward className='text-xl' />
    <div className='absolute inset-0 border border-[#424961]'></div>
  </button>
</div>
    </div>
  );
};
