import React from 'react'

const OfferCard = ({offer}) => {
  return (
        <div className='shadow shadow-[#31208A0D] bg-white text-center flex items-center justify-center flex-col px-4 py-6'>
            <img src={offer.image} alt="" className='w-[70px] mb-[30px] font-[500]'/>
            <p className='text-[#151875] mb-[6px]'>{offer.title}</p>
            <p className='text-[#1A0B5B4D]'>{offer.description}</p>
        </div>
  )
}

export default OfferCard