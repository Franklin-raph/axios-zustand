import React from 'react'
import { BiCart, BiHeart } from 'react-icons/bi'

const LatestProductCard = ({product}) => {
  return (
        <div key={product.id} className='group cursor-pointer'>
            <div className='bg-[#F7F7F7] flex items-center justify-center py-9 flex-col relative h-[300px] group-hover:bg-white'>
                <div className='group-hover:flex items-center flex-col absolute left-2 bottom-2 gap-3 hidden'>
                    <div className='text-[#2F1AC4] bg-[#EEEFFB] p-2 text-[18px] rounded-full cursor-pointer'>
                        <BiCart />
                    </div>
                    <div className='text-[#1389FF] bg-[#EEEFFB] p-2 text-[18px] rounded-full cursor-pointer'>
                        <BiHeart />
                    </div>
                </div>
                <img src={product.image} alt="" className='w-[200px]' />
            </div>
            <div className='flex items-center justify-between mt-2'>
                <p className='text-[#151875] text-[14px] underline'>{product.title}</p>
                <p className='text-[#151875] text-[14px]'>${product.price} <span className='text-[#FB2448] ml-4 text-[12px] line-through'>${product.oldPrice}</span> </p>
            </div>
        </div>
    )
}

export default LatestProductCard